import "./category.css";
import { Card } from "../card/Card";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { categoryAction } from "../../actions/category";
import { selectCategoryDrinks } from "../../selectors/selectCocktailData";
import { isMobile } from "../../selectors/selectCocktailData";
import { POPUP_NAME } from "../../utils/popupNames";
import { popupAction } from "../../actions/popup";
import { CLEAR_SEARCH, searchValueAction } from "../../actions/search";
export function Category({
  categoryTitle,
  className,
  showViewAll = true,
  categoryName,
}) {
  const dispatch = useDispatch();
  const cocktails = useSelector(selectCategoryDrinks);

  useEffect(() => {
    categoryAction(categoryTitle)(dispatch);
  }, []);

  return (
    <>
      {cocktails?.[categoryTitle] && (
        <div
          className={`category ${
            cocktails[categoryTitle].length > 8 === "cat-page" ? "cat-page" : ""
          }`}
        >
          <div className="catDetails">
            <div className="catTitle">
              <h1>
                {categoryName
                  ? categoryName.toUpperCase()
                  : categoryTitle.toUpperCase()}
              </h1>
            </div>
            {cocktails[categoryTitle].length > 8 && showViewAll && (
              <div className="view">
                <Link to={`/category/${categoryTitle}`}>view all {">"}</Link>
              </div>
            )}
          </div>

          <div className={`cardContainer ${className ? className : ""}`}>
            {cocktails[categoryTitle].map((cocktail) => (
              <CardLink cocktail={cocktail} key={cocktail.idDrink}>
                <Card cocktail={cocktail} cocktailList={cocktails} />
              </CardLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export function CardLink({ children, cocktail, onCocktailClick }) {
  const mobile = isMobile();
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  return mobile ? (
    <Link
      key={cocktail.idDrink}
      to={`/cocktail/${cocktail.idDrink}`}
      onClick={onCocktailClick}
    >
      {children}
    </Link>
  ) : (
    <div
      onClick={() => {
        setSearchParams({ idDrink: cocktail.idDrink });
        searchValueAction("")(dispatch);
        dispatch({
          type: CLEAR_SEARCH,
        });
        popupAction(POPUP_NAME.SEARCH, false)(dispatch);
      }}
    >
      {children}
    </div>
  );
}
