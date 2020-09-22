import React, { useState } from "react";

import Div from "../../styledComponents/Div";
// import {Section,SectionItem} from '../../types'

const DailyDetail = ({ item, onClick }) => {
  return (
    <Div width="100%" onClick={onClick}>
      {item.title}
    </Div>
  );
};

const WordUnits = ({ wordUnits }) => {
  return (
    <Div width="50%">
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
    //   const wordUnits = section.items.find((item) => item.title === title)
    //     .wordUnits;
    //   setWordUnits(wordUnits);
    // };

    if (wordUnits.length === 0) {
      const matchedWordUnits = section.items.find(
        (item) => item.title === title
      ).wordUnits;
      setWordUnits(matchedWordUnits);
    } else {
      setWordUnits([]);
    }
  };

  return (
    <Div>
      <p>{section.date}</p>
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
