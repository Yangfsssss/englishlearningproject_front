import network from "../services/network";

export const initializeSections = () => {
  return async (dispatch) => {
    const res = await network.getSections();
    dispatch({
      type: "INIT_DATA",
      data: res
    });
  };
};

export const addAWord = (id, newSection) => {
  return async (dispatch) => {
    const res = await network.saveWord(id, newSection);
    dispatch({
      type: "ADD_A_WORD",
      data: res
    });
  };
};

export const saveSection = (newSection) => {
  return async (dispatch) => {
    const res = await network.saveSection(newSection);
    dispatch({
      type: "ADD_A_SECTION",
      data: res
    });
  };
};

// const fakeSections = [
//   {
//     title: "fakeTitle1",
//     url: "fakeUrl1",
//     wordUnits: [
//       {
//         word: "fakeWord1",
//         translation: "fakeWord1"
//       },
//       { word: "fakeWord11", translation: "fakeWord11" }
//     ],
//     id: 1
//   },
//   {
//     title: "fakeTitle2",
//     url: "fakeUrl2",
//     wordUnits: [
//       {
//         word: "fakeWord2",
//         translation: "fakeWord2"
//       },
//       { word: "fakeWord22", translation: "fakeWord22" }
//     ],
//     id: 2
//   }
// ];

const sectionReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_DATA":
      return action.data;
    case "ADD_A_WORD":
      return state.map((section) =>
        section.id === action.data.id ? action.data : section
      );
    case "SAVE_SECTION":
      return state.concat(action.data);
    default:
      return state;
  }
};

export default sectionReducer;
