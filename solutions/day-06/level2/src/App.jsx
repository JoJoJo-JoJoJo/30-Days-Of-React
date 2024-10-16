import "./App.css";
import NumDiv from "./NumDiv.jsx";
import HexDiv from "./HexDiv.jsx";

export default function App({ numArr, hexArr }) {
  return (
    <>
      <div className="num-app">
        <h1 className="title">30 Days Of React</h1>
        <p className="sub-title">Number Generator & Hexadecimal Colors</p>
        <ul className="grid">
          {numArr.map((num) => <NumDiv key={num} numStr={num} numInt={parseInt(num)} />)}
        </ul>
      </div>
      <div className="hex-app">
        <ul className="grid">
          {hexArr.map((color) => <HexDiv key={color} hexCode={color} />)}
        </ul>
      </div>
    </>
  );
}
