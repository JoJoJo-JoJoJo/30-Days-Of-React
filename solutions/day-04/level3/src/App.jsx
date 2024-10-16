import HexDiv from './HexDiv.jsx';
import './App.css';

export default function App() {
  const hexColor = () => {
    let str = "0123456789abcdef"
    let color = ""
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return "#" + color
  }

  return (
    <div className="hex-div-container">
      <HexDiv color={hexColor()} />
      <HexDiv color={hexColor()} />
      <HexDiv color={hexColor()} />
      <HexDiv color={hexColor()} />
      <HexDiv color={hexColor()} />
    </div>
  );
}
