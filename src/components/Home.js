<<<<<<< HEAD
import React from "react";
import { Route, Link, useRouteMatch, useLocation } from "react-router-dom";

import Div from "../styledComponents/Div";
import Button from "../styledComponents/Button";

import NewStudy from "./newstudy/NewStudy";
import StudyReview from "./studyreview/StudyReview";
import DailyLearningStuff from "./dailylearningstuff/DailyLearningStuff";

const Home = ({ sections, records }) => {
  let { path, url } = useRouteMatch();
  let location = useLocation();

  let somewhere;
  switch (location.pathname) {
    case "/home":
      somewhere = "/";
      break;
    case "/home/newstudy":
    case "/home/studyreview":
      somewhere = "/home";
      break;
    default:
      somewhere = "/home/studyreview";
      break;
  }
=======
import React, { useState, useEffect } from "react";
import network from "../services/network";

import NewStudy from "./NewStudy";
import StudyReview from "./StudyReview";
import Button from "../styledComponents/Button";

const Home = () => {
  const [showNewStudy, setshowNewStudy] = useState(false);
  const [showStudyReview, setshowStudyReview] = useState(false);
  const [sections, setSections] = useState([{ url: 123, words: [1, 2, 3] }]);

  // useEffect(() => {
  //   network.getData().then((sections) => setSections(sections))
  // }, [])
  // console.log(sections)
  const mainDiv = {
    width: "90%",
    height: "80%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)"
    // backgroundColor: "#bfa",
    // border: "1px solid "
  };
  const home = { display: showNewStudy || showStudyReview ? "none" : "" };
  const newStudy = { display: showNewStudy ? "" : "none" };
  const studyReview = { display: showStudyReview ? "" : "none" };
  const back = showNewStudy || showStudyReview ? "" : "none";

  const handleShowNewStudy = () => setshowNewStudy(true);
  const handleShowStudyReview = () => setshowStudyReview(true);
  const handleGoBack = () => {
    setshowNewStudy(false);
    setshowStudyReview(false);
  };
>>>>>>> f84a09d8a845db7561f7f79ad27ffef13ce2c76c

  // const mainDiv = {
  //   width: "90%",
  //   height: "80%",
  //   position: "absolute",
  //   left: "50%",
  //   top: "50%",
  //   transform: "translate(-50%,-50%)"
  // };

  return (
<<<<<<< HEAD
    <Div
      width="90%"
      height="80%"
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%,-50%)"
    >
      <Link to={somewhere}>
        <Button position="absolute" left="0" top="0">
          back
        </Button>
      </Link>

      <Route exact path={path}>
        {/* <Div
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%,-50%)"
        > */}
        <Link to={`${url}/newstudy`}>
          <Button
            width="8em"
            height="4em"
            margin="0 3em 0"
            position="absolute"
            left="40%"
            top="50%"
            transform="translate(-100%,-100%)"
          >
            New Study
          </Button>
        </Link>
        <Link to={`${url}/studyreview`}>
          <Button
            width="8em"
            height="4em"
            margin="0 0 0 3em"
            position="absolute"
            left="40%"
            top="50%"
            // transform="translate(-50%,-50%)"
          >
            Study Review
          </Button>
        </Link>
        <Link to={`${url}/dailylearningstuff`}>
          <Button
            width="8em"
            height="4em"
            margin="0 0 0 3em"
            position="absolute"
            left="65%"
            top="50%"
            // transform="translate(-50%,-50%)"
          >
            DailyLearningStuff
          </Button>
        </Link>
        {/* </Div> */}
      </Route>

      <Route path={`${path}/newstudy`}>
=======
    <div style={mainDiv}>
      <Button
        position="absolute"
        left="0"
        top="0"
        display={back}
        onClick={handleGoBack}
      >
        back
      </Button>
      <div style={home}>
        <Button
          width="8em"
          height="4em"
          margin="0 3em 0"
          position="absolute"
          left="40%"
          top="50%"
          transform="translate(-50%,-50%)"
          onClick={handleShowNewStudy}
        >
          New Study
        </Button>
        <Button
          width="8em"
          height="4em"
          margin="0 0 0 3em"
          position="absolute"
          left="60%"
          top="50%"
          transform="translate(-50%,-50%)"
          onClick={handleShowStudyReview}
        >
          Study Review
        </Button>
      </div>
      <div style={newStudy}>
>>>>>>> f84a09d8a845db7561f7f79ad27ffef13ce2c76c
        <NewStudy />
      </Route>

      <Route path={`${path}/studyreview`}>
        <StudyReview sections={sections} />
<<<<<<< HEAD
      </Route>

      <Route path={`${path}/dailylearningstuff`}>
        <DailyLearningStuff records={records} />
      </Route>
    </Div>
=======
      </div>
    </div>
>>>>>>> f84a09d8a845db7561f7f79ad27ffef13ce2c76c
  );
};

export default Home;
