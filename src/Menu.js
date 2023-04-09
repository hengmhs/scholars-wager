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
        <div className="menu-select-container">
          <h1>Scholar's Wager</h1>
          <Button variant="warning" onClick={this.props.startGame}>
            Start Game
          </Button>
          <Button variant="secondary" onClick={this.props.startRevision}>
            Revision
          </Button>
          <Button variant="secondary">Instructions</Button>
        </div>
      </div>
    );
    return (
      <div>
        {this.props.isMainMenu && mainMenu}
        {this.props.gameIsRunning && (
          <Game
            addRevisionWord={(currChar) => {
              this.addRevisionWord(currChar);
            }}
          />
        )}
        {this.props.isRevision && (
          <Revision revisionWords={this.state.revisionWords} />
        )}
      </div>
    );
  }
}

export default Menu;
