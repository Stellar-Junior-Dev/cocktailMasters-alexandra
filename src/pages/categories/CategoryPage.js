import { Controls } from "../../components/controls/Controls";
import { Category } from "../../components/category/Category";
import { WebOptions } from "../../components/weboptions/WebOptions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { selectSelectedCategory } from "../../selectors/selectCocktailData";
import "./categoryPage.css";
import { isMobile } from "../../selectors/selectCocktailData";
export function CategoryPage() {
  const dispatch = useDispatch();
  const category = useSelector(selectSelectedCategory);
  const mobile = isMobile();
  let { categoryId } = useParams();
  useEffect(() => {
    dispatch({
      type: "SET_CATEGORY",
      payload: { id: categoryId },
    });
  }, [categoryId]);

  return (
    !!category && (
      <>
        {mobile && <Controls />}
        
          <div className="title">
            <h2>COCKTAIL MASTER</h2>
          </div>
        
        {!mobile && (
          <WebOptions source={"cat-page"}/>
        )}
        <div className="content">
          <Category
            className="category-page"
            id={category.categoryId}
            categoryTitle={category.categoryTitle}
            cocktails={category.cocktails}
            source={"cat-page"}
          />
        </div>
      </>
    )
  );
}
