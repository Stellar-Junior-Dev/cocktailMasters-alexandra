import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../../actions/favourites";
import {
  selectFavoriteCocktails,
  selectFavorites,
  selectOpenPopup,
} from "../../selectors/selectCocktailData";
import { useEffect, useState } from "react";
import {
  GET_ALL_FAVORITES,
  getAllFavorites,
  getFavoritesById,
} from "../../actions/favoriteaction";
import { SET_FAVORITES } from "../../constants";

export function FavoriteWrapper() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllFavorites()(dispatch);
  }, []);

  return <></>;
}
