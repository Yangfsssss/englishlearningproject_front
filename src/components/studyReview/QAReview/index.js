import React, { useState } from "react";

import { Div } from "../../../styledComponents/General";

const QAReview = ({ QAUnits, visibility }) => {
  const [QAType, setQAType] = useState("Select");
  const [QAUnitsToShow, setQAUnitsToShow] = useState(QAUnits);

  const handleSelectQAType = (e) => {
    setQAType(e.target.value);
    e.target.value === "Select"
      ? setQAUnitsToShow(QAUnits)
      : setQAUnitsToShow(
          QAUnits.filter((QAUnit) => QAUnit.type === e.target.value)
        );
  };
  return (
    <Div
      display={visibility ? "block" : "none"}
      width="100%"
      // border="1px solid black"
    >
      <Div margin="0 0 20px 0">
        <select value={QAType} onChange={handleSelectQAType}>
          <option value="Select">Select</option>
          <option value="JavaScriptA">JavaScriptA</option>
          <option value="JavaScriptB">JavaScriptB</option>
          <option value="CssA">CssA</option>
          <option value="CssB">CssB</option>
          <option value="React">React</option>
        </select>
      </Div>

      <Div>
        {QAUnitsToShow.map((QAUnit) => (
          <Div
            width="60em"
            margin="0 0 15px 0"
            border="1px solid black"
            borderRadius="5px"
          >
            {/* {QAUnit.type} */}
            {QAUnit.date}
            <hr />
            {QAUnit.question}
            <hr />
            {QAUnit.answer}
          </Div>
        ))}
      </Div>
    </Div>
  );
};

export default QAReview;
