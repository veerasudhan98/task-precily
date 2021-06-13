import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contentReducer from "../redux/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["content"],
};

const rootReducer = combineReducers({
  content: contentReducer,
  toastr: toastrReducer,
});

export default persistReducer(persistConfig, rootReducer);
