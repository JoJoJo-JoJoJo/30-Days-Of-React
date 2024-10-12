/* eslint-disable react/prop-types */
import "./TitleBox.scss";

export default function TitleBox({ total, hasContent, content }) {
    return (
        <div className="title-div">
            <h1 className="title">World Countries Data</h1>
            <h3 className="total-c">We currently have {total} countries</h3>
            {hasContent && <h3 className="curr-c">{content}</h3>}
        </div>
    )
}
