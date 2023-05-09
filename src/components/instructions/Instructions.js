import "./instructions.css";
import en from "../../img/en.svg";
import es from "../../img/es.svg";
import { useState } from "react";
export function Instructions({ instructions }) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  return (
    <div class="instructions-container">
      <div class="instructions-title">
        <h1>INSTRUCTIONS</h1>
      </div>
      <div class="instructions-text-container">
        <div class="instructions-language-container">
          {instructions.map((instruction) => (
            <img
              key={instruction.language}
              className="instructions-language"
              src={require(`../../img/${instruction.language}.svg`)}
              alt={instruction.language}
              onClick={() => setSelectedLanguage(instruction.language)}
            />
          ))}
        </div>
        <p class="instructions-text">
          {
            instructions.find(
              (instruction) => instruction.language === selectedLanguage
            ).text
          }
        </p>
        <h2 class="instructions-glass-title">GLASS</h2>
        <p class="instructions-text">Serve: Old-fashioned glass</p>
      </div>
    </div>
  );
}
