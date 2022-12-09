import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Alpaca Generator</h1>
      <div>
        <div className="image_container">
          <img
            className="background"
            src="./alpaca/backgrounds/blue50.png"
            alt="background"
          />
          <img
            className="neck"
            src="./alpaca/neck/default.png"
            alt="background"
          />
          <img className="hair" src="./alpaca/hair/default.png" alt="hair" />
          <img className="eyes" src="./alpaca/eyes/default.png" alt="eyes" />
          <img className="nose" src="./alpaca/nose.png" alt="nose" />
          <img className="mouth" src="./alpaca/mouth/default.png" alt="mouth" />
          <img className="ears" src="./alpaca/ears/default.png" alt="ears" />
          <img className="leg" src="./alpaca/leg/default.png" alt="leg" />
        </div>
      </div>
    </div>
  );
}

export default App;
