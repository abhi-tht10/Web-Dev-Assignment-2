import { useState } from "react";

function App() {
  const [color, setColor] = useState(0);

  let colors = ["red", "orange", "yellow", "green", "blue"];

  let reset = color >= colors.length - 1;

  function handleChangeClick() {
    if (reset) {
      setColor(0);
      console.log(color);
    } else {
      setColor(color + 1);
      console.log(color);
    }
  }
  document.body.style.backgroundColor = colors[color];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleChangeClick}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          borderRadius: "10px",
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;
