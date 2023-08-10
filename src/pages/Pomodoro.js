import React, { useState } from "react";
import "../styles/Pomodoro.css";

function Pomodoro() {
  const [counter, setCounter] = useState(15);

  const AddCounter = () => {
    setCounter(counter + 5);
  };

  const SubCounter = () => {
    setCounter(counter - 5);
  };

  return (
    <div className="pomodoro">
      <h1>Pomodoro</h1>
      <div className="counter">
        <p>{counter}</p>
        <div className="buttons">
          <button className="addBtn" onClick={AddCounter}>
            Sumar 5 mins
          </button>
          <button className="subBtn" onClick={SubCounter}>
            Restar 5 mins
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
