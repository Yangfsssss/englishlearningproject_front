import React, { useState } from "react";

import { Div } from "../../../styledComponents/General";

import { QAUnit } from "../../../types";

const QAReview: React.FC<{
  QAUnits: QAUnit[];
  visibility: boolean;
}> = ({ QAUnits, visibility }) => {
  const [QAType, setQAType] = useState<string>("Select");
  const [QAUnitsToShow, setQAUnitsToShow] = useState<QAUnit[]>(QAUnits);

  if (!QAUnits) return null;
  else {
    const handleSelectQAType = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setQAType(e.currentTarget.value);
      if (e.currentTarget.value === "Select") {
        setQAUnitsToShow(QAUnits);
      } else {
        setQAUnitsToShow(QAUnits.filter((QAUnit) => QAUnit.type === e.currentTarget.value));
      }
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
            <Div width="60em" margin="0 0 15px 0" border="1px solid black" borderRadius="5px">
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
  }
};

export default QAReview;
