import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import Div from "../styledComponents/Div";
import Button from "../styledComponents/Button";
import Input from "../styledComponents/Input";

const LoginForm = () => {
  // const history = useHistory()
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleLogin = async () => {
    // await loginService.login(username);
    // history.push('/home')
  };

  return (
    <Div
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-100%,-100%)"
    >
      <form onSubmit={handleLogin}>
        <Input
          type="text"
          height="50px"
          fontSize="32px"
          fontFamily="Georgia"
          value={username}
          onChange={handleUsernameChange}
        />
        <Link to="/home">
          <Button type="submit" height="35px">
            Login
          </Button>
        </Link>
      </form>
    </Div>
  );
};

export default LoginForm;
