import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("black");
  const changeColor = (c) => {
    setColor(c);
  };
  return (
    <div className="screen-area" style={{ backgroundColor: color }}>
      <div className="btn-group">
        <div className="btn-bar">
          <button
            className="btn"
            style={{ backgroundColor: "Red" }}
            onClick={() => changeColor("Red")}
          >
            Red
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "Green" }}
            onClick={() => changeColor("Green")}
          >
            Green
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "Blue" }}
            onClick={() => changeColor("Blue")}
          >
            Blue
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "Gray" }}
            onClick={() => changeColor("Gray")}
          >
            Gray
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "Yellow" }}
            onClick={() => changeColor("Yellow")}
          >
            Yellow
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "Pink" }}
            onClick={() => changeColor("Pink")}
          >
            Pink
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "Purple" }}
            onClick={() => changeColor("Purple")}
          >
            Purple
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "Lavender" }}
            onClick={() => changeColor("Lavender")}
          >
            Lavender
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "White", color: "black" }}
            onClick={() => changeColor("White")}
          >
            White
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "Black" }}
            onClick={() => changeColor("Black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
