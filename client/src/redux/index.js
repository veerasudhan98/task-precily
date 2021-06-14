import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
//middlewares
import thunk from "redux-thunk";

import rootReducer from "./store";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

// export default { store, persistor };
