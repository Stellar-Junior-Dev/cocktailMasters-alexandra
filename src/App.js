import "./App.css";
import { DetailsPage } from "./pages/details/Details";
import { CategoryPage } from "./pages/categories/CategoryPage";
import createStore from "./store";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/homepage/Homepage";
import { PopupWrapper } from "./components/popupWrapper/popupWrapper";

const { store } = createStore();
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <PopupWrapper />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cocktail/:id" element={<DetailsPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
