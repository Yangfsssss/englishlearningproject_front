import network from "../services/network";

export const initializeQAUnits = () => {
  return async (dispatch) => {
    const res = await network.getQAUnits();
    res.ready = true;
    dispatch({
      type: "INIT_QAUNITS",
      data: res
    });
  };
};

export const createNewQAUnit = (newQAUnit) => {
  return async (dispatch) => {
    const res = await network.saveQAUnit(newQAUnit);
    dispatch({
      type: "New_QAUNIT",
      data: res.data
    });
    return res;
  };
};

const fakeQAUnits = {
  data: [
    {
      type: "JavaScriptA",
      date: "2020/10/22",
      question: "fakeQuestion1",
      answer: "fakeAnswer1"
    },
    {
      type: "JavaScriptB",
      date: "2020/10/22",
      question: "fakeQuestion2",
      answer: "fakeAnswer2"
    },
    {
      type: "CssA",
      date: "2020/10/22",
      question: "fakeQuestion3",
      answer: "fakeAnswer3"
    },
    {
      type: "CssB",
      date: "2020/10/22",
      question: "fakeQuestion4",
      answer: "fakeAnswer4"
    },
    {
      type: "React",
      date: "2020/10/22",
      question: "fakeQuestion5",
      answer: "fakeAnswer5"
    }
  ]
};

const QAUnitReducer = (state = fakeQAUnits, action) => {
  switch (action.type) {
    case "INIT_QAUNITS":
      return action.data;
    case "NEW_QAUNIT":
      return state.concat(action.data);
    default:
      return state;
  }
};

export default QAUnitReducer;
