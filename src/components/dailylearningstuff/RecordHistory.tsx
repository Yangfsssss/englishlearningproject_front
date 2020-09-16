import React from "react";

import Div from "../../styledComponents/Div";
import A from "../../styledComponents/A";

import { Record, Item } from "../../types";

const RecordUnit: React.FC<{ record: Record }> = ({ record }) => {
  return (
    <Div
      height="100%"
      minWidth="300px"
      padding="10px"
      boxSizing="content-box"
      borderRight="2px solid black"
    >
      <ul>
        {record.date}
        <hr />
        {record.items.map((item: Item) => (
          <li>
            <A
              margin="0 0 10px 0"
              textDecoration="none"
              target="blank"
              href={item.url}
              color="black"
            >
              {item.memo}
            </A>
          </li>
        ))}
      </ul>
    </Div>
  );
};

const Records: React.FC<{ records: Record[] }> = ({ records }) => {
  return (
    <Div display="flex" height="100%" position="absolute">
      {records.map((record) => (
        <RecordUnit record={record} />
      ))}
    </Div>
  );
};

const RecordHistory: React.FC<{ records: Record[] }> = ({ records }) => {
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
