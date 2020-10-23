import React from "react";
// import { useDispatch } from "react-redux";

// import { deleteRecordItem } from "../../reducers/recordReducer";

import { Div, Span } from "../../../styledComponents/General";
import { Div as DivS } from "../../../styledComponents/studyReview/englishReview/StudyReviewDaily";

const DailyDetail = ({ item, onClick }) => {
  return (
    <Div width="100%">
      <Span
        padding="0 0 0 2px"
        fontSize="22px"
        fontFamily="Georgia"
        cursor="pointer"
        onClick={onClick}
      >
        {item.title}
      </Span>
    </Div>
  );
};

const StudyReviewDaily = ({ section, setChoseItem }) => {
  const handleShowWordUnits = (title) => {
    const matchedItem = section.items.find((item) => item.title === title);
    setChoseItem(matchedItem);
  };

  return (
    <DivS margin="0 0 10px 0">
      <Span padding="0 0 0 2px">{section.date}</Span>
      {section.items.map((item) => (
        <DailyDetail
          item={item}
          onClick={() => handleShowWordUnits(item.title)}
        />
      ))}
    </DivS>
  );
};

export default StudyReviewDaily;
