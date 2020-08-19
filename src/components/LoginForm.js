import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import Div from '../styledComponents/Div'
import Button from '../styledComponents/Button'

const LoginForm = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')

  const handleUsernameChange = (e) => setUsername(e.target.value)

  const handleLogin = async () => {
    // await loginService.login(username);
    history.push('/home')
  }

  return (
    <Div
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%,-50%)"
    >
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <Link to="/home">
          <Button type="submit">Login</Button>
        </Link>
      </form>
    </Div>
  )
}

export default LoginForm
