import "./options.css";
import x from "../../img/x.svg";
import copyright from "../../img/copyright.svg";
import { Link } from "react-router-dom";

export function Options({ open, toggleOpen }) {
  return (
    <div className={`options-background ${!open ? "hide-options" : ""}`}>
      <div className="overlay">
        <div
          className="close"
          onClick={() => {
            toggleOpen(false);
          }}
        >
          <img src={x} alt="Close icon" />
        </div>
        <div className="opt">
          <Link to={"/"}>HOME</Link>
          <Link>FAVOURITES</Link>
          <Link>POPULAR DRINKS</Link>
          <Link>LATEST DRINKS</Link>
          <Link>RANDOM DRINKS</Link>
        </div>

        <div className="copyright">
          <div className="copyright-image">
            <img src={copyright} alt="Copyright details" />
          </div>
        </div>
      </div>
    </div>
  );
}
