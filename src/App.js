import "./App.css";
import { HomePage } from "./components/homepage/Homepage";
import { DetailsPage } from "./components/details/Details";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cocktail/:cocktailName",
    element: <DetailsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
