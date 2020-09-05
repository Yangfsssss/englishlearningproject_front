import React from "react";

import Div from "../../styledComponents/Div";
import A from "../../styledComponents/A";

interface Item {
  memo: string;
  url: string;
}

interface Record {
  date: string;
  items: Item[];
}

const Record: React.FC<{ record: Record }> = ({ record }) => {
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
        {record.items.map((item: Item) => (
          <li>
            <A
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

const Records: React.FC<{ records: Array<Record> }> = ({ records }) => {
  return (
    <Div display="flex" height="100%" position="absolute">
      {records.map((record) => (
        <Record record={record} />
      ))}
    </Div>
  );
};

const RecordHistory: React.FC<{ records: Array<Record> }> = ({ records }) => {
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
