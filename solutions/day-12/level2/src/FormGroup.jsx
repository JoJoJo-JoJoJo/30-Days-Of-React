/* eslint-disable react/prop-types */
export default function FormGroup({ handleChange, infoProp, type, errors }) {
    return (
        <div className="form-group">
            <label htmlFor="formInput">{errors ? errors : "Enter here: "}</label>
            <input
                type={type}
                name="formInput"
                placeholder="Enter here"
                defaultValue={infoProp}
                onChange={handleChange(infoProp.name, infoProp)}
            />
        </div>
    )
}
