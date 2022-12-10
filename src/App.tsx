import React from "react";
import Category from "./categories/Category";
import { hair } from "./categories/categories";
import "./App.css";

function App(): React.ReactElement {
  const [styles, setStyle] = React.useState({
    hair: "default",
  });

  const changeStyle = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const dataset: any = e.currentTarget.dataset["type"];
      const style: string | undefined = e.currentTarget.id;
      console.log(style);

      setStyle((prevState) => ({
        ...prevState,
        [dataset]: style,
      }));
    },
    []
  );

  return (
    <div className="container">
      <h1 className="title">Alpaca Generator</h1>
      <div className="app">
        <div className="image_container">
          <img
            className="background"
            src="./alpaca/backgrounds/blue50.png"
            alt="background"
          />
          <img className="ears" src="./alpaca/ears/default.png" alt="ears" />
          <img className="neck" src="./alpaca/neck/default.png" alt="neck" />
          <img
            className="hair"
            src={`./alpaca/hair/${styles.hair}.png`}
            alt="hair"
          />
          <img className="nose" src="./alpaca/nose.png" alt="nose" />
          <img className="mouth" src="./alpaca/mouth/default.png" alt="mouth" />
          <img className="leg" src="./alpaca/leg/default.png" alt="leg" />
          <img className="eyes" src="./alpaca/eyes/default.png" alt="eyes" />
        </div>
        <div className="categories">
          <Category
            title="Hair"
            choices={hair}
            style={styles.hair}
            onSelect={changeStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
