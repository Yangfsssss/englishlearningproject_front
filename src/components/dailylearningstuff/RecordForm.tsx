import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import Div from "../../styledComponents/Div";
import InputS from "../../styledComponents/Input";
import Button from "../../styledComponents/Button";
// import Textarea from "../../styledComponents/Textarea";

import { createNewRecord } from "../../reducers/recordReducer";
import { getDate } from "../../utils";

// import { Input } from "antd";
// import formStyle from "./RecordForm.css";
// const { TextArea } = Input;

const NewRecord: React.FC = () => {
  // const [memo, setMemo] = useState("");
  // const [url, setUrl] = useState("");
  // const [placeholder, setPlaceholder] = useState({ memo: "memo", url: "url" });

  const dispatch = useDispatch();

  const memoInputEl = useRef(null);
  const urlInputEl = useRef(null);
  const formEl = useRef(null);

  // const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  // const handleMemoChange = (e) => setMemo(e.target.value);
  // const handleUrlChange = (e) => setUrl(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    let date = getDate();
    const newRecord = {
      date,
      item: [
        {
          memo: memoInputEl.current.value,
          url: urlInputEl.current.value
        }
      ]
    };

    // console.log(newRecord);
    // console.log(e.target.reset);
    // setMemo(" ");
    // setUrl(" ");
    // setPlaceholder({ memo: "memo", url: "url" });
    const res = await dispatch(createNewRecord(newRecord));
    console.log("+");
    console.log(res);
    console.log("-");

    if (res.status === 200) {
      alert("Saved!");
      e.target.reset();
      memoInputEl.current.focus();
    } else {
      alert("Save failed,please try again");
    }

    // e.target.focus();
    // forceUpdate();
    // formEl.current.reset();
    // memoInputEl.current.reset();
    // const form = document.getElementsByTagName("form");
    // console.log(form);
    // console.log(formEl.current.reset);

    // console.log(memoInputEl);
    // urlInputEl.current.reset();
    // console.log(urlInputEl);
  };

  return (
    <>
      <form ref={formEl} onSubmit={handleFormSubmit}>
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
          {/* <TextArea
            // className={textarea}
            bordered={false}
            autoSize={{ minRows: 1, maxRows: 6 }}
            placeholder="memo"
            // display="block"
            // width="300px"
            // height="40px"
            // fontSize="30px"
            // padding="0 0 0 0"
            // border="none"
            // borderRadius="5px"
            // focusOutline="none"
          /> */}
          <InputS
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
            // value={memo}
            // onChange={handleMemoChange}
          />
          <hr style={{ width: "95%", margin: "0 auto", textAlign: "center" }} />
          <InputS
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
            // value={url}
            // onChange={handleUrlChange}
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
