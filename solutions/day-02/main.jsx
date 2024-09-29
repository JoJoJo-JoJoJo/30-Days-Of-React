const myName = <h1>JoJo</h1>

const myInfo = (
    <div style={mainStyles}>
        <h1>JoJo</h1>
        <p>I</p>
        <p>am</p>
        <p>very</p>
        <p>{currentText}.</p>
    </div>
)

const footer = <footer style={footerStyles}>
    This is the footer (not *a* footer, *the* footer).
</footer>

const mainStyles = { border: "2px solid orange", color: "blue", backgroundColor: "black" };
const footerStyles = { fontSize: "10px", color: "pink" };
const appStyles = { boxSizing: "border-box", fontSize: "16px", textAlign: "center" };

const currentText = "COOL";
