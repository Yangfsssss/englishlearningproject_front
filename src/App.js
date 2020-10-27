import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";

import { Div, GlobalStyle } from "./styledComponents/General";

import { initializeRecords } from "./reducers/recordReducer";
import { initializeQAUnits } from "./reducers/QAUnitReducer";
import { initializeSections } from "./reducers/sectionReducer";

const App = () => {
  // const [dataStatus, setDataStatus] = useState({
  //   sections: false,
  //   QAUnits: false,
  //   records: false
  // });
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

  // if (sections.length !== 0) {
  //   setDataStatus({ ...dataStatus, sections: true });
  // }

  // if (QAUnits.length !== 0) {
  //   setDataStatus({ ...dataStatus, QAUnits: true });
  // }

  // if (records.length !== 0) {
  //   setDataStatus({ ...dataStatus, records: true });
  // }
  console.log(dataStatus);
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
          <Home
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
