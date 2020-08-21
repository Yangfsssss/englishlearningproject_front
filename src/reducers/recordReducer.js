import network from "../services/network";

export const initializeRecords = () => {
  return async (dispatch) => {
    const res = await network.getRecords();
    console.log(res);

    dispatch({
      type: "INIT_RECORDS",
      data: res
    });
  };
};

export const createNewRecord = (newRecord) => {
  return async (dispatch) => {
    const res = await network.saveRecord(newRecord);
    dispatch({
      type: "NEW_RECORDS",
      data: res
    });
  };
};

// const fakeRecords = [
//   {
//     date: "2020 / 8 / 11",

//     memo: "fakeRecord1",
//     url: "fakeUrl1",
//     id: 1
//   },
//   {
//     date: "2020 / 8 / 11",
//     memo: "fakeRecord2",
//     url: "fakeUrl2",
//     id: 2
//   },
//   {
//     date: "2020 / 8 / 11",
//     memo: "fakeRecord3",
//     url: "fakeUrl3",
//     id: 3
//   },
//   {
//     date: "2020 / 8 / 11",
//     memo: "fakeRecord4",
//     url: "fakeUrl4",
//     id: 4
//   },
//   {
//     date: "2020 / 8 / 11",
//     memo: "fakeRecord5",
//     url: "fakeUrl5",
//     id: 5
//   },
//   {
//     date: "2020 / 8 / 11",

//     memo: "fakeRecord6",
//     url: "fakeUrl6",
//     id: 6
//   },
//   {
//     date: "2020 / 8 / 11",
//     memo: "fakeRecord7",
//     url: "fakeUrl7",
//     id: 7
//   },
//   {
//     date: "2020 / 8 / 11",
//     memo: "fakeRecord8",
//     url: "fakeUrl8",
//     id: 8
//   },
//   {
//     date: "2020 / 8 / 11",
//     memo: "fakeRecord9",
//     url: "fakeUrl9",
//     id: 9
//   },
//   {
//     date: "2020 / 8 / 11",
//     memo: "fakeRecord10",
//     url: "fakeUrl10",
//     id: 10
//   }
// ];

const recordReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_RECORDS":
      return action.data;
    case "NEW_RECORDS":
      return state.concat(action.data);
    default:
      return state;
  }
};

export default recordReducer;
