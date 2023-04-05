import "./App.css";
import React from "react";
import TextDisplay from "./TextDisplay.js";
import NextStageButtons from "./NextStageButtons";
import WagerButtons from "./WagerButtons";
import Game from "./Game";
import Menu from "./Menu";

class App extends React.Component {
  // TODO: getRandomChar does not choose words that already have been chosen
  // TODO: Restart Game
  // TODO: Menu System - Differing HSK Levels
  // OPTIONAL TODO: Seen words placed in localStorage
  // OPTIONAL TODO: Add fireworks.js https://github.com/crashmax-dev/fireworks-js/

  constructor(props) {
    super(props);
    // assign currChar to an object with null properties because the render() function tries to read it when the component mounts and will crash if it cannot read anything
    this.state = {
      isGameDisplayed: false,
      isMenuDisplayed: true,
    };
  }

  startGame = () => {
    this.setState({
      isGameDisplayed: true,
      isMenuDisplayed: false,
    });
  };

  render() {
    let mainDisplay;
    if (this.state.isMenuDisplayed) {
      mainDisplay = <Menu startGame={this.startGame} />;
    } else {
      mainDisplay = <Game />;
    }
    return mainDisplay;
  }
}

export default App;
