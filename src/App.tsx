import React from "react";
import Preview from "./components/Preview";
import Categories from "./components/categories/Categories";
import { categoryData } from "./components/categories/data";
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
    console.log(dataset, style);
    setStyle((prevState) => ({
      ...prevState,
      [dataset]: style,
    }));
  };

  const randomize = () => {
    const randomStyles = {
      backgrounds:
        categoryData.backgrounds[
          Math.floor(Math.random() * categoryData.backgrounds.length)
        ],
      ears: categoryData.ears[
        Math.floor(Math.random() * categoryData.ears.length)
      ],
      eyes: categoryData.eyes[
        Math.floor(Math.random() * categoryData.eyes.length)
      ],
      neck: categoryData.neck[
        Math.floor(Math.random() * categoryData.neck.length)
      ],
      leg: categoryData.leg[
        Math.floor(Math.random() * categoryData.leg.length)
      ],
      mouth:
        categoryData.mouth[
          Math.floor(Math.random() * categoryData.mouth.length)
        ],
      hair: categoryData.hair[
        Math.floor(Math.random() * categoryData.hair.length)
      ],
      accessory:
        categoryData.accessory[
          Math.floor(Math.random() * categoryData.accessory.length)
        ],
    };
    setStyle((prevState) => ({
      ...prevState,
      ...randomStyles,
    }));
  };

  return (
    <div className="container">
      <h1 className="title">Alpaca Generator</h1>
      <div className="app">
        <div>
          <Preview styles={styles} refProp={imageRef} />
          <div className="util__container">
            <button className="btn__util" onClick={() => randomize()}>
              Randomize
            </button>
            <button
              className="btn__util"
              onClick={() =>
                exportComponentAsPNG(imageRef, { fileName: "Your Alpaca" })
              }
            >
              Download
            </button>
          </div>
        </div>
        <Categories onSelect={changeStyle} />
      </div>
    </div>
  );
}

export default App;
