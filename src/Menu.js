import React from "react";
import Button from "react-bootstrap/Button";
import Revision from "./Revision";
import Game from "./Game";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HSKLevel: null,
      revisionWords: JSON.parse(localStorage.revisionWords),
    };
  }

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
      this.setState(
        {
          revisionWords: [...this.state.revisionWords, newEntry],
        },
        () => {
          console.log(JSON.stringify(this.state.revisionWords));
          localStorage.setItem(
            "revisionWords",
            JSON.stringify(this.state.revisionWords)
          );
        }
      );
    }
  };

  render() {
    let mainMenu = (
      <div>
        <div className="level-select-container">
          <Button onClick={this.startGame}>Start Game</Button>
          <Button onClick={this.startRevision}>Revision</Button>
          <Button>Instructions</Button>
        </div>
      </div>
    );
    return (
      <div>
        {this.props.isMainMenu && mainMenu}
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
      </div>
    );
  }
}

export default Menu;
