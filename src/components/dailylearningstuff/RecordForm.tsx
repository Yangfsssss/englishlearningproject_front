import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { StyledButton } from "../../styledComponents/General";
import {
  Div,
  Input,
} from "../../styledComponents/dailyLearningStuff/recordForm";

import { createNewRecord } from "../../reducers/recordReducer";
import { getDate } from "../../utils";

const NewRecord: React.FC = () => {
  const dispatch = useDispatch();

  const memoInputEl = useRef<HTMLInputElement>(
    null!
  );
  const urlInputEl = useRef<HTMLInputElement>(
    null!
  );
  const formEl = useRef<HTMLFormElement>(
    null!
  );

  const handleFormSubmit = async (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    e.persist();

    let date = getDate();
    const newRecord = {
      date,
      item: {
        memo: memoInputEl.current.value,
        url: urlInputEl.current.value,
      },
    };

    const resStatus = (await dispatch(
      createNewRecord(newRecord)
    )) as unknown;

    if (
      resStatus === 200 ||
      resStatus === 201
    ) {
      alert("Saved!");
      e.target.reset();
      if (
        memoInputEl &&
        memoInputEl.current
      ) {
        memoInputEl.current.focus();
      }
    } else {
      alert(
        "Save Failed,Please Try Again!"
      );
    }
  };

  return (
    <>
      <form
        ref={formEl}
        onSubmit={handleFormSubmit}
      >
        <Div
          padding="0 8px"
          position="absolute"
          left="50%"
          top="30%"
          transform="translate(-50%,-50%)"
          border="2px solid rgba(0,0,0,0.3)"
          focusBorder="2px solid lightblue"
          borderRadius="5px"
          backgroundColor="white"
        >
          <Input
            ref={memoInputEl}
            placeholder="memo"
            display="block"
            width="300px"
            height="40px"
            fontFamily="Consolas, 'Courier New', monospace"
            fontSize="30px"
            padding="0 0 0 0"
            border="none"
            borderRadius="5px"
            focusOutline="none"
            overflow="wrap"
          />
          <hr
            style={{
              width: "95%",
              margin: "0 auto",
              textAlign: "center",
            }}
          />
          <Input
            ref={urlInputEl}
            placeholder="url"
            display="block"
            width="300px"
            height="40px"
            fontFamily="Consolas, 'Courier New', monospace"
            fontSize="30px"
            border="none"
            borderRadius="5px"
            focusOutline="none"
          />
        </Div>
        <StyledButton
          type="submit"
          position="absolute"
          left="80%"
          top="0"
        >
          Save
        </StyledButton>
      </form>
    </>
  );
};

export default NewRecord;
