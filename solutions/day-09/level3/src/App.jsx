import "./App.scss";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  useEffect(async () => {
    let myPromise = new Promise((res) => {
      setTimeout(() => {
        res("Data fetched!");
      }, 3000)
    });
    setData(await myPromise);
  }, []);

  return (
    <div className="app">
      {data == null ? <LoadingSpinner /> : <p className="data-text">{data}</p>}
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="spinner">
      Loading..
      <div className="spinner-sector spinner-sector-red"></div>
      <div className="spinner-sector spinner-sector-blue"></div>
      <div className="spinner-sector spinner-sector-green"></div>
    </div>
  )
}
