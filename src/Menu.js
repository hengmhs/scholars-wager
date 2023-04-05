import React from "react";
import Button from "react-bootstrap/Button";
import HSKSelect from "./HSKSelect";
import Game from "./Game";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMainMenu: true,
      gameIsRunning: false,
      HSKLevel: null,
    };
  }

  goToLevelSelectScreen = () => {
    this.setState({
      isMainMenu: false,
      isLevelSelectScreen: true,
    });
  };

  chooseLevel = (num) => {
    this.setState({
      HSKLevel: num,
    });
  };

  startGame = () => {
    this.setState({
      isMainMenu: false,
      gameIsRunning: true,
    });
  };

  render() {
    let mainMenu = (
      <div>
        <h1>Main Menu</h1>
        <Button onClick={this.startGame}>Start Game</Button>
      </div>
    );
    return (
      <div>
        {this.state.isMainMenu && mainMenu}
        {this.state.gameIsRunning && <Game />}
      </div>
    );
  }
}

export default Menu;
