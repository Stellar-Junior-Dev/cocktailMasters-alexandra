import { GET_CATEGORY_ACTION } from "../actions/category";
import { GET_COCKTAIL_BY_ID_ACTION } from "../actions/cocktail";
import { TOGGLE_POPUP } from "../actions/popup";
import { SEARCH_ACTION_TYPE } from "../actions/search";
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
  cocktails: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COCKTAIL_BY_ID_ACTION:
      let cocktail = action.payload.cocktail;
      cocktail.instructions = getInstructions(cocktail);
      cocktail.ingredients = getIngredients(cocktail);
      const prevId =
        Number(cocktail.idDrink) > 11000
          ? Number(cocktail.idDrink) - 1
          : undefined;
      const nextId = Number(cocktail.idDrink) + 1;
      return {
        ...state,
        selectedCocktail: action.payload.cocktail,
        prevId: prevId,
        nextId: nextId,
      };
    case SEARCH_ACTION_TYPE:
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
      let category = state.cocktailData.find((it) => it.id === categoryId);
      return {
        ...state,
        selectedCategory: category,
      };

    case GET_CATEGORY_ACTION:
      return {
        ...state,
        cocktails: {
          ...state.cocktails,
          [action.payload.title]: action.payload.drinks,
        },
      };

    case TOGGLE_POPUP:
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
