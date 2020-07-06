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
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)"
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

  return (
    <div style={mainDiv}>
      <Button display={back} onClick={handleGoBack}>
        back
      </Button>
      <div style={home}>
        <Button
          width="8em"
          height="4em"
          margin="0 3em 0"
          onClick={handleShowNewStudy}
        >
          New Study
        </Button>
        <Button
          width="8em"
          height="4em"
          margin="0 0 0 3em"
          onClick={handleShowStudyReview}
        >
          Study Review
        </Button>
      </div>
      <div style={newStudy}>
        <NewStudy />
      </div>
      <div style={studyReview}>
        <StudyReview sections={sections} />
      </div>
    </div>
  );
};

export default Home;
