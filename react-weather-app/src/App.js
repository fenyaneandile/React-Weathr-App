import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaulCity="New York"  />
        <footer>
          This project was coded by{" "}
          <a href="https://www.andile.io" target="_blank">
            Andile Fenyane
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/fenyaneandile/React-Weathr-App"
            target="_blank"
          >
            Open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

 
