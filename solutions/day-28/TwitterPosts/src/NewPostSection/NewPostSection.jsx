/* eslint-disable react/prop-types */
import "./NewPostSection.css";

export default function NewPostSection({ handleSubmit, handleChange, textarea }) {
    return (
        <form onSubmit={handleSubmit} className="new-post">
            <div className="new-tweet">
                <textarea
                    rows="6"
                    cols="70"
                    id="tweet-area"
                    className="text-enter"
                    onChange={handleChange}
                    placeholder="Tweet about your experiences here..."
                    value={textarea}
                ></textarea>
                <label className="label" htmlFor="tweet-area">
                    {textarea.length > 250 ?
                        "Invalid message length" :
                        (250 - textarea.length).toLocaleString()}
                </label>
            </div>
            <button className="btn submit" type="submit">Tweet!</button>
        </form>
    )
}
