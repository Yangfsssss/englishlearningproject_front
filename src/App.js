import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";

import { Div, GlobalStyle } from "./styledComponents/General";

import { initializeRecords } from "./reducers/recordReducer";
import { initializeQAUnits } from "./reducers/QAUnitReducer";
import { initializeSections } from "./reducers/sectionReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeRecords());
    dispatch(initializeQAUnits());
    dispatch(initializeSections());
  }, [dispatch]);

  const sections = useSelector((state) => state.sections);
  const QAUnits = useSelector((state) => state.QAUnits);
  const records = useSelector((state) => state.records);
  console.log(QAUnits);
  console.log(sections);
  console.log(records);

  return (
    <Div className="App" border="1px soild black">
      <GlobalStyle />
      <Router>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route path="/home">
          <Home sections={sections} records={records} />
        </Route>
      </Router>
    </Div>
  );
};

export default App;
