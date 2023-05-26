import "./instructions.css";
import { useEffect, useState } from "react";
export function Instructions({ instructions, glass }) {
  const [selectedLanguage, setSelectedLanguage] = useState(undefined);

  useEffect(() => {
    setSelectedLanguage(instructions[0]);
  }, [instructions]);

  return (
    <div className="instructions-container">
      <div className="instructions-title">
        <h1>INSTRUCTIONS</h1>
      </div>
      <div className="instructions-text-container">
        <div className="instructions-language-container">
          {instructions.map(
            (instruction) =>
              instruction && (
                <img
                  key={instruction.text}
                  className="instructions-language"
                  src={require(`../../img/${instruction.icon}.svg`)}
                  alt={instruction.text}
                  onClick={() => setSelectedLanguage(instruction)}
                />
              )
          )}
        </div>
        <p className="instructions-text">
          {!!selectedLanguage && selectedLanguage.text}
        </p>
        <h2 className="instructions-glass-title">GLASS</h2>
        <p className="instructions-text">Serve: {glass}</p>
      </div>
    </div>
  );
}
