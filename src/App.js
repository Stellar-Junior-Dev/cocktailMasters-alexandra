import "./App.css";
import { DetailsPage } from "./pages/details/Details";
import createStore from "./store";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/homepage/Homepage";
// import { PersistGate } from "redux-persist/integration/react";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cocktail/:id",
    element: <DetailsPage />,
  },
]);

const { store } = createStore();
function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <RouterProvider router={router} />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
