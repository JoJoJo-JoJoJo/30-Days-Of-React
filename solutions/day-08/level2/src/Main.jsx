import React from "react";

export default class Main extends React.Component {
    constructor({ theme, changeTheme, country, selectCountry }) {
        super();
        this.theme = theme;
        this.country = country;
        this.changeTheme = changeTheme;
        this.selectCountry = selectCountry;
    }

    render() {
        return (
            <main className="main-body">
                <CountryInfo theme={this.theme} country={this.country} />
                <div className="btns">
                    <Button theme={this.theme} text="Select Country" onClick={this.selectCountry} />
                    <Button theme={this.theme} text="Change Theme" onClick={this.changeTheme} />
                </div>
            </main>
        )
    }
}


class CountryInfo extends React.Component {
    constructor({ theme, country }) {
        super();
        this.theme = theme;
        this.name = country.name;
        this.capital = country.capital;
        this.languages = country.languages;
        this.population = country.population;
        this.currency = country.currency;
    }

    render() {
        return (
            <div className="country-container">
                <p className="country-name" style={{ color: this.theme.color }}>{this.name}</p>
                <div className="country-info" style={{ color: this.theme.color }}>
                    <p className="capital">
                        <strong>Capital: </strong>
                        {this.capital}
                    </p>
                    <p className="lang">
                        <strong>{this.languages.length > 1 ? "Languages" : "Language"}: </strong>
                        {this.languages.join(", ")}
                    </p>
                    <p className="population">
                        <strong>Population: </strong>
                        {this.population.toString()}
                    </p>
                    <p className="currency">
                        <strong>Currency: </strong>
                        {this.currency}
                    </p>
                </div>
            </div>
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super();
        this.theme = props.theme;
        this.text = props.text;
        this.onClick = props.onClick;
    }

    render() {
        return (
            <button
                className="btn"
                onClick={this.onClick}
                style={{
                    backgroundColor: this.theme.bgc2,
                    color: this.theme.color
                }}
            >
                {this.text}
            </button>
        )
    }
}
