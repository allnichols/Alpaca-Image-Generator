import React from "react";
import { categoryData } from "./data";
import CategoryStyles from "./CategoryStyles";

type CategoryProps = {
  onSelect: Function;
};

export default function Categories({
  onSelect,
}: CategoryProps): React.ReactElement {
  const [category, setCategory] = React.useState<string>("hair");

  const chooseCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCategory: string | undefined = e.currentTarget.id;
    setCategory(selectedCategory);
  };
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="category__selections">
        {Object.keys(categoryData).map((key) => {
          return (
            <button
              key={key}
              id={key}
              onClick={(e) => chooseCategory(e)}
              className={`btn ${category === key ? "btn--selected" : ""}`}
            >
              {key}
            </button>
          );
        })}
      </div>
      <div>
        {Object.entries(categoryData).map(([key, value]) => {
          let title: string | undefined = key;
          return (
            <CategoryStyles
              key={key}
              id={key}
              title={title}
              chosenCategory={category}
              styles={value}
              onSelectStyle={onSelect}
            />
          );
        })}
      </div>
    </div>
  );
}
