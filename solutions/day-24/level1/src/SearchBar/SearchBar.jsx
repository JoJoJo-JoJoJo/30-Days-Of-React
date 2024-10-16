/* eslint-disable react/prop-types */
import "./SearchBar.scss";

export default function SearchBar({ text, handleChange }) {
    return (
        <input
            id="search-input"
            type="search"
            className="input search-bar"
            placeholder="Search countries/capitals..."
            value={text}
            onChange={handleChange}
        />
    )
}
