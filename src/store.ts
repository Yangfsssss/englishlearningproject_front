import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import QAUnitReducer from "./reducers/QAUnitReducer";
import sectionReducer from "./reducers/sectionReducer";
import recordReducer from "./reducers/recordReducer";

console.log(thunk);

const reducer = combineReducers({
  users: userReducer,
  QAUnits: QAUnitReducer,
  sections: sectionReducer,
  records: recordReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
