// eslint-disable-next-line
import styles from "./App.css";

export default function Subscribe() {
    return (
        <div className="sub-container">
            <h1 className="title">SUBSCRIBE</h1>
            <p className="sub-heading">Sign up with your email address to receive news and updates.</p>
            <div className="inputs-container">
                <input className="sub-input input" placeholder="Enter first name" />
                <input className="sub-input input" placeholder="Enter email" />
                <input className="sub-input input" placeholder="Enter address" />
            </div>
            <button className="sub-btn btn">Subscribe</button>
        </div>
    )
}
