import React, { useState } from "react";

import Div from "../../styledComponents/Div";
import { Span } from "../../styledComponents/Img";
// import {Section,SectionItem} from '../../types'

const DailyDetail = ({ item, onClick }) => {
  return (
    <Div width="100%">
      <Span
        fontSize="22px"
        fontFamily="Georgia"
        cursor="pointer"
        onClick={onClick}
      >
        {item.title}
      </Span>
    </Div>
  );
};

const WordUnits = ({ wordUnits }) => {
  return (
    <Div width="50%">
      <ul>
        {wordUnits.map((wordUnit) => (
          <li>
            <Span fontSize="22px" fontFamily="Georgia">
              {wordUnit.word}
            </Span>
            <Span fontSize="22px" fontFamily="Georgia">
              {wordUnit.translation}
            </Span>
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
    <Div margin="0 0 10px 0">
      <Span>{section.date}</Span>
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
