

export const TextButton = ({ text, type, onClick }) => {
    <button type={type} className="btn text-btn" onClick={onClick}>{text}</button>
}

export const SVGIconButton = ({ children, onClick }) => {
    <button className="btn icon-btn" onClick={onClick}>
        {children}
    </button>
}
