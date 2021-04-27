import network from "../services/network";

import { Record, RecordItemToSend } from "../types";

interface DeletionInfo {
  recordId: string;
  itemId: string;
}

interface RecordAction {
  type: string;
  data: Record[] | Record | DeletionInfo;
  status?: number;
}

export const initializeRecords = () => {
  return async (dispatch: (value: RecordAction) => void) => {
    try {
      const { data: resData } = await network.getRecords();
      dispatch({
        type: "INIT_RECORDS",
        data: resData,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const createNewRecord = (newRecord: RecordItemToSend) => {
  return async (dispatch: (value: RecordAction) => void) => {
    try {
      const { data: resData, status: resStatus } = await network.saveRecord(newRecord);
      dispatch({
        type: "NEW_RECORD",
        data: resData,
        status: resStatus,
      });
      return resStatus;
    } catch (e) {
      console.error(e);
    }
  };
};

export const deleteRecordItem = (recordId: string, itemId: string) => {
  return async (dispatch: (value: RecordAction) => void) => {
    try {
      const { status: deletionStatus } = await network.deleteItem(itemId);
      dispatch({
        type: "DELETE",
        data: {
          recordId,
          itemId,
        },
      });
      return deletionStatus;
    } catch (e) {
      console.error(e);
    }
  };
};

const recordReducer = (state: Record[] = [], action: RecordAction): Record[] => {
  switch (action.type) {
    case "INIT_RECORDS":
      return action.data as Record[];
    case "NEW_RECORD": {
      if (action.status === 201) {
        const { id: newRecordId } = action.data as Record;
        const data = state.map((record) => (record.id === newRecordId ? (action.data as Record) : record));
        return data;
      } else if (action.status === 200) {
        const data = state.concat(action.data as Record);
        return data;
      }
      return state;
    }
    case "DELETE": {
      const { recordId: deletedRecordId, itemId: deletedItemId } = action.data as DeletionInfo;
      const updatedRecord = state.find((record) => record.id === deletedRecordId);

      let data: Record[] = [];

      if (updatedRecord && updatedRecord.items.length === 1) {
        data = state.filter((record) => record.id !== updatedRecord.id);
      } else if (updatedRecord) {
        updatedRecord.items = updatedRecord.items.filter((item) => item._id !== deletedItemId);

        data = state.map((record) => (record.id === updatedRecord.id ? updatedRecord : record));
      }
      return data;
    }
    default:
      return state;
  }
};

export default recordReducer;
