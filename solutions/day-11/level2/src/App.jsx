import "./App.css";

export default function App() {
  const randPercent = () => `${Math.floor(Math.random() * 85)}%`

  return (
    <div className="app">
      <div
        className="special-box"
        onMouseEnter={(e) => {
          e.target.style.setProperty("--top", randPercent());
          e.target.style.setProperty("--left", randPercent());
        }}
      >
        <p className="text">30 Days Of React</p>
      </div>
    </div>
  )
}
