import React, { useState } from "react";
<<<<<<< HEAD
import { useHistory, Link } from "react-router-dom";

import Div from "../styledComponents/Div";
import Button from "../styledComponents/Button";

const LoginForm = () => {
  const history = useHistory();
=======
import loginService from "../services/login";

import Button from "../styledComponents/Button";

const LoginForm = () => {
>>>>>>> f84a09d8a845db7561f7f79ad27ffef13ce2c76c
  const [username, setUsername] = useState("");

  const handleUsernameChange = e => setUsername(e.target.value);

  const handleLogin = async () => {
<<<<<<< HEAD
    // await loginService.login(username);
    history.push("/home");
=======
    await loginService.login(username);
>>>>>>> f84a09d8a845db7561f7f79ad27ffef13ce2c76c
  };

  return (
    <Div
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%,-50%)"
    >
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={handleUsernameChange} />
<<<<<<< HEAD
        <Link to="/home">
          <Button type="submit">Login</Button>
        </Link>
      </form>
    </Div>
=======
        <Button type="submit">Login</Button>
      </form>
    </div>
>>>>>>> f84a09d8a845db7561f7f79ad27ffef13ce2c76c
  );
};

export default LoginForm;
