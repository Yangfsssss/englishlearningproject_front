import React from "react";

import Section from "./Section";

const StudyReview = ({ sections }) => {
  return (
    <div>
      {sections.map(section => (
        <Section url={section.url} words={section.words} />
      ))}
    </div>
  );
};

export default StudyReview;
