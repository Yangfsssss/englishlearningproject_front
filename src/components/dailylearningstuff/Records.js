import React from "react";

// import { Link } from "react-router-dom";

import Div from "../../styledComponents/Div";
import A from "../../styledComponents/A";

const Record = ({ record }) => {
  return (
    <Div height="100%" borderRight="2px solid black">
      <ul>
        {record.date}
        {record.items.map((item) => (
          <li>
            <A textDecoration="none" href={item.url}>
              {item.memo}
            </A>
          </li>
        ))}
      </ul>
    </Div>
  );
};

const Records = ({ records }) => {
  console.log(records);

  return (
    <Div display="flex" height="100%" position="absolute">
      {records.map((record) => (
        <Record record={record} />
      ))}
    </Div>
  );
};

export default Records;
