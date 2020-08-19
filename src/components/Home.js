import React from 'react'
import { Route, Link, useRouteMatch, useLocation } from 'react-router-dom'

import Div from '../styledComponents/Div'
import Button from '../styledComponents/Button'

import NewStudy from './newstudy/NewStudy'
import StudyReview from './studyreview/StudyReview'
import DailyLearningStuff from './dailylearningstuff/DailyLearningStuff'

const Home = ({ sections, records }) => {
  let { path, url } = useRouteMatch()
  let location = useLocation()

  let somewhere
  switch (location.pathname) {
    case '/home':
      somewhere = '/'
      break
    case '/home/newstudy':
    case '/home/studyreview':
      somewhere = '/home'
      break
    default:
      somewhere = '/home/studyreview'
      break
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
        <NewStudy />
      </Route>

      <Route path={`${path}/studyreview`}>
        <StudyReview sections={sections} />
      </Route>

      <Route path={`${path}/dailylearningstuff`}>
        <DailyLearningStuff records={records} />
      </Route>
    </Div>
  )
}

export default Home
