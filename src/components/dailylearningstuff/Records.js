import React from "react";

// import { Link } from "react-router-dom";

import Div from "../../styledComponents/Div";
import A from "../../styledComponents/A";

const Record = ({ record }) => {
  return (
    <Div
      height="100%"
      minWidth="120px"
      padding="10px"
      boxSizing="content-box"
      borderRight="2px solid black"
    >
      <ul>
        {record.date}
        <hr />
        <li>
          <A textDecoration="none" target="blank" href={record.url}>
            {record.memo}
          </A>
        </li>
      </ul>
    </Div>
  );
};

const Records = ({ records }) => {
  return (
    <Div display="flex" height="100%" position="absolute">
      {records.map((record) => (
        <Record record={record} />
      ))}
    </Div>
  );
};

export default Records;
