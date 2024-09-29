import "./App.css"

export default function GraphBar({ country, num, barWidth }) {
    return (
        <div className="graph-item">
            <p className="name">{country}</p>
                <div className="bar" style={{ width: `${barWidth / 15}%` }}></div>
            <p className="number">{num.toString()}</p>
        </div>
    )
}

