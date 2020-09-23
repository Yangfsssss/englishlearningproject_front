import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import network from "../services/network";

// import addWord from '../../reducers/sectionReducer'
import { saveSection } from "../../reducers/sectionReducer";
import { getDate } from "../../utils";

import Div from "../../styledComponents/Div";
import Button from "../../styledComponents/Button";
import Input from "../../styledComponents/Input";

const NewStudy = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [wordUnit, setWordUnit] = useState({ word: "", translation: "" });
  const [wordUnits, setWordUnits] = useState([]);
  const [isUrlSaved, setIsUrlSaved] = useState(false);
  const [isTitleSaved, setIsTitleSaved] = useState(false);

  const dispatch = useDispatch();

  const displayTitle = isTitleSaved ? "none" : "";
  const displayUrl = isUrlSaved ? "none" : "";

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);
  const handleWordChange = (e) =>
    setWordUnit({ word: e.target.value, translation: "" });

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

    if (wordUnit.word === "" && wordUnit.word.trim() === "") {
      alert("word cannot be empty");
    } else {
      setWordUnits(wordUnits.concat(wordUnit));
      setWordUnit({ word: "", translation: "" });
    }
  };

  const handleSaveSection = async (e) => {
    e.preventDefault();
    console.log(wordUnits);

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
        setWordUnit("");
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
      <h1> {title}</h1>
    ) : (
      <Input
        width="21em"
        height="50px"
        value={title}
        onChange={handleTitleChange}
      />
    );
  };

  const showUrlOrAddButton = () => {
    return isUrlSaved ? (
      <h1> {url}</h1>
    ) : (
      <Input
        width="21em"
        height="50px"
        value={url}
        onChange={handleUrlChange}
      />
    );
  };

  return (
    <form onSubmit={handleSaveSection}>
      <Div position="absolute" left="10%" top="10%">
        <h2>Title:</h2>
        {showTitleOrAddButton()}
        <Button height="35px" display={displayTitle} onClick={saveTitle}>
          Add
        </Button>
      </Div>
      <Div position="absolute" left="10%" top="30%">
        <h2>URL:</h2>
        {showUrlOrAddButton()}
        <Button height="35px" display={displayUrl} onClick={saveUrl}>
          Add
        </Button>
      </Div>
      <Div position="absolute" left="10%" top="50%">
        <h2>word:</h2>
        <Input
          width="8em"
          height="50px"
          value={wordUnit.word}
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
                  {wordUnit.word}
                  {wordUnit.translation}
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
