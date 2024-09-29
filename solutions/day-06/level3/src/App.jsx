import "./App.css";
import { tenHighestPopulation } from "./data";
import GraphBar from "./GraphBar.jsx";

export default function App() {
  const arr = [];
  tenHighestPopulation.map((country) => arr.push(country.population));
  const fullBar = (arr.reduce((a, b) => a + b, 0) / (2 * arr.length));

  const percentWidth = (graphData) => {
    return (graphData / fullBar) * 100
  }

  return (
    <div className="app">
      <h1 className="title">30 Days Of React</h1>
      <h2 className="sub-title">World population</h2>
      <p className="desc">Ten most populated countries</p>
      <div className="graph-container">
        {tenHighestPopulation.map((item) =>
          <GraphBar
            key={item.country}
            country={item.country}
            barWidth={percentWidth(item.population)}
            num={item.population} />
        )}
      </div>
    </div>
  );
}
