import "../category/category.css";
import { Card } from "../card/Card";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { categoryAction } from "../../actions/category";
import {
  selectCachedCocktails,
  selectFavoriteCocktails,
  selectFavorites,
} from "../../selectors/selectCocktailData";
import { isMobile } from "../../selectors/selectCocktailData";
import { FAVORITES_PAGE_ROUTE } from "../../constants";
import { getCocktailByID } from "../../actions/cocktail";
import { CardLink } from "../category/Category";
import { getFavoritesById } from "../../actions/favoriteaction";
export function Favorites({ className, showViewAll = true }) {
  const dispatch = useDispatch();
  const favoriteIDs = useSelector(selectFavorites);
  const favorites = useSelector(selectFavoriteCocktails);
  const cachedCocktails = useSelector(selectCachedCocktails);

  useEffect(() => {
    getFavoritesById(favoriteIDs, cachedCocktails)(dispatch);
  }, [favoriteIDs, cachedCocktails]);

  return (
    <>
      <div className="category">
        <div className="catDetails">
          <div className="catTitle">
            <h1>FAVORITES</h1>
          </div>
          {showViewAll && (
            <div className="view">
              <Link to={FAVORITES_PAGE_ROUTE}>view all {">"}</Link>
            </div>
          )}
        </div>

        <div className={`cardContainer ${className ? className : ""}`}>
          {favorites.map((cocktail) => (
            <CardLink cocktail={cocktail} key={cocktail.idDrink}>
              <Card cocktail={cocktail} cocktailList={favorites} />
            </CardLink>
          ))}
        </div>
      </div>
    </>
  );
}
