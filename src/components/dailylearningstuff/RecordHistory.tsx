import React from "react";
import { useDispatch } from "react-redux";

import { deleteRecordItem } from "../../reducers/recordReducer";

import { Div } from "../../styledComponents/General";
import {
  Li,
  A,
  Span,
  Img
} from "../../styledComponents/dailyLearningStuff/recordHistory";

import { Record, Item } from "../../types";

const RecordUnitItemDetail: React.FC<{ item: Item; recordId: string }> = ({
  item,
  recordId
}) => {
  const dispatch = useDispatch();

  const handleDeleteItem = async () => {
    if (window.confirm("Are you sure you want to delete?")) {
      const res = await dispatch(deleteRecordItem(recordId, item._id));
      if (res.status === 200) {
        alert("Deleted!");
      } else {
        alert("Delete failed,please try again");
      }
    }
  };

  return (
    <ul>
      <Li>
        <A
          textDecoration="none"
          target="blank"
          href={item.url}
          color="black"
          width="90%"
        >
          {item.memo}
        </A>
        <Div
          display="inline-block"
          height="32px"
          width="32px"
          position="relative"
        >
          <Img
            onClick={handleDeleteItem}
            src="https://codesandbox.io/api/v1/sandboxes/4ynhw/fs/src/static/img/delete.svg"
            alt="delete"
            width="13px"
          />
        </Div>
      </Li>
    </ul>
  );
};

const RecordUnit: React.FC<{ record: Record }> = ({ record }) => {
  return (
    <Div
      position="relative"
      height="100%"
      minWidth="320px"
      padding="10px"
      boxSizing="content-box"
      borderRight="2px solid black"
    >
      {record.date}
      <hr />
      {record.items.map((item: Item) => (
        <RecordUnitItemDetail item={item} recordId={record.id} />
      ))}
    </Div>
  );
};

const Records: React.FC<{ records: Record[] }> = ({ records }) => {
  return (
    <Div display="flex" height="100%" position="absolute">
      {records.map((record) => <RecordUnit record={record} />).reverse()}
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
