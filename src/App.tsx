import React from "react";
import Category from "./categories/Category";
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
    hair: "default",
    background: "blue50",
    eyes: "default",
    ears: "default",
    neck: "default",
    leg: "default",
    mouth: "default",
    accessory: "earings",
  });

  const changeStyle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dataset: any = e.currentTarget.dataset["type"];
    const style: string | undefined = e.currentTarget.id;
    console.log(style, dataset);

    setStyle((prevState) => ({
      ...prevState,
      [dataset]: style,
    }));
  };
  console.log(styles);

  return (
    <div className="container">
      <h1 className="title">Alpaca Generator</h1>
      <div className="app">
        <div className="image_container" ref={imageRef}>
          <img
            className="background"
            src={`./alpaca/backgrounds/${styles.background}.png`}
            alt="background"
          />
          <img
            className="ears"
            src={`./alpaca/ears/${styles.ears}.png`}
            alt="ears"
          />
          <img
            className="neck"
            src={`./alpaca/neck/${styles.neck}.png`}
            alt="neck"
          />
          <img
            className="hair"
            src={`./alpaca/hair/${styles.hair}.png`}
            alt="hair"
          />
          <img className="nose" src="./alpaca/nose.png" alt="nose" />
          <img
            className="mouth"
            src={`./alpaca/mouth/${styles.mouth}.png`}
            alt="mouth"
          />
          <img
            className="leg"
            src={`./alpaca/leg/${styles.leg}.png`}
            alt="leg"
          />
          <img
            className="eyes"
            src={`./alpaca/eyes/${styles.eyes}.png`}
            alt="eyes"
          />
          <img
            className="accessory"
            src={`./alpaca/accessories/${styles.accessory}.png`}
            alt="accessory"
          />
        </div>
        <div className="categories">
          <Category
            title="Hair"
            choices={hair}
            style={styles.hair}
            onSelect={changeStyle}
          />
          <Category
            title="Background"
            choices={backgrounds}
            style={styles.background}
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
