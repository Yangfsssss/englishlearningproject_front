import network from "../services/network";

export const initializeQAUnits = () => {
  return async (dispatch) => {
    const res = await network.getQAUnits();
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

const QAUnitReducer = (state = [], action) => {
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
