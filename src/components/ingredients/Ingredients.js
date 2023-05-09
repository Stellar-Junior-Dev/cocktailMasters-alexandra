import "./ingredients.css";
export function Ingredient({ ingredients }) {
  return (
    <div className="ingredients-container">
      <div className="ingredients-title">
        <h1>INGREDIENTS</h1>
      </div>
      <div class="ingredients-card-container">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredients-card">
            <img className="ingredients-image" src={ingredient.image} />
            <p className="ingredients-text">{ingredient.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
