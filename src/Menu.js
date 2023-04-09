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
      revisionWords: [
        {
          id: 1,
          hanzi: "爱",
          pinyin: "ài",
          translations: ["to love", "affection", "to be fond of", "to like"],
        },
        {
          id: 2,
          hanzi: "八",
          pinyin: "bā",
          translations: ["eight", "8"],
        },
        {
          id: 3,
          hanzi: "爸爸",
          pinyin: "bà ba",
          translations: ["(informal) father", "CL:個|个", "位[wèi]"],
        },
      ],
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

  goToMainMenu = () => {
    this.setState({
      isMainMenu: true,
      gameIsRunning: false,
      isLevelSelectScreen: false,
      isRevision: false,
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
        {this.state.isRevision && (
          <Revision revisionWords={this.state.revisionWords} />
        )}
        <Button onClick={this.goToMainMenu} className="btn btn-dark">
          Main Menu
        </Button>
      </div>
    );
  }
}

export default Menu;
