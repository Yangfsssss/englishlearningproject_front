import React from "react";

import Div from "../../styledComponents/Div";

import Records from "./Records";

const RecordHistory = ({ records }) => {
  return (
    <Div
      position="absolute"
      width="100%"
      height="40%"
      border="2px solid black"
      top="65%"
      overflow="auto"
    >
      <Records records={records} />
    </Div>
  );
};

export default RecordHistory;
