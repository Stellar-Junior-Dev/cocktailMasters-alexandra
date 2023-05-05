import { Route } from "react-router-dom";
import "./App.css";
import { Category } from "./components/category/Category";
import { Controls } from "./components/controls/Controls";
import cocktailData from "./data/cocktailData";
import {
  createHashRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";

const router = createHashRouter([
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

function DetailsPage() {
  const location = useLocation();
  const name = location.state.name;
  return <p>{name}</p>;
}

function HomePage() {
  return (
    <div>
      <Controls />
      <div class="title">
        <h2>COCKTAIL MASTER</h2>
      </div>

      <div class="content">
        {cocktailData.map((category) => (
          <Category
            categoryTitle={"POPULAR DRINKS"}
            cocktails={category.cocktails}
            key={category.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
