import React from "react";

const TextDiv = ({ text, style }) => {
    return (
        <div className="text-div" style={style}>
            {text}
        </div>
    )
}

const StyledTextDiv = (ComponentParam, text = "Default text") => {
    const textStyles = {
        margin: 0,
        padding: "10px",
        border: "1px solid wheat",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "20px"
    }

    return (props) => {
        return (
            <>
                <TextDiv text={text} />
                <ComponentParam {...props} style={textStyles} text={text} />
            </>
        )
    }
}

const container = document.getElementById("root");
container.render(<StyledTextDiv />);
