import "./App.css";
import { Category } from "./components/category/Category";
import { Controls } from "./components/controls/Controls";
import cocktailData from "./data/cocktailData";

function App() {
  return <HomePage />;
}

function DetailsPage() {
  return <></>;
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
