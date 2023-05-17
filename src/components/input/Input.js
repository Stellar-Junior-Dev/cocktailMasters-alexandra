import React from "react";
import "./input.css";

export default function Input({
  onChange,
  value,
  className = "",
  type = "text",
  icon = "",
  placeholder = "",
}) {
  return (
    <div className="form-div">
      <form className="search-form">
        <input
          type={type}
          value={value}
          className={`search-input ${className}`}
          placeholder={placeholder}
          onChange={onChange}
        />
        {icon && (
          <div className="submit-btn" type="submit">
            <img src={icon} alt="Search icon" />
          </div>
        )}
      </form>
    </div>
  );
}
