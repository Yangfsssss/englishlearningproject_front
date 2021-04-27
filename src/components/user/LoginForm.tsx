import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Div, Input, Span } from "../../styledComponents/General";
import { StyledButton } from "../../styledComponents/user/LoginForm";

import { login, signUp } from "../../services/login";
// import { initUser } from "../../reducers/userReducer";

interface SignInStyle {
  margin: string;
}

const LoginForm: React.FC<{ setCurrentUser: (value: string | null) => void }> = ({ setCurrentUser }) => {
  const [username, setUsername] = useState<string>("");
  const [signInStyle, setSignInStyle] = useState<SignInStyle>({ margin: "0" });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.currentTarget.value);

  const handleChooseSignInForm = () => {
    setSignInStyle({ margin: "0" });
    setUsername("");
  };

  const handleChooseSignUpForm = () => {
    setSignInStyle({ margin: "0 0 0 -365px" });
    setUsername("");
  };

  const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await login({ username });

    if (res.status === 200) {
      alert("Sign In Succeed!");
      dispatch({ type: "INIT_USER", data: res });
      history.push("/home");
    } else {
      alert("Sign in Failed,Please try again");
    }
  };

  const handleSignUp = async (e: React.ChangeEvent<HTMLFormElement>) => {
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
    <Div
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%,-50%)"
      border="2px black solid"
      borderRadius=".3em"
    >
      <Div margin="5px 0 5px 5px">
        <Span onClick={handleChooseSignInForm} cursor="pointer">
          Sign in
        </Span>
        <Span>/</Span>
        <Span onClick={handleChooseSignUpForm} cursor="pointer">
          Sign up
        </Span>
      </Div>

      <Div width="366px" height="250px">
        <Div display="flex" width="366px" margin="0" overflow="hidden">
          <Div display="block" margin="0 auto" padding="5px" width="355px" height="120px" style={signInStyle}>
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

              <StyledButton type="submit" display="block" margin="8px auto" width="300px" height="28px">
                Sign in
              </StyledButton>
            </form>
          </Div>

          <Div padding="5px">
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

              <StyledButton type="submit" display="block" margin="8px auto" width="85%" height="28px">
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
