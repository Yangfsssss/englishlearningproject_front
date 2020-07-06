import React, { useState } from "react";
import loginService from "../services/login";

import Button from "../styledComponents/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = e => setUsername(e.target.value);

  const handleLogin = async () => {
    await loginService.login(username);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
