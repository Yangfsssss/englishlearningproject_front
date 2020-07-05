import React, { useState } from 'react'
import loginService from '../services/login'

const LoginForm = () => {
  const [username, setUsername] = useState('')

  const handleUsernameChange = (e) => setUsername(e.target.value)

  const handleLogin = async () => {
    await loginService.login(username)
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
