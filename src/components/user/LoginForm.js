import React, { useState, useRef } from "react";
import { useHistory } from "react-router";

import { Div, Input, Span } from "../../styledComponents/General";
import { StyledButton } from "../../styledComponents/user/LoginForm";

import { login, signUp } from "../../services/login";

const LoginForm = ({ setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [signInStyle, setSignInStyle] = useState(null);

  const history = useHistory();

  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleChooseSignInForm = () => {
    setSignInStyle({ margin: "0" });
    setUsername("");
  };

  const handleChooseSignUpForm = () => {
    setSignInStyle({ margin: "0 0 0 -365px" });
    setUsername("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await login({ username });

    if (res.status === 200) {
      alert("Sign In Succeed!");
      setCurrentUser(username);
      history.push("/home");
    } else {
      alert("Sign in Failed,Please try again");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const res = await signUp({ username });

    if (res.status === 200) {
      alert("Sign Up Succeed!");
      setCurrentUser(username);
      history.push("/home");
    } else {
      alert("Sign up Failed,Please try again");
    }
  };

  return (
    <Div //0
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%,-50%)"
      border="2px black solid"
      borderRadius=".3em"
    >
      <Div //1-1
        margin="5px 0 5px 5px"
      >
        <Span onClick={handleChooseSignInForm} cursor="pointer">
          Sign in
        </Span>
        <Span>/</Span>
        <Span onClick={handleChooseSignUpForm} cursor="pointer">
          Sign up
        </Span>
      </Div>

      <Div //1-2
        width="366px"
        height="250px"
        // border="1px black solid"
      >
        <Div //1-2-1
          display="flex"
          width="366px"
          margin="0"
          // height="300px"
          overflow="hidden"
          // border="1px black solid"
        >
          <Div //1-2-1-1
            display="block"
            margin="0 auto"
            padding="5px"
            width="355px"
            height="120px"
            style={signInStyle}
          >
            <form onSubmit={handleLogin}>
              <Input
                type="text"
                display="block"
                height="50px"
                borderRadius="0.2em"
                fontSize="32px"
                fontFamily="Georgia"
                value={username}
                onChange={handleUsernameChange}
              />

              <StyledButton
                type="submit"
                display="block"
                margin="8px auto"
                width="300px"
                height="28px"
              >
                Sign in
              </StyledButton>
            </form>
          </Div>

          <Div //1-2-1-2
            padding="5px"
          >
            <form onSubmit={handleSignUp}>
              <Input
                type="text"
                height="50px"
                borderRadius="0.2em"
                fontSize="32px"
                fontFamily="Georgia"
                value={username}
                onChange={handleUsernameChange}
              />

              <StyledButton
                type="submit"
                display="block"
                margin="8px auto"
                width="85%"
                height="28px"
              >
                Sign up
              </StyledButton>
            </form>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default LoginForm;
