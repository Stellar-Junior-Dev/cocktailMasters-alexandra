import "./App.css";
import { Category } from "./components/category/Category";
import { Controls } from "./components/controls/Controls";

function App() {
  return (
    <div>
      <Controls />
      <div class="title">
        <h2>COCKTAIL MASTER</h2>
      </div>

      <div class="content">
        <Category categoryTitle="POPULAR DRINKS" />
        <Category categoryTitle="LATEST DRINKS" />
        <Category categoryTitle="RANDOM DRINKS" />
      </div>
    </div>
  );
}

export default App;
