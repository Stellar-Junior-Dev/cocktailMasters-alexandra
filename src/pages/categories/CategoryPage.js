import { Controls } from "../../components/controls/Controls";
import { Category } from "../../components/category/Category";
import { Card } from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { selectSelectedCategory } from "../../selectors/selectCocktailData";
import "./categoryPage.css";

export function CategoryPage() {
  const dispatch = useDispatch();
  const category = useSelector(selectSelectedCategory);
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
        <Controls />
        <div className="title">
          <h2>COCKTAIL MASTER</h2>
        </div>
        <div className="content">
          <Category
            className="category-page"
            id={category.categoryId}
            categoryTitle={category.categoryTitle}
            cocktails={category.cocktails}
          />
        </div>
      </>
    )
  );
}
