import { createStore } from "redux";
import rootReducer from "./reducers/reducer";
// import rootReducer from "./reducers/reducer";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(rootReducer);
  // let persistor = persistStore(store);
  return { store };
};
