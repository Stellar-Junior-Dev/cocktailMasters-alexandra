import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./details.css";
import heart from "../../img/heart.svg";
import back from "../../img/back.png";
import { Ingredient } from "../ingredients/Ingredients";
import { Instructions } from "../instructions/Instructions";
import { useEffect, useState } from "react";

export function DetailsPage() {
  const location = useLocation();
  const cocktail = location.state.cocktail;
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  useEffect(() => {
    console.log("aici", headerHeight);
  }, [headerHeight]);

  return (
    <div className="detailspage">
      <div
        class="cocktail-image-details"
        onClick={() => {
          setIsScrolled(false);
        }}
      >
        <div className="navigation-top-buttons">
          <div className="buttonElement">
            <img
              src={back}
              onClick={() => {
                navigate(-1);
              }}
            />
          </div>
          <div className="buttonElement">
            <img src={heart} />
          </div>
        </div>
        <img
          src={cocktail.image}
          alt="cocktail-image"
          onLoad={(e) =>
            setHeaderHeight(e.target.getBoundingClientRect().height)
          }
        />
      </div>

      <div
        className="cocktail-container"
        style={{
          height: `${
            headerHeight > window.innerHeight
              ? window.innerHeight / 2
              : isScrolled
              ? window.innerHeight - 84
              : window.innerHeight - headerHeight + 40
          }px`,
          top: `${
            headerHeight > window.innerHeight
              ? window.innerHeight / 2
              : isScrolled
              ? 84
              : headerHeight - 40
          }px`,
        }}
        onScroll={(e) => {
          // setScrollTop(scrollTop - e.target.scrollTop);
          // pentru fun
          if (e.target.scrollTop != 0) {
            setIsScrolled(e.target.scrollTop > 10);
          }
        }}
      >
        <div className="cocktail-title">
          <p className="cocktail-title-text">{cocktail.name}</p>
        </div>
        <div className="cocktail-tags">
          {cocktail.tags.map((tag) => (
            <div key={tag} className="tag">
              <p className="tag-text">{tag}</p>
            </div>
          ))}
        </div>
        <Ingredient ingredients={cocktail.ingredients} />
        <Instructions instructions={cocktail.instructions} />
        <div className="details-options-container">
          <div className="navigation-btn">
            <a>{"<"} previous </a>
          </div>
          <div className="navigation-btn">
            <a>next {">"} </a>
          </div>
        </div>
      </div>
    </div>
  );
}
