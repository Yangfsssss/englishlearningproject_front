import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import LoginForm from "./components/user/LoginForm";

import { Div, GlobalStyle } from "./styledComponents/General";

import { initializeRecords } from "./reducers/recordReducer";
import { initializeQAUnits } from "./reducers/QAUnitReducer";
import { initializeSections } from "./reducers/sectionReducer";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeRecords());
    // dispatch(initializeQAUnits());
    dispatch(initializeSections());
  }, [dispatch]);

  const dataStatus = {
    sections: useSelector((state) => state.sections.ready),
    QAUnits: useSelector((state) => state.QAUnits.ready),
    records: useSelector((state) => state.records.ready)
  };
  const sections = useSelector((state) => state.sections.data);
  const QAUnits = useSelector((state) => state.QAUnits.data);
  const records = useSelector((state) => state.records.data);

  // console.log(QAUnits);
  console.log("app init");
  console.log(sections);
  console.log("app init");
  // console.log(records);

  return (
    <Div className="App">
      <GlobalStyle />
      <Router>
        <Route exact path="/">
          <LoginForm setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/home">
          <Home
            currentUser={currentUser}
            sections={sections}
            records={records}
            QAUnits={QAUnits}
            dataStatus={dataStatus}
          />
        </Route>
      </Router>
    </Div>
  );
};

export default App;
