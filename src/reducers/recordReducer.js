import network from "../services/network";

export const initializeRecords = () => {
  return async (dispatch) => {
    const res = await network.getRecords();
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
      type: "NEW_RECORD",
      data: res.data
    });
    return res;
  };
};

export const deleteRecordItem = (recordId, itemId) => {
  return async (dispatch) => {
    const res = await network.deleteItem(itemId);
    dispatch({
      type: "DELETE",
      data: {
        recordId,
        itemId
      }
    });
    return res;
  };
};

const recordReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_RECORDS":
      return action.data;
    case "NEW_RECORD": {
      if (action.data.wasUpdated) {
        return state.map((record) =>
          record.id === action.data.id ? action.data : record
        );
      } else {
        return state.concat(action.data);
      }
    }
    case "DELETE": {
      const updatedRecord = state.find(
        (record) => record.id === action.data.recordId
      );

      updatedRecord.items = updatedRecord.items.filter(
        (item) => item._id !== action.data.itemId
      );

      return state.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      );
    }
    default:
      return state;
  }
};

export default recordReducer;
