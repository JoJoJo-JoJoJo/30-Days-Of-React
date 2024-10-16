/* eslint-disable react/prop-types */
export const TextareaEdit = ({ id, handleSubmit, handleChange, state, cancelEdit }) => (
    <form className="post-editor" onSubmit={handleSubmit(true, id)}>
        <textarea
            rows="6"
            cols="70"
            className="text-edit"
            onChange={handleChange}
            value={state}
        ></textarea>
        <button className="btn submit" type="submit">Save</button>
        <button className="btn cancel" onClick={cancelEdit}>Cancel</button>
    </form>
);
