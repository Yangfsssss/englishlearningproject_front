import React from "react";

import { Div, Span, Img } from "../styledComponents/General";

const Indicator = ({ dataStatus }) => {
  return (
    <Div position="absolute" left="70%">
      <Div height="30px">
        <Div display="inline-block" margin="0 5px 0 0" padding="5px 0 5px 0">
          <Img
            display="inline-block"
            width="20px"
            height="20px"
            borderRadius="10px"
            verticalAlign="middle"
            backgroundColor={dataStatus.sections ? "green" : "red"}
          />
        </Div>
        <Span
          display="inline-block"
          height="20px"
          verticalAlign="middle"
          padding="7px 0 3px 0"
          fontFamily="Georgia"
        >
          sections
        </Span>
      </Div>

      <Div height="30px">
        <Div display="inline-block" margin="0 5px 0 0" padding="5px 0 5px 0">
          <Img
            display="inline-block"
            width="20px"
            height="20px"
            borderRadius="10px"
            verticalAlign="middle"
            backgroundColor={dataStatus.QAUnits ? "green" : "red"}
          />
        </Div>
        <Span
          display="inline-block"
          height="20px"
          verticalAlign="middle"
          padding="7px 0 3px 0"
          fontFamily="Georgia"
        >
          QAunits
        </Span>
      </Div>

      <Div height="30px">
        <Div display="inline-block" margin="0 5px 0 0" padding="5px 0 5px 0">
          <Img
            display="inline-block"
            width="20px"
            height="20px"
            borderRadius="10px"
            verticalAlign="middle"
            backgroundColor={dataStatus.records ? "green" : "red"}
          />
        </Div>
        <Span
          display="inline-block"
          height="20px"
          verticalAlign="middle"
          padding="7px 0 3px 0"
          fontFamily="Georgia"
        >
          records
        </Span>
      </Div>
    </Div>
  );
};

export default Indicator;
