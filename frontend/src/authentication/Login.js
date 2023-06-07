import React, { useState } from 'react';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  return (
    <div className='login'>
      <span className='login_logo'>Neighborhood Bakers</span>

      <input
        onChange={e => setEmail(e.target.value)}
        type='email'
        placeholder='Email'
        value={email}
      />
      <input
        onChange={e => setPassword(e.target.value)}
        type='password'
        placeholder='Password'
        value={password}
      />

      <button>Log in</button>
    </div>
  )
}

export default Login