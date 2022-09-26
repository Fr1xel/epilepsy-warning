import "./epilepsy.css";
import { useEffect, useState } from "react";

const EpilepsyButton = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [buttonColor, setButtonColor] = useState("white");
  const [timer, setTimer] = useState(0);
  const [stop, setStop] = useState(false);
  const handleEpilepsyClick = () => {
    if (!stop) {
      setStop(true);
      setTimer(1);
    } else {
      setStop(false);
      setTimer(0);
    }
  };
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

    if (stop) {
      setTimeout(() => {
        setTimer(timer + 1);
      }, 10);
    }
  }, [timer]);

  return (
    
    <div className="wrapper" style={{ backgroundColor: backgroundColor }}>
      <button
        onClick={() => {
          handleEpilepsyClick();
        }}
        className={
          buttonColor == "black"
            ? "warning-button text-white"
            : "warning-button"
        }
        style={{ backgroundColor: buttonColor }}
      >
        Epilepsy Warning
      </button>
    </div>
  );
};

export default EpilepsyButton;
