import React from "react";
import Button from "react-bootstrap/Button";
import Revision from "./Revision";
import Game from "./Game";
import HowTo from "./HowTo";
import Birds from "./birds-logo.png";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HSKLevel: null,
      revisionWords: this.getRevisionWords(),
    };
  }

  getRevisionWords = () => {
    if (localStorage.revisionWords) {
      return JSON.parse(localStorage.revisionWords);
    }
  };

  chooseLevel = (num) => {
    this.setState({
      HSKLevel: num,
    });
  };

  addRevisionWord = (newEntry) => {
    if (this.state.revisionWords) {
      const identicalWords = this.state.revisionWords.filter((entry) => {
        if (newEntry.id === entry.id) {
          return entry;
        }
      });
      // if there are no identical words
      if (!identicalWords.length) {
        this.setState(
          {
            revisionWords: [...this.state.revisionWords, newEntry],
          },
          () => {
            localStorage.setItem(
              "revisionWords",
              JSON.stringify(this.state.revisionWords)
            );
          }
        );
      }
    } else {
      console.log(
        "there is nothing in revision words, adding newEntry to revisionWords"
      );
      this.setState(
        {
          revisionWords: [newEntry],
        },
        () => {
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
          <img src={Birds} className="main-menu-portrait" />
          <h1>Scholar's Wager</h1>
          <Button variant="warning" onClick={this.props.startGame}>
            Start Game
          </Button>
          <Button
            variant="btn btn-outline-secondary"
            onClick={this.props.startRevision}
          >
            Revision
          </Button>
          <Button
            variant="btn btn-outline-secondary"
            onClick={this.props.startHowTo}
          >
            How To Play
          </Button>
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
          <Revision
            revisionWords={this.state.revisionWords}
            goToMainMenu={this.props.goToMainMenu}
          />
        )}
        {this.props.isHowTo && <HowTo goToMainMenu={this.props.goToMainMenu} />}
      </div>
    );
  }
}

export default Menu;
