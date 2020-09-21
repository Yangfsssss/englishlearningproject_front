import React, { useState } from "react";

import DailyDetail from "./DailyDetail";

import Div from "../../styledComponents/Div";
// import {Section,SectionItem} from '../../types'

const WordUnits = ({ wordUnits }) => {
  return (
    <Div width="50%" border="1px solid black">
      <ul>
        {wordUnits.map((wordUnit) => (
          <li>
            {wordUnit.word}
            {wordUnit.translation}
          </li>
        ))}
      </ul>
    </Div>
  );
};

const SectionDetail = ({ section }) => {
  const [wordUnits, setWordUnits] = useState([]);

  const handleShowWordUnits = (title) => {
    const wordUnits = section.items.find((item) => item.title === title)
      .wordUnits;
    setWordUnits(wordUnits);
  };

  return (
    <Div>
      {section.date}
      <Div display="flex">
        <Div width="50%">
          {section.items.map((item) => (
            <DailyDetail
              item={item}
              onClick={() => handleShowWordUnits(item.title)}
            />
          ))}
        </Div>
        <WordUnits wordUnits={wordUnits} />
      </Div>
    </Div>
  );
};

export default SectionDetail;
