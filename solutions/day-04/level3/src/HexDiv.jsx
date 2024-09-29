export default function HexDiv({ color }) {
    return (
        <div className="hex-div" style={{ backgroundColor: color }}>
            <p>{color}</p>
        </div>
    )
}