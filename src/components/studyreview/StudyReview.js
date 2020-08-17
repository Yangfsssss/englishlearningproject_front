import React from "react";
import { useRouteMatch, Link, Route, useLocation } from "react-router-dom";

import Div from "../../styledComponents/Div";
import Button from "../../styledComponents/Button";

import Section from "./Section";
import SectionDetail from "./SectionDetail";

const StudyReview = ({ sections }) => {
  // let location = useLocation();
  const { path, url } = useRouteMatch();

  // const currentPath =
  // location.pathname === "/home/studyreview" ? "/home" : path;

  return (
    <div>
      {/* <Link to={path}>
        <Button position="absolute" left="0" top="0">
          back
        </Button>
      </Link> */}

      <Div
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%,-50%)"
      >
        <Route exact path={path}>
          {sections.map((section) => (
            <Link to={`${path}/${section.id}`}>
              <Section
                title={section.title}
                // url={section.url}
                // words={section.words}
              />
            </Link>
          ))}
        </Route>
      </Div>

      <Div
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%,-50%)"
      >
        <Route path={`${path}/:id`}>
          <SectionDetail sections={sections} />
        </Route>
      </Div>
    </div>
  );
};

export default StudyReview;
