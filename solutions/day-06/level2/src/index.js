import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

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
