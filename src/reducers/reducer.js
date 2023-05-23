import { createStore } from "redux";
import { getInstructions } from "../utils/helpers";
import { getIngredients } from "../utils/helpers";

const initialState = {
  cocktailData: [],
  selectedCocktail: undefined,
  prevId: undefined,
  nextId: undefined,
  searchResults: [],
  selectedCategory: undefined,
  popupOpen: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COCKTAIL":
      let cocktail = action.payload.cocktail;
      cocktail.instructions = getInstructions(cocktail);
      cocktail.ingredients = getIngredients(cocktail);
      return {
        ...state,
        selectedCocktail: action.payload.cocktail,
        // prevId: prevId,
        // nextId: nextId,
      };
    case "SEARCH":
      return {
        ...state,
        searchResults: action.payload.drinks ?? [],
      };

    case "CLEAR_SEARCH":
      return {
        ...state,
        searchResults: [],
      };

    case "SET_CATEGORY":
      let categoryId = action.payload.id;
      let category = state.cocktailData.find((it) => it.id == categoryId);
      return {
        ...state,
        selectedCategory: category,
      };

    case "TOGGLE_POPUP":
      let value = action.payload.value;
      const popupName = action.payload.name;
      if (value) {
        return {
          ...state,
          popupOpen: popupName,
        };
      }
      return {
        ...state,
        popupOpen: "",
      };

    default:
      return state;
  }
}
