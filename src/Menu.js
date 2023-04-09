import React from "react";
import Button from "react-bootstrap/Button";
import Revision from "./Revision";
import Game from "./Game";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMainMenu: true,
      gameIsRunning: false,
      HSKLevel: null,
      revisionWords: [],
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

  startRevision = () => {
    this.setState({
      isMainMenu: false,
      gameIsRunning: false,
      isLevelSelectScreen: false,
      isRevision: true,
    });
  };

  addRevisionWord = (newEntry) => {
    console.log("processing new entry in add Revision Word");
    const identicalWords = this.state.revisionWords.filter((entry) => {
      if (newEntry.id === entry.id) {
        return entry;
      }
    });
    console.log(`identicalWords length is ${identicalWords.length}`);
    if (!identicalWords.length) {
      this.setState({
        revisionWords: [...this.state.revisionWords, newEntry],
      });
    }
  };

  render() {
    let mainMenu = (
      <div>
        <h1>Main Menu</h1>
        <div className="level-select-container">
          <Button onClick={this.startGame}>Start Game</Button>
          <Button onClick={this.startRevision}>Revision</Button>
          <Button>Instructions</Button>
        </div>
      </div>
    );
    return (
      <div>
        {this.state.isMainMenu && mainMenu}
        {this.state.gameIsRunning && (
          <Game
            addRevisionWord={(currChar) => {
              console.log("processing currChar in prop function");
              console.log(currChar);
              this.addRevisionWord(currChar);
            }}
          />
        )}
        {this.state.isRevision && <Revision />}
      </div>
    );
  }
}

export default Menu;
