import network from "../services/network";

import { SectionItemToSend, Section } from "../types";

interface SectionAction {
  type: string;
  data: Section | Section[];
  status?: number;
}

export const initializeSections = () => {
  return async (dispatch: (value: SectionAction) => void) => {
    try {
      const { data: resData } = await network.getSections();
      dispatch({
        type: "INIT_DATA",
        data: resData,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const createNewSection = (newSection: SectionItemToSend) => {
  return async (dispatch: (value: SectionAction) => void) => {
    try {
      const { data: resData, status: resStatus } = await network.saveSection(newSection);
      dispatch({
        type: "NEW_SECTION",
        data: resData,
        status: resStatus,
      });
      return resStatus;
    } catch (e) {
      console.error(e);
    }
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

const sectionReducer = (state: Section[] = [], action: SectionAction) => {
  switch (action.type) {
    case "INIT_DATA":
      return action.data as Section[];
    case "NEW_SECTION": {
      if (action.status === 201) {
        const { id: returnedSectionId } = action.data as Section;
        const data = state.map((section) => (section.id === returnedSectionId ? action.data : section));
        return data;
      } else if (action.status === 200) {
        const data = state.concat(action.data);
        return data;
      }
      break;
    }
    default:
      return state;
  }
};

export default sectionReducer;
