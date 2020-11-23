import network from "../services/network";

import { QAUnit } from "../types";

interface QAUnitAction {
  type: string;
  data: QAUnit[] | QAUnit;
}

export const initializeQAUnits = () => {
  return async (dispatch: (value: QAUnitAction) => void) => {
    const { data: res } = await network.getQAUnits();
    dispatch({
      type: "INIT_QAUNITS",
      data: res
    });
  };
};

export const createNewQAUnit = (newQAUnit: QAUnit) => {
  return async (dispatch: (value: QAUnitAction) => void) => {
    const { data: res } = await network.saveQAUnit(newQAUnit);
    dispatch({
      type: "New_QAUNIT",
      data: res
    });
    return res;
  };
};

// const fakeQAUnits = {
//   data: [
//     {
//       type: "JavaScriptA",
//       date: "2020/10/22",
//       question: "fakeQuestion1",
//       answer: "fakeAnswer1"
//     },
//     {
//       type: "JavaScriptB",
//       date: "2020/10/22",
//       question: "fakeQuestion2",
//       answer: "fakeAnswer2"
//     },
//     {
//       type: "CssA",
//       date: "2020/10/22",
//       question: "fakeQuestion3",
//       answer: "fakeAnswer3"
//     },
//     {
//       type: "CssB",
//       date: "2020/10/22",
//       question: "fakeQuestion4",
//       answer: "fakeAnswer4"
//     },
//     {
//       type: "React",
//       date: "2020/10/22",
//       question: "fakeQuestion5",
//       answer: "fakeAnswer5"
//     }
//   ]
// };

const QAUnitReducer = (
  state: QAUnit[] = [],
  action: QAUnitAction
): QAUnit[] => {
  switch (action.type) {
    case "INIT_QAUNITS":
      return action.data as QAUnit[];
    case "NEW_QAUNIT": {
      const data = state.concat(action.data);
      return data;
    }
    default:
      return state;
  }
};

export default QAUnitReducer;
