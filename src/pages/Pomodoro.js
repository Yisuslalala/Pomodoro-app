import React, { useState } from "react";
import "../styles/Pomodoro.css";

function Pomodoro() {
  const [counter, setCounter] = useState(15);
  const date = new Date();
  console.log("The actual time is: " + date);

  const hour = date.getHours();
  const minutes = date.getMinutes();

  date.setHours(10);
  console.log("The now hour is: " + date.getHours());
  console.log(date);

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
        <span>{hour + " : " + minutes}</span>
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
