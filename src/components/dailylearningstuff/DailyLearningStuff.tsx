import React from "react";
import { Link } from "react-router-dom";

import Button from "../../styledComponents/Button";

import RecordForm from "./RecordForm";
import RecordHistory from "./RecordHistory";

import { Record } from "../../types";

const DailyLearningStuff: React.FC<{ records: Record[] }> = ({ records }) => {
  // const { path, url } = useRouteMatch();

  return (
    <div>
      <Link to="/home">
        <Button position="absolute" left="0" top="0">
          back
        </Button>
      </Link>
      {/* <Link to={`${path}/newrecord`}>
        <Button position="absolute" left="80%" top="0">
          New Record
        </Button>
      </Link> */}

      <RecordForm />
      <RecordHistory records={records} />
    </div>
  );
};

export default DailyLearningStuff;
