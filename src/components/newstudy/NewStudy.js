import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
// import network from "../services/network";

// import addWord from '../../reducers/sectionReducer'
import { createNewRecord } from "../../reducers/recordReducer";
import { createNewSection } from "../../reducers/sectionReducer";
import { getDate } from "../../utils";

import { Div, StyledButton } from "../../styledComponents/General";
import { Li, Span, Img, Input } from "../../styledComponents/newStudy/newStudy";

const NewStudy = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [rawWordUnit, setRawWordUnit] = useState("");
  const [wordUnits, setWordUnits] = useState([]);
  const [isUrlSaved, setIsUrlSaved] = useState(false);
  const [isTitleSaved, setIsTitleSaved] = useState(false);
  const [isAddToRecord, setIsAddToRecord] = useState(false);

  const wordInputEl = useRef(null);

  const dispatch = useDispatch();

  const displayTitle = isTitleSaved ? "none" : "";
  const displayUrl = isUrlSaved ? "none" : "";

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);
  const handleWordChange = (e) => setRawWordUnit(e.target.value);

  const saveTitle = (e) => {
    e.preventDefault();

    if (title === "" && title.trim() === "") {
      alert("Title Cannot Be Empty");
    } else {
      setIsTitleSaved(true);
    }
  };

  const saveUrl = (e) => {
    e.preventDefault();

    if (url === "" && url.trim() === "") {
      alert("Url Cannot Be Empty");
    } else {
      setIsUrlSaved(true);
    }
  };

  const saveWord = async (e) => {
    e.preventDefault();

    if (rawWordUnit === "" && rawWordUnit.trim() === "") {
      alert("Word Cannot Be Empty");
    } else {
      let index = rawWordUnit.indexOf("@");

      let wordUnit = {
        word: rawWordUnit.substr(0, index),
        translation: rawWordUnit.substr(index + 1)
      };

      setWordUnits(wordUnits.concat(wordUnit));
      setRawWordUnit("");
      if (wordInputEl && wordInputEl.current) {
        wordInputEl.current.focus();
      }
    }
  };

  const handleSaveSection = async (e) => {
    e.preventDefault();

    if (window.confirm("Finish This Section And Save?")) {
      const newSection = {
        date: getDate(),
        items: {
          title: title.trim(),
          url: url.trim(),
          wordUnits: wordUnits.map((wordUnit) => ({
            word: wordUnit.word.trim(),
            translation: wordUnit.translation
          }))
        }
      };

      let recordRes = null;
      let sectionRes = null;

      if (isAddToRecord) {
        const newRecord = {
          date: getDate(),
          item: [
            {
              memo: title.trim(),
              url: url.trim()
            }
          ]
        };
        recordRes = dispatch(createNewRecord(newRecord));
        sectionRes = dispatch(createNewSection(newSection));
        recordRes = await recordRes;
        sectionRes = await sectionRes;
      } else {
        sectionRes = await dispatch(createNewSection(newSection));
      }

      if (
        (!recordRes && sectionRes.status === 200) ||
        (recordRes.status === 200 && sectionRes.status === 200)
      ) {
        alert("Saved!");
        setTitle("");
        setUrl("");
        setRawWordUnit("");
        setWordUnits("");
        setIsTitleSaved(false);
        setIsUrlSaved(false);
      } else {
        alert("Save Failed,Please Try Again");
      }
    }
  };

  const showTitleOrAddButton = () => {
    return isTitleSaved ? (
      <Span fontSize="32px" fontFamily="Georgia">
        {" "}
        {title}
      </Span>
    ) : (
      <Input
        width="21em"
        height="50px"
        fontSize="32px"
        fontFamily="Georgia"
        value={title}
        onChange={handleTitleChange}
      />
    );
  };

  const showUrlOrAddButton = () => {
    return isUrlSaved ? (
      <Span fontSize="32px" fontFamily="Georgia">
        {" "}
        {url}
      </Span>
    ) : (
      <Input
        width="21em"
        height="50px"
        fontSize="32px"
        fontFamily="Georgia"
        value={url}
        onChange={handleUrlChange}
      />
    );
  };

  const handleRemoveWord = (index) => {
    const newWordUnits = wordUnits.filter((element, idx) => idx !== index);
    setWordUnits(newWordUnits);
  };

  const handleRadioSelection = (e) => {
    setIsAddToRecord(!isAddToRecord);
  };

  return (
    <form onSubmit={handleSaveSection}>
      <Div position="absolute" left="10%" top="10%">
        <Span fontSize="26px" fontFamily="Georgia">
          Title:
        </Span>
        {showTitleOrAddButton()}
        <StyledButton height="35px" display={displayTitle} onClick={saveTitle}>
          Add
        </StyledButton>
      </Div>

      <Div position="absolute" left="10%" top="30%">
        <Span fontSize="26px" fontFamily="Georgia">
          URL:
        </Span>
        {showUrlOrAddButton()}
        <StyledButton height="35px" display={displayUrl} onClick={saveUrl}>
          Add
        </StyledButton>
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
                  <Span
                    display="inline-block"
                    width="140px"
                    fontSize="21px"
                    fontFamily="Georgia"
                  >
                    {wordUnit.word}
                  </Span>
                  <Span
                    display="inline-block"
                    fontSize="21px"
                    fontFamily="Georgia"
                  >
                    {"  "}
                    {wordUnit.translation}
                  </Span>
                </Li>
              ))}
        </ul>
      </Div>

      <StyledButton right="0" type="submit">
        Save
      </StyledButton>

      <Div position="absolute" right="0" top="10%">
        <input
          type="checkbox"
          value={isAddToRecord}
          onChange={handleRadioSelection}
        />
        <Span>add to record</Span>
      </Div>
    </form>
  );
};

export default NewStudy;
