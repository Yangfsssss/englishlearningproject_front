import React from "react";
import { Route, Link, useRouteMatch, useLocation } from "react-router-dom";

import { Div, StyledButton } from "../styledComponents/General";

import NewStudy from "./newstudy/NewStudy";
import Basic from "./basic/Basic";
import StudyReview from "./studyReview/index";
import DailyLearningStuff from "./dailylearningstuff/index";

const Home = ({ sections, QAUnits, records }) => {
  let { path, url } = useRouteMatch();
  let location = useLocation();

  let somewhere;
  switch (location.pathname) {
    case "/home":
      somewhere = "/";
      break;
    case "/home/newstudy":
    case "/home/studyreview":
    case "/home/basic":
      somewhere = "/home";
      break;
    default:
      somewhere = "/home";
      break;
  }

  // const mainDiv = {
  //   width: "90%",
  //   height: "80%",
  //   position: "absolute",
  //   left: "50%",
  //   top: "50%",
  //   transform: "translate(-50%,-50%)"
  // };

  return (
    <Div
      width="90%"
      height="80%"
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%,-50%)"
    >
      <Link to={somewhere}>
        <StyledButton position="absolute" left="0" top="0">
          back
        </StyledButton>
      </Link>

      <Route exact path={path}>
        <Link to={`${url}/newstudy`}>
          <StyledButton
            width="8em"
            height="4em"
            margin="0 3em 0"
            position="absolute"
            left="15%"
            top="25%"
          >
            New Study
          </StyledButton>
        </Link>
        <Link to={`${url}/studyreview`}>
          <StyledButton
            width="8em"
            height="4em"
            margin="0 0 0 3em"
            position="absolute"
            left="15%"
            top="25%"
            transform="translate(105%,0)"
          >
            Study Review
          </StyledButton>
        </Link>
        <Link to={`${url}/dailylearningstuff`}>
          <StyledButton
            width="8em"
            height="4em"
            margin="0 0 0 3em"
            position="absolute"
            left="15%"
            top="25%"
            transform="translate(105%,105%)"
          >
            DailyLearningStuff
          </StyledButton>
        </Link>
        <Link to={`${url}/basic`}>
          <StyledButton
            width="8em"
            height="4em"
            margin="0 3em 0"
            position="absolute"
            left="15%"
            top="25%"
            transform="translate(0,105%)"
          >
            Basic
          </StyledButton>
        </Link>
      </Route>

      <Route path={`${path}/newstudy`}>
        <NewStudy />
      </Route>

      <Route path={`${path}/basic`}>
        <Basic />
      </Route>

      <Route path={`${path}/studyreview`}>
        <StudyReview sections={sections} QAUnits={QAUnits} />
      </Route>

      <Route path={`${path}/dailylearningstuff`}>
        <DailyLearningStuff records={records} />
      </Route>
    </Div>
  );
};

export default Home;
