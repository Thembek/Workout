import React,{ useState, useRef } from "react"
import { useLogin } from "../hooks/useLogin";

import first from '../images/singup-land.avif';
import second from '../images/loginland.jpg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  const ref = useRef();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '80vh', overflowY: 'inherit'}}>
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
            <h2 style={{ color: '#1aac83', textAlign: 'center', textShadow: '3px 2px #fff'}}>~ Lets get back at it!</h2>
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
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>

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

        <button disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}
      </form>
      </section>
    </div>
  )
}

export default Login;