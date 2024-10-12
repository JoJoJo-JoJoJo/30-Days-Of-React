/* eslint-disable react/prop-types */
import "./Buttons.scss";

export const IconButton = ({ img, onClick }) => (
    <button onClick={onClick}>{img}</button>
)

export const TextButton = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
)
