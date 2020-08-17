import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Div from "../../styledComponents/Div";
import Input from "../../styledComponents/Input";
import Button from "../../styledComponents/Button";

import { createNewRecord } from "../../reducers/recordReducer";

const NewRecord = () => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const handleTextChange = (e) => setText(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      text,
      url
    };

    dispatch(createNewRecord(newRecord));
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Div
          padding="0 8px"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%,-50%)"
          border="2px solid rgba(0,0,0,0.3)"
          focusBorder="2px solid blue"
          borderRadius="5px"
        >
          <Input
            placeholder="memo"
            display="block"
            width="300px"
            height="40px"
            fontSize="30px"
            padding="0 0 0 0"
            border="none"
            borderRadius="5px"
            focusOutline="none"
            value={text}
            onChange={handleTextChange}
          />
          <hr style={{ width: "95%", margin: "0 auto", textAlign: "center" }} />
          <Input
            placeholder="url"
            display="block"
            width="300px"
            height="40px"
            fontSize="30px"
            border="none"
            borderRadius="5px"
            focusOutline="none"
            value={url}
            onChange={handleUrlChange}
          />
        </Div>
        <Button type="submit" position="absolute" left="80%" top="0">
          Save
        </Button>
      </form>
    </>
  );
};

export default NewRecord;
