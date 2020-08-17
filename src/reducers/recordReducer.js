import network from "../services/network";

// export initializeRecords = ()=>{
//   return dispatch =>{
//     const res = net
//   }
// }

export const createNewRecord = (newRecord) => {
  return async (dispatch) => {
    dispatch({
      type: "NEW_RECORDS",
      data: newRecord
    });
  };
};

const fakeRecords = [
  {
    date: "2020 / 8 / 11",
    items: [
      {
        memo: "fakeRecord1",
        url: "fakeUrl1"
      },
      {
        memo: "fakeRecord1",
        url: "fakeUrl1"
      }
    ],
    id: 1
  },
  {
    date: "2020 / 8 / 11",
    items: [
      {
        memo: "fakeRecord2",
        url: "fakeUrl2"
      },
      {
        memo: "fakeRecord2",
        url: "fakeUrl2"
      }
    ],
    id: 2
  },
  {
    date: "2020 / 8 / 11",
    items: [
      {
        memo: "fakeRecord3",
        url: "fakeUrl3"
      },
      {
        memo: "fakeRecord3",
        url: "fakeUrl3"
      }
    ],
    id: 3
  },
  {
    date: "2020 / 8 / 11",
    items: [
      {
        memo: "fakeRecord4",
        url: "fakeUrl4"
      },
      {
        memo: "fakeRecord4",
        url: "fakeUrl4"
      }
    ],
    id: 4
  },
  {
    date: "2020 / 8 / 11",
    items: [
      {
        memo: "fakeRecord5",
        url: "fakeUrl5"
      },
      {
        memo: "fakeRecord5",
        url: "fakeUrl5"
      }
    ],
    id: 5
  },
  {
    date: "2020 / 8 / 11",
    items: [
      {
        memo: "fakeRecord1",
        url: "fakeUrl1"
      },
      {
        memo: "fakeRecord1",
        url: "fakeUrl1"
      }
    ],
    id: 1
  },
  {
    date: "2020 / 8 / 11",
    items: [
      {
        memo: "fakeRecord2",
        url: "fakeUrl2"
      },
      {
        memo: "fakeRecord2",
        url: "fakeUrl2"
      }
    ],
    id: 2
  },
  {
    date: "2020 / 8 / 11",
    items: [
      {
        memo: "fakeRecord3",
        url: "fakeUrl3"
      },
      {
        memo: "fakeRecord3",
        url: "fakeUrl3"
      }
    ],
    id: 3
  },
  {
    date: "2020 / 8 / 11",
    items: [
      {
        memo: "fakeRecord4",
        url: "fakeUrl4"
      },
      {
        memo: "fakeRecord4",
        url: "fakeUrl4"
      }
    ],
    id: 4
  },
  {
    date: "2020 / 8 / 11",
    items: [
      {
        memo: "fakeRecord5",
        url: "fakeUrl5"
      },
      {
        memo: "fakeRecord5",
        url: "fakeUrl5"
      }
    ],
    id: 5
  }
];

const recordReducer = (state = fakeRecords, action) => {
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
