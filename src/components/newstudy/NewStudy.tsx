import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { createNewRecord } from "../../reducers/recordReducer";
import { createNewSection } from "../../reducers/sectionReducer";
import { getDate } from "../../utils";

import { Div } from "../../styledComponents/General";
import { Li, Span, Img, Input, StyledButton } from "../../styledComponents/newStudy/newStudy";

import { WordUnit, SectionItemToSend, RecordItemToSend } from "../../types";

const NewStudy: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [rawWordUnit, setRawWordUnit] = useState<string>("");
  const [wordUnits, setWordUnits] = useState<WordUnit[]>([]);
  const [isUrlSaved, setIsUrlSaved] = useState<boolean>(false);
  const [isTitleSaved, setIsTitleSaved] = useState<boolean>(false);
  const [isAddToRecord, setIsAddToRecord] = useState<boolean>(false);

  const wordInputEl = useRef<HTMLInputElement>(null!);

  const dispatch = useDispatch();
  console.log(dispatch);

  // const displayTitle = isTitleSaved ? "none" : "";
  // const displayUrl = isUrlSaved ? "none" : "";

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.currentTarget.value);
  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => setRawWordUnit(e.currentTarget.value);

  const saveTitle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (title === "" && title.trim() === "") {
      alert("Title Cannot Be Empty");
    } else {
      setIsTitleSaved(true);
    }
  };

  const saveUrl = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (url === "" && url.trim() === "") {
      alert("Url Cannot Be Empty");
    } else {
      setIsUrlSaved(true);
    }
  };

  const saveWord = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (rawWordUnit === "" && rawWordUnit.trim() === "") {
      alert("Word Cannot Be Empty");
    } else {
      let index = rawWordUnit.indexOf("@");

      let wordUnit = {
        word: rawWordUnit.substr(0, index),
        translation: rawWordUnit.substr(index + 1),
      };

      setWordUnits(wordUnits.concat(wordUnit));
      setRawWordUnit("");
      if (wordInputEl && wordInputEl.current) {
        wordInputEl.current.focus();
      }
    }
  };

  const handleSaveSection = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (window.confirm("Finish This Section And Save?")) {
      const newSection = {
        date: getDate(),
        item: {
          title: title.trim(),
          url: url.trim(),
          wordUnits: wordUnits.map((wordUnit) => ({
            word: wordUnit.word.trim(),
            translation: wordUnit.translation,
          })),
        },
      } as SectionItemToSend;

      let recordStatus;
      let sectionStatus;

      if (isAddToRecord) {
        const newRecord = {
          date: getDate(),
          item: {
            memo: title.trim(),
            url: url.trim(),
          },
        } as RecordItemToSend;

        let recStatus = dispatch(createNewRecord(newRecord));
        let secStatus = dispatch(createNewSection(newSection));
        recordStatus = (await recStatus) as unknown;
        sectionStatus = (await secStatus) as unknown;
      } else {
        sectionStatus = await dispatch(createNewSection(newSection));
      }

      if (
        (!recordStatus && (sectionStatus === 200 || sectionStatus === 201)) ||
        ((recordStatus === 200 || recordStatus === 201) && (sectionStatus === 200 || sectionStatus === 201))
      ) {
        alert("Saved!");
        setTitle("");
        setUrl("");
        setRawWordUnit("");
        setWordUnits([]);
        setIsTitleSaved(false);
        setIsUrlSaved(false);
      } else {
        alert("Save Failed,Please Try Again");
      }
    }
  };

  const showTitleOrAddButton = () => {
    return isTitleSaved ? (
      <Span padding="9px 0" fontSize="32px" fontFamily="Georgia">
        {" "}
        {title}
      </Span>
    ) : (
      <>
        <Input
          width="21em"
          height="50px"
          fontSize="32px"
          fontFamily="Georgia"
          value={title}
          onChange={handleTitleChange}
        />
        <StyledButton height="54px" onClick={saveTitle}>
          Add
        </StyledButton>
        {/* <button style={{height:'54px',lineHeight:'54px'}}>Add</button> */}
      </>
    );
  };

  const showUrlOrAddButton = () => {
    return isUrlSaved ? (
      <Span padding="9px 0" fontSize="32px" fontFamily="Georgia">
        {" "}
        {url}
      </Span>
    ) : (
      <>
        <Input width="21em" height="50px" fontSize="32px" fontFamily="Georgia" value={url} onChange={handleUrlChange} />
        <StyledButton height="35px" onClick={saveUrl}>
          Add
        </StyledButton>
      </>
    );
  };

  const handleRemoveWord = (index: number) => {
    const newWordUnits = wordUnits.filter((element, idx) => idx !== index);
    setWordUnits(newWordUnits);
  };

  const handleRadioSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAddToRecord(!isAddToRecord);
  };

  return (
    <form onSubmit={handleSaveSection}>
      <Div height="54px" position="absolute" left="10%" top="10%">
        <Span padding="12px 0" fontSize="26px" fontFamily="Georgia">
          Title:
        </Span>
        {showTitleOrAddButton()}
      </Div>

      <Div position="absolute" left="10%" top="30%">
        <Span fontSize="26px" fontFamily="Georgia">
          URL:
        </Span>
        {showUrlOrAddButton()}
      </Div>

      <Div position="absolute" left="10%" top="50%">
        <Span fontSize="26px" fontFamily="Georgia">
          word:
        </Span>
        <Input
          ref={wordInputEl}
          width="10em"
          height="50px"
          fontSize="32px"
          fontFamily="Georgia"
          value={rawWordUnit}
          onChange={handleWordChange}
        />
        <StyledButton height="35px" onClick={saveWord}>
          Add
        </StyledButton>
      </Div>

      <Div position="absolute" left="10%" top="70%">
        <ul>
          {wordUnits.length === 0
            ? null
            : wordUnits.map((wordUnit, index) => (
                <Li key={index}>
                  <Img
                    onClick={() => handleRemoveWord(index)}
                    src="https://codesandbox.io/api/v1/sandboxes/4ynhw/fs/src/static/img/delete.svg"
                    alt="delete"
                    display="inline-block"
                    width="13px"
                    margin="0 0 0 auto"
                  />
                  {"      "}
                  <Span display="inline-block" width="140px" fontSize="21px" fontFamily="Georgia">
                    {wordUnit.word}
                  </Span>
                  <Span display="inline-block" fontSize="21px" fontFamily="Georgia">
                    {"  "}
                    {wordUnit.translation}
                  </Span>
                </Li>
              ))}
        </ul>
      </Div>

      <StyledButton position="absolute" top="6%" right="20%" type="submit">
        Save
      </StyledButton>

      <Div position="absolute" right="20%" top="15%">
        <input type="checkbox" onChange={handleRadioSelection} />
        <Span>add to record</Span>
      </Div>
    </form>
  );
};

export default NewStudy;
