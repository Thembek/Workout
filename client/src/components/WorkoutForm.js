import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext';
import AddIcon from '@mui/icons-material/Add';

import GymSets from '../components/GymSets';

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const workout = {title, load, reps}

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    function validateImg(e){
        const file = e.target.files[0];
        if (file.size > 5048576) {
            return alert('Maximum file size is 5MB');
        } else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }
    

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <section>
        <GymSets />
      </section>
      <section>
        <form className="create" onSubmit={handleSubmit}>
          <h3>Enter Your Workout</h3>

          <label>Excersize Title:</label>
          <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
          />

          <label>Load (in kg):</label>
          <input 
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            className={emptyFields.includes('load') ? 'error' : ''}
          />

          <label>Sets:</label>
          <input 
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            className={emptyFields.includes('reps') ? 'error' : ''}
          />

          <button>Add Workout</button>
          {error && <div className="error">{error}</div>}
        </form>
      </section>
      <section style={{ height: '550px', width: '620px', margin: '20px', borderRadius: '10px', backgroundColor: '#000', position: 'relative', dispaly: 'flex', flexDirection: 'column'}}>
        <div className="upload" style={{position: 'absolute', height: '100%', width: '100%'}}>
          <label htmlFor="image-upload" className="image-upload-label">
            <AddIcon className="add-picture-icon"/>
          </label>
            <input 
              type="file" id="image-upload"
              hidden accept="image/png, image/jpeg" 
              onChange={validateImg}
            />
        </div>

        <div className="uploaded-image">
          <img src={imagePreview} alt="uploaded-image" />
        </div>
      </section>
    </div>
  )
}

export default WorkoutForm