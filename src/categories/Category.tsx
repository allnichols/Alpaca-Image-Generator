import React from "react";

type CategoryProps = {
  choices: string[];
  style: string;
  title: string;
  onSelect: Function;
};

export default function Category({
  choices,
  style,
  onSelect,
  title,
}: CategoryProps): React.ReactElement {
  return (
    <div className="category">
      <h3>{title}</h3>
      <div className="category__choices">
        {choices.map((item) => {
          return (
            <button
              key={item}
              data-type={title.toLowerCase()}
              className={`btn ${item === style ? "btn--selected" : ""}`}
              id={item}
              onClick={(e) => onSelect(e)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
