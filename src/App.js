import "./App.css";
import { Category } from "./components/category/Category";
import { Options } from "./components/options/Options";
import { Search } from "./components/search/Search";
import { Controls } from "./components/controls/Controls";

function App() {
  return (
    <div>
      <Search open={false} />
      <Options open={false} />
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
