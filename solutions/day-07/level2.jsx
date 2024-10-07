import React from 'react';
import ReactDOM from 'react-dom/client';

const numbers = [];
const colors = [];

const hexColor = () => {
    let str = "0123456789abcdef"
    let color = ""
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return "#" + color
}

for (let i = 0; i < 30; i++) {
    numbers.push(`${i + 1}`);
    colors.push(hexColor());
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App numArr={numbers} hexArr={colors} />
    </React.StrictMode>
);


class App extends React.Component({ numArr, hexArr }) {
    render() {
        return (
            <>
                <div className="num-app">
                    <h1 className="title">30 Days Of React</h1>
                    <p className="sub-title">Number Generator & Hexadecimal Colors</p>
                    <ul className="grid">
                        {numArr.map((num) => <NumDiv key={num} numStr={num} numInt={parseInt(num)} />)}
                    </ul>
                </div>
                <div className="hex-app">
                    <ul className="grid">
                        {hexArr.map((color) => <HexDiv key={color} hexCode={color} />)}
                    </ul>
                </div>
            </>
        );
    }
}

class NumDiv extends React.Component({ numStr, numInt }) {
    liColor = (num) => {
        if (isPrime(num)) return "lightcoral"
        if (num % 2 === 0) return "lightgreen"
        return "yellow"
    }

    render() {
        return (
            <li className="num-div" style={{ backgroundColor: liColor(numInt) }}>
                <p className="text">{numStr}</p>
            </li>
        );
    }
}

function isPrime(n) {
    //* Handle the edge cases.
    if (n <= 1) return false
    if (n === 2 || n === 3) return true
    if (n % 2 === 0 || n % 3 === 0) return false
    //* Iterate up to the square root of n.
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false
    }
    //* If all guard statements are passed, it must be a prime number!
    return true
}

const HexDiv = ({ hexCode }) => (
    <li className="hex-div" style={{ backgroundColor: hexCode }}>
        <p className="text">{hexCode}</p>
    </li>
);
