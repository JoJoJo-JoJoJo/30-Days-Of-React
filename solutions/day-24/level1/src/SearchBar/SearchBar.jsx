/* eslint-disable react/prop-types */
import "./SearchBar.scss";
// Search bar should search name, capital and languages.

export default function SearchBar({ handleChange, text }) {
    return (
        <input
            className="input search-bar"
            placeholder="Search countries"
            value={text}
            onChange={handleChange("searchtxt", "update")}
        />
    )
}
