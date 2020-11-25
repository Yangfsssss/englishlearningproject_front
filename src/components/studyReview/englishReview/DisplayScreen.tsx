import React from "react";

import { Li, Span } from "../../../styledComponents/General";

import { SectionItem } from "../../../types";

const DisplayScreen: React.FC<{ choseItem: SectionItem|null }> = ({ choseItem }) => {
  return (
    choseItem && (
      <ul>
        {choseItem.wordUnits.map((wordUnit) => (
          <Li margin="0 0 5px 0">
            <Span fontSize="22px" fontFamily="Georgia">
              {wordUnit.word}
            </Span>
            {"  "}
            <Span fontSize="22px" fontFamily="Georgia">
              {wordUnit.translation}
            </Span>
          </Li>
        ))}
      </ul>
    )
  );
};

export default DisplayScreen;
