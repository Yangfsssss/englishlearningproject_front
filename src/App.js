import React from "react";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import GlobalStyle from "./styledComponents/GlobalStyle";

import Button from "./styledComponents/Button";

const App = () => {
  // const darkMode = {
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   zIndex: "9999",
  //   mixBlendMode: "difference",
  //   backgroundColor: "#fff",
  //   pointerEvents: "none"
  // };

  return (
    <>
      {/* <div style={darkMode} /> */}
      {/* <Button position="absolute" left="80%" top="10%">
        Dark Mode
      </Button> */}
      <GlobalStyle />
      {/* <LoginForm /> */}
      <Home />
    </>
  );
};

export default App;
