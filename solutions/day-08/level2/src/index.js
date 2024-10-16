import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { countriesData } from "./countries.js";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

//TODO: Apply themes to all elements (pretty much).
//TODO: Sort out commas between every 3 digits (in population).
//TODO: Get the change theme button to work.
//TODO: Get the select country button to work.


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      country: countriesData[this.randIndex(countriesData)],
      theme: {
        bgc: "lightcoral",
        color: "black",
        bgc2: "white"
      }
    }
  }

  randIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }

  changeTheme = () => {
    if (this.state.theme.bgc === "lightcoral" &&
      this.state.theme.color === "black" &&
      this.state.theme.bgc2 === "white") {

      this.setState({
        theme: {
          bgc: "black",
          color: "white",
          bgc2: "lightcoral"
        }
      })
    } else {
      this.setState({
        theme: {
          bgc: "lightcoral",
          color: "black",
          bgc2: "white"
        }
      })
    }
  }

  selectCountry = () => {
    this.setState({
      country: countriesData[this.randIndex(countriesData)]
    })
  }

  render() {
    return (
      <div className="app" style={{ backgroundColor: this.state.theme.bgc2 }}>
        <Header theme={this.state.theme} />
        <Main
          theme={this.state.theme}
          country={this.state.country}
          changeTheme={this.changeTheme}
          selectCountry={this.selectCountry}
        />
        <Footer theme={this.state.theme} />
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
