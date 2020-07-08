import React, { useState } from "react";
import network from "../services/network";

import Div from "../styledComponents/Div";
import Button from "../styledComponents/Button";
import Input from "../styledComponents/Input";

const NewStudy = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [wordUnit, setWordUnit] = useState({ word: "", translation: "" });
  const [wordUnits, setWordUnits] = useState([]);
  const [isUrlSaved, setIsUrlSaved] = useState(false);
  const [isTitleSaved, setIsTitleSaved] = useState(false);

  const displayTitle = isTitleSaved ? "none" : "";
  const displayUrl = isUrlSaved ? "none" : "";

  const handleTitleChange = e => setTitle(e.target.value);
  const handleUrlChange = e => setUrl(e.target.value);
  const handleWordChange = e =>
    setWordUnit({ ...wordUnit, word: e.target.value });

  const saveTitle = e => {
    e.preventDefault();

    if (title === "") {
      alert("title cannot be empty");
    } else {
      setIsTitleSaved(true);
    }
  };

  const saveUrl = e => {
    e.preventDefault();

    if (url === "") {
      alert("Url cannot be empty");
    } else {
      setIsUrlSaved(true);
    }
  };

  const saveWord = async e => {
    e.preventDefault();

    if (wordUnit.word === "") {
      alert("word cannot be empty");
    } else {
      const res = await network.translate(wordUnit.word);
      setWordUnit({ ...wordUnit, translation: res.translation });
      setWordUnits(wordUnits.concat(wordUnit));
      setWordUnit({ word: "", translation: "" });
    }
  };

  const saveSection = e => {
    e.preventDefault();

    if (window.confirm("finished this section and save?")) {
      const newSection = {
        url,
        wordUnits
      };
      network.saveData("sections", newSection);
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
    <form onSubmit={saveSection}>
      <Div left="10%" top="10%">
        <h2>Title:</h2>
        {showTitleOrAddButton()}
        <Button height="35px" display={displayTitle} onClick={saveTitle}>
          Add
        </Button>
      </Div>
      <Div left="10%" top="30%">
        <h2>URL:</h2>
        {showUrlOrAddButton()}
        <Button height="35px" display={displayUrl} onClick={saveUrl}>
          Add
        </Button>
      </Div>
      <Div left="10%" top="50%">
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
      <ul>
        {wordUnits.map((wordUnit, index) => (
          <li key={index}>
            {wordUnit.word}
            {wordUnit.translation}
          </li>
        ))}
      </ul>
      <Button right="0" type="submit">
        Save
      </Button>
    </form>
  );
};

export default NewStudy;
