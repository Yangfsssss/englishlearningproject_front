import React from "react";
import { Link } from "react-router-dom";

import { StyledButton } from "../../styledComponents/General";

import RecordForm from "./RecordForm";
import RecordHistory from "./RecordHistory";

import { Record } from "../../types";

const DailyLearningStuff: React.FC<{ records: Record[] }> = ({ records }) => {
  return (
    <div>
      <Link to="/home">
        <StyledButton position="absolute" left="0" top="0">
          back
        </StyledButton>
      </Link>

      <RecordForm />
      <RecordHistory records={records} />
    </div>
  );
};

export default DailyLearningStuff;
