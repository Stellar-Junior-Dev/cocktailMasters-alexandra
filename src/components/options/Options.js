import "./options.css";
import x from "../../img/x.svg";
import copyright from "../../img/copyright.svg";

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
          <h1>HOME</h1>
          <h1>FAVOURITES</h1>
          <h1>POPULAR DRINKS</h1>
          <h1>LATEST DRINKS</h1>
          <h1>RANDOM DRINKS</h1>
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
