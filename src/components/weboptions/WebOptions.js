import "./weboptions.css";
import search from "../../img/search.svg";
import { selectCocktailData } from "../../selectors/selectCocktailData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export function WebOptions() {
  const dispatch = useDispatch();
  const cocktailData = useSelector(selectCocktailData);
  return (
    <div className="weboptions">
      <div className="categories">
        <Link to="/">HOME</Link>
        {cocktailData.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            onClick={() => {
              dispatch({
                type: "SET_CATEGORY",
                payload: { id: category.id },
              });
            }}
          >
            {category.categoryTitle}
          </Link>
        ))}
      </div>
      <div className="websearch">
        <img src={search} alt="search" />
      </div>
    </div>
  );
}
