import { useState, useRef } from "react"
import { useSignup } from "../hooks/useSignup"

import first from '../images/lhome.jpg';
import second from '../images/loginland.jpg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  const ref = useRef();
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '80vh'}}>
      <section style={{ backgroundColor: '#000', height: '100%', width: '100%', position: 'relative'}}>
        <Parallax pages={4} ref={ref}>
      
          <ParallaxLayer
              offset={0}
              speed={1}
              factor={2}
              style={{
              backgroundImage: `url(${first})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url(${second})`,
              backgroundSize: 'cover',
            }}
          >
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.2}
            speed={0.05}
            onClick={() => ref.current.scrollTo(3)}
          >
            <h2 style={{ color: '#1aac83', textAlign: 'center'}}>Welcome to Sí Workouts</h2>
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={3}
            speed={2}
            onClick={() => ref.current.scrollTo(0)}
            style={{
              textShadow: '5px 2px #1aac83'
            }}
          >
            <h2>We hope you enjoy!</h2>
          </ParallaxLayer>
        </Parallax>
      </section>
      <section style={{height: '100%', width: '100%'}}>
      <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
      </section>
    </div>
  )
}

export default Signup