import "./App.css";
import React from "react";
import TextDisplay from "./TextDisplay.js";
import NextStageButtons from "./NextStageButtons";
import WagerButtons from "./WagerButtons";
import Game from "./Game";
import Menu from "./Menu";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  // TODO: getRandomChar does not choose words that already have been chosen
  // TODO: Restart Game
  // TODO: Menu System - Differing HSK Levels
  // OPTIONAL TODO: Seen words placed in localStorage
  // OPTIONAL TODO: Add fireworks.js https://github.com/crashmax-dev/fireworks-js/

  constructor(props) {
    super(props);
    this.state = {
      isMainMenu: true,
      gameIsRunning: false,
      isLevelSelectScreen: false,
      isRevision: false,
      HSKLevel: null,
    };
  }

  goToMainMenu = () => {
    this.setState({
      isMainMenu: true,
      gameIsRunning: false,
      isLevelSelectScreen: false,
      isRevision: false,
    });
  };

  startGame = () => {
    this.setState({
      isMainMenu: false,
      gameIsRunning: true,
    });
  };

  startRevision = () => {
    this.setState({
      isMainMenu: false,
      gameIsRunning: false,
      isLevelSelectScreen: false,
      isRevision: true,
    });
  };

  render() {
    return (
      <div className="app">
        {" "}
        <div className="header">
          <div>Scholar's Wager</div>
          <Button onClick={this.goToMainMenu} className="btn btn-dark">
            Main Menu
          </Button>
        </div>
        <div className="main-display">
          <Menu
            isMainMenu={this.state.isMainMenu}
            gameIsRunning={this.state.gameIsRunning}
            isRevision={this.state.isRevision}
            startGame={this.startGame}
            startRevision={this.startRevision}
          />
        </div>
      </div>
    );
  }
}

export default App;
