import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { Div, Input, StyledButton, P, Textarea } from "../../styledComponents/General";

import { createNewQAUnit } from "../../reducers/QAUnitReducer";
import { getDate } from "../../utils";

const Basic: React.FC = () => {
  const [question, setQuestion] = useState<string>(" ");
  const [answer, setAnswer] = useState<string>(" ");
  const [isQuestionAdded, setIsQuestionAdded] = useState<boolean>(false);
  const [QAType, setQAType] = useState<string>("JavaScriptA");

  const dispatch = useDispatch();

  const textareaRef = useRef<HTMLTextAreaElement>(null!);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value);
  };

  const handleAddQuestion = () => {
    setIsQuestionAdded(true);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.currentTarget.value);
  };

  const handleSaveQA = async () => {
    if (window.confirm("Finish This Question And Save?")) {
      const newQAUnit = {
        type: QAType,
        date: getDate(),
        question,
        answer,
      };

      const resStatus = (await dispatch(createNewQAUnit(newQAUnit))) as unknown;
      if (resStatus === 200) {
        alert("Saved!");
        setIsQuestionAdded(false);
        setQuestion(" ");
        setAnswer(" ");
        setQAType("JavaScriptA");
      } else {
        alert("Save Failed,Please Try Again");
      }
    }
  };

  const handleSelectQAType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQAType(e.currentTarget.value);
  };

  const showQuestionOrInputField = () => {
    return isQuestionAdded ? (
      <P width="21em" fontSize="32px" fontFamily="Georgia">
        {question}
      </P>
    ) : (
      <>
        <Input
          width="21em"
          height="50px"
          marginRight="2px"
          fontSize="32px"
          fontFamily="Georgia"
          value={question}
          onChange={handleQuestionChange}
        />
        <StyledButton transform="translate(0,-1px)" onClick={handleAddQuestion}>
          Add
        </StyledButton>
      </>
    );
  };

  return (
    <Div position="absolute" left="10%" top="10%">
      <Div marginBottom="10px">
        <P marginBottom="5px" fontSize="26px" fontFamily="Georgia">
          Q:
        </P>
        {showQuestionOrInputField()}
      </Div>
      <Div>
        <P marginBottom="5px" fontSize="26px" fontFamily="Georgia">
          A:
        </P>
        <Textarea
          width="21em"
          marginRight="2px"
          fontSize="32px"
          fontFamily="Georgia"
          ref={textareaRef}
          value={answer}
          onChange={handleTextareaChange}
        />
        <StyledButton transform="translate(0,309px)" onClick={handleSaveQA}>
          Save
        </StyledButton>
      </Div>
      <select value={QAType} onChange={handleSelectQAType}>
        <option value="JavaScriptA">JavaScriptA</option>
        <option value="JavaScriptB">JavaScriptB</option>
        <option value="CssA">CssA</option>
        <option value="CssB">CssB</option>
        <option value="React">React</option>
      </select>
    </Div>
  );
};

export default Basic;
