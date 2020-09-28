import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
// import network from "../services/network";

// import addWord from '../../reducers/sectionReducer'
import { saveSection } from "../../reducers/sectionReducer";
import { getDate } from "../../utils";

import Div from "../../styledComponents/Div";
import Button from "../../styledComponents/Button";
import Input from "../../styledComponents/Input";
import { Span } from "../../styledComponents/Img";

const NewStudy = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [rawWordUnit, setRawWordUnit] = useState("");
  const [wordUnits, setWordUnits] = useState([]);
  const [isUrlSaved, setIsUrlSaved] = useState(false);
  const [isTitleSaved, setIsTitleSaved] = useState(false);

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
      alert("title cannot be empty");
    } else {
      setIsTitleSaved(true);
    }
  };

  const saveUrl = (e) => {
    e.preventDefault();

    if (url === "" && url.trim() === "") {
      alert("Url cannot be empty");
    } else {
      setIsUrlSaved(true);
    }
  };

  const saveWord = async (e) => {
    e.preventDefault();

    if (rawWordUnit === "" && rawWordUnit.trim() === "") {
      alert("word cannot be empty");
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

    if (window.confirm("finished this section and save?")) {
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

      const res = await dispatch(saveSection(newSection));
      if (res.status === 200) {
        alert("Saved!");
        setTitle("");
        setUrl("");
        setRawWordUnit("");
        setWordUnits("");
        setIsTitleSaved(false);
        setIsUrlSaved(false);
      } else {
        alert("Save failed,please try again");
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

  return (
    <form onSubmit={handleSaveSection}>
      <Div position="absolute" left="10%" top="10%">
        <Span fontSize="26px" fontFamily="Georgia">
          Title:
        </Span>
        {showTitleOrAddButton()}
        <Button height="35px" display={displayTitle} onClick={saveTitle}>
          Add
        </Button>
      </Div>
      <Div position="absolute" left="10%" top="30%">
        <Span fontSize="26px" fontFamily="Georgia">
          URL:
        </Span>
        {showUrlOrAddButton()}
        <Button height="35px" display={displayUrl} onClick={saveUrl}>
          Add
        </Button>
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
        <Button height="35px" onClick={saveWord}>
          Add
        </Button>
      </Div>
      <Div position="absolute" left="10%" top="70%">
        <ul>
          {wordUnits.length === 0
            ? null
            : wordUnits.map((wordUnit, index) => (
                <li key={index}>
                  <Span fontSize="21px" fontFamily="Georgia">
                    {wordUnit.word}
                  </Span>
                  <Span fontSize="21px" fontFamily="Georgia">
                    {" "}
                    {wordUnit.translation}
                  </Span>
                </li>
              ))}
        </ul>
      </Div>
      <Button right="0" type="submit">
        Save
      </Button>
    </form>
  );
};

export default NewStudy;
