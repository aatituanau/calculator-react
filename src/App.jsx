import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("");

  const handleNumberClick = (number) => {
    setScreen(screen + number);
  };

  // eslint-disable-next-line no-eval
  const handleTotal = () => {
    try {
      setScreen(eval(screen).toString());
      setScreen((prev) => String(Number(prev).toFixed(7)));
    } catch (error) {
      setScreen("SyntaxError");
    }
  };

  const handleClear = () => {
    setScreen("");
  };

  return (
    <div className="calculator">
      <div className="screen">{screen}</div>
      <button onClick={() => handleClear()}> C </button>
      <button onClick={() => handleNumberClick("/")}> / </button>
      <button onClick={() => handleNumberClick("*")}> x </button>
      <button onClick={() => handleNumberClick("-")}> - </button>
      <br />
      <button onClick={() => handleNumberClick("7")}> 7 </button>
      <button onClick={() => handleNumberClick("8")}> 8 </button>
      <button onClick={() => handleNumberClick("9")}> 9 </button>
      <button onClick={() => handleNumberClick("+")}> + </button>
      <br />
      <button onClick={() => handleNumberClick("4")}> 4 </button>
      <button onClick={() => handleNumberClick("5")}> 5 </button>
      <button onClick={() => handleNumberClick("6")}> 6 </button>
      <button onClick={() => handleTotal()}> = </button>
      <br />
      <button onClick={() => handleNumberClick("1")}> 1 </button>
      <button onClick={() => handleNumberClick("2")}> 2 </button>
      <button onClick={() => handleNumberClick("3")}> 3 </button>
      <button onClick={() => handleNumberClick("0")}> 0 </button>
    </div>
  );
}

export default App;
