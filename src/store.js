import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import QAUnitReducer from "./reducers/QAUnitReducer";
import sectionReducer from "./reducers/sectionReducer";
import recordReducer from "./reducers/recordReducer";

const reducer = combineReducers({
  QAUnits: QAUnitReducer,
  sections: sectionReducer,
  records: recordReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
