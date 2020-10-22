import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="Clock">
          <div className="Hour"></div>
          <span className="Minute"></span>
        </div>
      </>
    );
  }
}

export default App;
