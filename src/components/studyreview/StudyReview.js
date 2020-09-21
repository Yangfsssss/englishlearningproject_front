import React from "react";

import Div from "../../styledComponents/Div";

import StudyReviewDaily from "./StudyReviewDaily";

const StudyReview = ({ sections }) => {
  return (
    <Div
      width="80%"
      height="80%"
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%,-50%)"
      border="1px solid #bfa"
    >
      {sections.map((section) => (
        <StudyReviewDaily section={section} />
      ))}
    </Div>
  );
};

export default StudyReview;
