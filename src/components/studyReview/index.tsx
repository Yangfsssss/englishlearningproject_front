import React, { useState } from "react";

import EnglishReview from "./englishReview/index";
import QAReview from "./QAReview/index";

import { Div } from "../../styledComponents/General";
import {
  Div as DivI,
  StyledButton as StyledButtonI
} from "../../styledComponents/studyReview/index";

import { Section, QAUnit } from "../../types";

const Menu: React.FC<{ switchReviewItem: (value: string) => void }> = ({
  switchReviewItem
}) => {
  return (
    <DivI flexDirection="column" height="1000px">
      <StyledButtonI
        display="block"
        onClick={() => switchReviewItem("English")}
      >
        English
      </StyledButtonI>
      <StyledButtonI display="block" onClick={() => switchReviewItem("QA")}>
        QA
      </StyledButtonI>
    </DivI>
  );
};

interface SelectionStatus {
  English:boolean
  QA:boolean
}

const StudyReview: React.FC<{ sections: Section[]; QAUnits: QAUnit[] }> = ({
  sections,
  QAUnits
}) => {
  const [visibility, setVisibility] = useState<SelectionStatus>({ English: true, QA: false });

  const switchReviewItem = (itemName: string): void => {
    switch (itemName) {
      case "English": {
        setVisibility({ English: true, QA: false });
        break;
      }
      case "QA":
        setVisibility({ English: false, QA: true });
        break;
      default:
        break;
    }
  };

  return (
    <DivI flexDirection="row" transform="translate(0,10%)">
      <Div margin="0 50px 0 0">
        <Menu switchReviewItem={switchReviewItem} />
      </Div>

      <Div height="1000px">
        <EnglishReview visibility={visibility.English} sections={sections} />
        <QAReview visibility={visibility.QA} QAUnits={QAUnits} />
      </Div>
    </DivI>
  );
};

export default StudyReview;
