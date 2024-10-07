import React from "react";

export default class Footer extends React.Component {
    constructor({ theme }) {
        super();
        this.theme = theme;
    }

    render() {
        return (
            <footer className="footer" style={{ backgroundColor: this.theme.bgc }}>
                <p className="footer-text" style={{ color: this.theme.color }}>Copyright 2024</p>
            </footer>
        )
    }
}
