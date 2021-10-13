import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// root
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
// import createSagaMiddleware from "redux-saga";

// disalbe thunk and add redux-saga middleware
// const sagaMiddleware = createSagaMiddleware();
// // const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const sagaMiddleware = createSagaMiddleware();
// const middleware = [
//   ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
//   sagaMiddleware,
// ];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
