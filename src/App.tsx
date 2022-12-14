import React from "react";
import Category from "./categories/Category";
import Preview from "./components/Preview";
import {
  backgrounds,
  hair,
  eyes,
  ears,
  mouths,
  necks,
  legs,
  accessories,
} from "./categories/categories";
import { exportComponentAsPNG } from "react-component-export-image";
import "./App.css";

function App(): React.ReactElement {
  const imageRef = React.useRef(null);
  const [styles, setStyle] = React.useState({
    backgrounds: "blue50",
    ears: "default",
    neck: "default",
    leg: "default",
    nose: "nose",
    mouth: "default",
    hair: "default",
    accessory: "earings",

    eyes: "default",
  });

  const changeStyle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dataset: any = e.currentTarget.dataset["type"];
    const style: string | undefined = e.currentTarget.id;

    setStyle((prevState) => ({
      ...prevState,
      [dataset]: style,
    }));
  };

  return (
    <div className="container">
      <h1 className="title">Alpaca Generator</h1>
      <div className="app">
        <Preview styles={styles} refProp={imageRef} />
        <div className="categories">
          <Category
            title="Hair"
            choices={hair}
            style={styles.hair}
            onSelect={changeStyle}
          />
          <Category
            title="Backgrounds"
            choices={backgrounds}
            style={styles.backgrounds}
            onSelect={changeStyle}
          />
          <Category
            title="Eyes"
            choices={eyes}
            style={styles.eyes}
            onSelect={changeStyle}
          />
          <Category
            title="Ears"
            choices={ears}
            style={styles.ears}
            onSelect={changeStyle}
          />
          <Category
            title="Neck"
            choices={necks}
            style={styles.neck}
            onSelect={changeStyle}
          />
          <Category
            title="Mouth"
            choices={mouths}
            style={styles.mouth}
            onSelect={changeStyle}
          />
          <Category
            title="Leg"
            choices={legs}
            style={styles.leg}
            onSelect={changeStyle}
          />
          <Category
            title="Accessory"
            choices={accessories}
            style={styles.accessory}
            onSelect={changeStyle}
          />
        </div>
      </div>
      <div>
        <button>Randomize</button>
        <button
          onClick={() =>
            exportComponentAsPNG(imageRef, { fileName: "Your Alpaca" })
          }
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default App;
