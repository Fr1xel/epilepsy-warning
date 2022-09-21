import "./epilepsy.css";
import { useEffect, useState } from "react";

const EpilepsyButton = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [buttonColor, setButtonColor] = useState("white");
  const [timer, setTimer] = useState(0);
  const [stop, setStop] = useState(false);
  const colorList = [
    "white",
    "black",
    "green",
    "blue",
    "yellow",
    "pink",
    "orange",
    "red",
    "grey",
    "purple",
    "lightblue",
    "brown",
    "lime",
    "wheat",
  ];

  useEffect(() => {
    const randomDiv = Math.floor(Math.random() * colorList.length);
    const randomButton = Math.floor(Math.random() * colorList.length);

    setBackgroundColor(colorList[randomDiv]);
    setButtonColor(colorList[randomButton]);

    console.log(stop);

    if (stop) {
      setTimeout(() => {
        const timerRandom = Math.floor(Math.random() * (577 - 10 + 1)) + 10;
        setTimer(timerRandom);
      }, 10);
    }
  }, [timer]);

  return (
    <div className="wrapper" style={{ backgroundColor: backgroundColor }}>
      <button
        onClick={() => {
          setTimer(1);
          setStop(true);
        }}
        className="warning-button"
        style={{ backgroundColor: buttonColor }}
      >
        Epilepsy Warning
      </button>
      {stop ? <button onClick={() => setStop(false)}>Stop</button> : <></>}
    </div>
  );
};

export default EpilepsyButton;
