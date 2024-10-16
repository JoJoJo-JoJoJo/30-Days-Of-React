import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [date, setDate] = useState({
    month: 0,
    hour: 0
  });

  useEffect(() => {
    setTimeout(() => {
      setDate({
        month: new Date().getMonth(),
        hour: new Date().getHours()
      })
    }, 5000)
  })

  return (
    <div className="app">
      <Season month={date.month} />
      <Time hour={date.hour} />
    </div>
  );
}

function Season({ month }) {
  const springColor = "lightgreen";
  const summerColor = "yellow";
  const autumnColor = "orange";
  const winterColor = "lightblue";

  let background;

  if (month >= 2 && month <= 4) {
    background = <div className="season-color" style={{ backgroundColor: springColor }}>
      <p className="text">Season</p>
    </div>
  } else if (month >= 5 && month <= 7) {
    background = <div className="season-color" style={{ backgroundColor: summerColor }}>
      <p className="text">Season</p>
    </div>
  } else if (month >= 8 && month <= 10) {
    background = <div className="season-color" style={{ backgroundColor: autumnColor }}>
      <p className="text">Season</p>
    </div>
  } else {
    background = <div className="season-color" style={{ backgroundColor: winterColor }}>
      <p className="text">Season</p>
    </div>
  }

  return (
    <>
      {background}
    </>
  )
}

function Time({ hour }) {
  const morningColor = "lightgreen";
  const afternoonColor = "yellow";
  const eveningColor = "orange";
  const nightColor = "lightblue";

  let background;

  if (hour >= 0 && hour <= 5) {
    background = <div className="time-color" style={{ backgroundColor: nightColor }}>
      <p className="text">Time</p>
    </div>
  } else if (hour >= 6 && hour <= 11) {
    background = <div className="time-color" style={{ backgroundColor: morningColor }}>
      <p className="text">Time</p>
    </div>
  } else if (hour >= 12 && hour <= 17) {
    background = <div className="time-color" style={{ backgroundColor: afternoonColor }}>
      <p className="text">Time</p>
    </div>
  } else {
    background = <div className="time-color" style={{ backgroundColor: eveningColor }}>
      <p className="text">Time</p>
    </div>
  }

  return (
    <>
      {background}
    </>
  )
}
