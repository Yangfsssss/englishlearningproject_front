import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { initializeData } from './reducers/sectionReducer'

import Button from './styledComponents/Button'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import GlobalStyle from './styledComponents/GlobalStyle'

// import "./App.css";
// import "antd/dist/antd.css";

const App = () => {
  // const [isDarkModeChosen, setIsDarkModeChosen] = useState(false);

  // const style = isDarkModeChosen
  // ? { filter: "invert(1) hue-rotate(180deg)" }
  // : null;

  const dispatch = useDispatch()
  const sections = useSelector((state) => state.sections)
  const records = useSelector((state) => state.records)
  console.log(sections, records)

  // const switchDarkMode = () => setIsDarkModeChosen(!isDarkModeChosen);

  // useEffect(() => {
  //   dispatch(initializeData());
  // }, [dispatch]);

  return (
    <div className="App" /*style={style}*/>
      {/* <Button onClick={switchDarkMode}>Dark Mode</Button> */}
      <GlobalStyle />
      <Router>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route path="/home">
          <Home sections={sections} records={records} />
        </Route>
      </Router>
    </div>
  )
}

export default App
