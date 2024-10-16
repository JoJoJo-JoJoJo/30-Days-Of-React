import React from "react";

export default class Header extends React.Component {
    constructor({ theme }) {
        super();
        this.theme = theme;
    }

    render() {
        return (
            <header className="header" style={{ backgroundColor: this.theme.bgc }}>
                <h1 className="title" style={{ color: this.theme.color }}>30 Days of React</h1>
                <h2 className="sub-title" style={{ color: this.theme.color }}>Random Country Selector</h2>
                <p className="header-text" style={{ color: this.theme.color }}>Struggling to decide where to go on holiday?
                    Don't want to visit Seoul? Shame on you.
                    But at least let our random country selector pick for you!</p>
            </header>
        )
    }
}
