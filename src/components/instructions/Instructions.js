import "./instructions.css";
import steag from "../../img/steag.png";
export function Instructions(instructions) {
  return (
    <div class="instructions-container">
      <div class="instructions-title">
        <h1>INSTRUCTIONS</h1>
      </div>
      <div class="instructions-text-container">
        <div class="instructions-language-container">
          <img class="instructions-language" src={steag}></img>
          <img class="instructions-language" src={steag}></img>
          <img class="instructions-language" src={steag}></img>
        </div>
        <p class="instructions-text">
          Place sugar cube in old fashioned glass and saturate with bitters, add
          a dash of plain water.Muddle until dissolved.Fill the glass with ice
          cubes and add whiskey.Garnish with orange twist, and a cocktail
          cherry.
        </p>
        <h2 class="instructions-glass-title">GLASS</h2>
        <p class="instructions-text">Serve: Old-fashioned glass</p>
      </div>
    </div>
  );
}
