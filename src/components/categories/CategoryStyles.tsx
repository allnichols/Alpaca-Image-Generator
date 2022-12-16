type StyleProps = {
  id: string;
  title: string;
  chosenCategory: string;
  styles: string[];
  onSelectStyle: Function;
};

function CategoryStyles({
  id,
  title,
  chosenCategory,
  styles,
  onSelectStyle,
}: StyleProps): React.ReactElement {
  return (
    <div
      id={id}
      style={{
        display: `${chosenCategory === id ? "block" : "none"}`,
      }}
    >
      <h3 className="category__title">{title}</h3>
      <div
        style={{
          display: "flex",
          gap: ".75rem",
          flexWrap: "wrap",
          maxWidth: 500,
        }}
      >
        {styles.map((style) => {
          return (
            <button
              onClick={(e) => onSelectStyle(e)}
              key={style}
              data-type={id}
              id={style}
              className={`btn`}
            >
              {style}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryStyles;
