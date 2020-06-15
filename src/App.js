import React, { Component, useState } from "react";
import "./App.css";
import WeekContainer from "./components/WeekContainer";

var moment = require("moment");

const svg = "";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeekContainer />
      </div>
    );
  }
}

export default App;