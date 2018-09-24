import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Travel</h1>
        </header>
        <Quote
          destination="Tadoussac" 
          country="Canada"
          distance="5.447,12 km"
          image="https://i.postimg.cc/FRM9TJ8S/tadoussac.jpg"
        />
        <Quote
          destination="St Petersburg" 
          country="Russie"
          distance="2.300,09 km"
          image="https://i.postimg.cc/jj80FJw5/St_Petersburg.jpg"
        />
      </div>
    );
  }
}

export default App;
