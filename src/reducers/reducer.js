import { GET_CATEGORY_ACTION } from "../actions/category";
import { GET_COCKTAIL_BY_ID_ACTION } from "../actions/cocktail";
import {
  GET_ALL_FAVORITES,
  GET_FAVORITES_ACTION,
} from "../actions/favoriteaction";
import { TOGGLE_POPUP } from "../actions/popup";
import { CLEAR_SEARCH, SEARCH_ACTION_TYPE } from "../actions/search";
import { ADD_FAVORITE } from "../constants";
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
  favorites: [],
  value: "",
  favoriteCocktails: [],
  cachedCocktails: {},
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
        cachedCocktails: {
          ...state.cachedCocktails,
          [action.payload.cocktail]: action.payload.cocktail,
        },
      };

    case SEARCH_ACTION_TYPE:
      let cachedCocktails = { ...state.cachedCocktails };
      let results = action.payload.drinks ?? [];
      results.forEach((item) => {
        cachedCocktails[item.idDrink] = item;
      });
      return {
        ...state,
        searchResults: results,
        cachedCocktails: cachedCocktails,
      };

    case CLEAR_SEARCH:
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
      let cachedCocktail = { ...state.cachedCocktails };

      action.payload.drinks.forEach((item) => {
        cachedCocktail[item.idDrink] = item;
      });
      return {
        ...state,
        cocktails: {
          ...state.cocktails,
          [action.payload.title]: action.payload.drinks,
        },
        cachedCocktails: cachedCocktail,
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

    case ADD_FAVORITE:
      let id = action.payload.id;
      if (!state.favorites.find((e) => e === id)) {
        const fav = [...state.favorites, id];
        window.localStorage.setItem("favorites", JSON.stringify(fav));

        return {
          ...state,
          favorites: fav,
        };
      } else {
        const arr = state.favorites;

        const index = arr.indexOf(id);
        arr.splice(index, 1);
        window.localStorage.setItem("favorites", JSON.stringify(arr));
        return {
          ...state,
          favorites: arr,
        };
      }

    case "SEARCH_VALUE":
      return {
        ...state,
        value: action.payload.value ?? "",
      };

    case GET_ALL_FAVORITES:
      return {
        ...state,
        favorites: action.payload.favoriteIDs,
      };
    case GET_FAVORITES_ACTION:
      return {
        ...state,
        // cachedCocktails: action.payload.cachedCocktails,
        favoriteCocktails: action.payload.favoriteCocktails,
      };
    default:
      return state;
  }
}
