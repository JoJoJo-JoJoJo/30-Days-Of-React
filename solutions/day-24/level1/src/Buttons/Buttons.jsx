/* eslint-disable react/prop-types */
import "./Buttons.scss";

export const IconButton = ({ img, onClick }) => (
    <button className="btn icon-btn" onClick={onClick}>
        <img src={img} alt="Nav-Icon" />
    </button>
)

export const TextButton = ({ text, onClick }) => (
    <button className="btn text-btn" onClick={onClick}>{text.toUpperCase()}</button>
)
