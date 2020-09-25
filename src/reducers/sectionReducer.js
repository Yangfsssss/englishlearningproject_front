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

// export const addAWord = (id, newSection) => {
//   return async (dispatch) => {
//     const res = await network.saveWord(id, newSection);
//     dispatch({
//       type: "ADD_A_WORD",
//       data: res
//     });
//   };
// };

export const saveSection = (newSection) => {
  return async (dispatch) => {
    const res = await network.saveSection(newSection);
    dispatch({
      type: "ADD_A_SECTION",
      data: res.data
    });
    return res;
  };
};

// const fakeSections = [
//   {
//     date: "2020/9/19",
//     items: [
//       {
//         title: "fakeTitle1",
//         url: "fakeUrl1",
//         wordUnits: [
//           {
//             word: "fakeWord1",
//             translation: "fakeWord1"
//           },
//           { word: "fakeWord11", translation: "fakeWord11" }
//         ]
//       },
//       {
//         title: "fakeTitle11",
//         url: "fakeUrl11",
//         wordUnits: [
//           {
//             word: "fakeWord11",
//             translation: "fakeWord11"
//           },
//           { word: "fakeWord111", translation: "fakeWord111" }
//         ]
//       }
//     ],
//     id: 1
//   },
//   {
//     date: "2020/9/20",
//     items: [
//       {
//         title: "fakeTitle2",
//         url: "fakeUrl2",
//         wordUnits: [
//           {
//             word: "fakeWord2",
//             translation: "fakeWord2"
//           },
//           { word: "fakeWord22", translation: "fakeWord22" }
//         ]
//       }
//     ],
//     id: 2
//   },
//   {
//     date: "2020/9/21",
//     items: [
//       {
//         title: "fakeTitle3",
//         url: "fakeUrl3",
//         wordUnits: [
//           {
//             word: "fakeWord3",
//             translation: "fakeWord3"
//           },
//           { word: "fakeWord33", translation: "fakeWord33" }
//         ]
//       }
//     ],
//     id: 3
//   }
// ];

const sectionReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_DATA":
      return action.data;
    // case "ADD_A_WORD":
    //   return state.map((section) =>
    //     section.id === action.data.id ? action.data : section
    //   );
    case "ADD_A_SECTION": {
      console.log(action.data);
      return state.concat(action.data);
    }
    default:
      return state;
  }
};

export default sectionReducer;
