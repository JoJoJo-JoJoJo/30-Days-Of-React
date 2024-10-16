/* eslint-disable react/prop-types */
import "./Textarea.css";

export const TextareaEdit = ({ id, handleSubmit, handleChange, state, cancelEdit }) => (
    <form className="post-editor" onSubmit={(e) => {
        handleSubmit(e, true, id);
    }}>
        <textarea
            rows="6"
            cols="70"
            className="text-edit"
            onChange={handleChange}
            value={state}
        ></textarea>
        <div className="btn-div">
            <button className="btn save" type="submit">Save</button>
            <button className="btn cancel" onClick={cancelEdit}>Cancel</button>
        </div>
    </form>
);
