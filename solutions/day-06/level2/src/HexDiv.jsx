export default function HexDiv({ hexCode }) {
    return (
        <li className="hex-div" style={{ backgroundColor: hexCode }}>
            <p className="text">{hexCode}</p>
        </li>
    )
}