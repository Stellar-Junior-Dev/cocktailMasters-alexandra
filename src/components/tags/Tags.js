import "./tags.css";

export default function Tags({ tags }) {
  return (
    <div className="cocktail-tags">
      {tags.map((tag) => (
        <div key={tag} className="tag">
          <p className="tag-text">{tag}</p>
        </div>
      ))}
    </div>
  );
}
