import React, { useState, useEffect } from "react";
import "../styles/Pomodoro.css";

const INITIAL_TIME = 15;

function Pomodoro() {
  const [counter, setCounter] = useState(INITIAL_TIME * 60);
  const date = new Date();
  let minutes = "";
  let seconds = "";

  const [timer, setTimer] = useState();

  const convertTime = (counter) => {
    var time = "";

    minutes = (counter / 60).toString();
    minutes > 10
      ? (minutes = minutes.slice(0, 2))
      : (minutes = minutes.slice(0, 1));

    seconds = (counter % 60).toString();
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    time = (minutes, ":", seconds).toString();
    console.log(minutes, seconds, typeof time);
  };

  const start = () => {
    const timer = setInterval(() => {
      setCounter((counter) => counter - 1);
      if (counter === 0) clearInterval(timer);
    }, 1000);
    setTimer(timer);
  };

  useEffect(() => {
    if (counter === 0) clearInterval(timer);
  }, [counter, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  // console.log(pomodoroCounter);
  const dateHour = date.getHours();
  const dateMinutes = date.getMinutes();
  convertTime(counter);
  // console.log("The now hour is: " + date.getHours());
  // console.log(date);

  const AddCounter = () => {
    setCounter(counter + 5 * 60);
  };

  const SubCounter = () => {
    setCounter(counter - 5 * 60);
  };

  return (
    <div className="pomodoro">
      <h1>Pomodoro</h1>
      <div className="counter">
        <p>
          {minutes} : {seconds}
        </p>
        <span>{dateHour + " : " + dateMinutes}</span>
        <div className="buttons">
          <button className="start" onClick={start}>
            Iniciar
          </button>
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
