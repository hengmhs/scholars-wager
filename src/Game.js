import "./App.css";
import React from "react";
import Button from "react-bootstrap/Button";
import TextDisplay from "./TextDisplay.js";
import NextStageButtons from "./NextStageButtons";
import WagerButtons from "./WagerButtons";
import HSKSelect from "./HSKSelect";
import HSKLevel1 from "./json/hsk-level-1.json";
import HSKLevel2 from "./json/hsk-level-2.json";
import HSKLevel3 from "./json/hsk-level-3.json";
import HSKLevel4 from "./json/hsk-level-4.json";
import HSKLevel5 from "./json/hsk-level-5.json";
import HSKLevel6 from "./json/hsk-level-6.json";

class Game extends React.Component {
  // TODO: getRandomChar does not choose words that already have been chosen
  // TODO: Restart Game
  // TODO: Menu System - Differing HSK Levels
  // OPTIONAL TODO: Seen words placed in localStorage
  // OPTIONAL TODO: Add fireworks.js https://github.com/crashmax-dev/fireworks-js/

  constructor(props) {
    super(props);
    // assign currChar to an object with null properties because the render() function tries to read it when the component mounts and will crash if it cannot read anything
    this.state = {
      currStage: 1,
      currRound: 1,
      playerOneScore: 0,
      playerTwoScore: 0,
      currChar: {
        id: null,
        hanzi: null,
        pinyin: null,
        translations: null,
      },
      activePlayer: 1,
      inactivePlayer: 2,
      wager: 1,
      gameIsRunning: true,
      displayLevelSelect: true,
      displayGame: false,
      currLevel: 1,
      seenWordsThisGame: [],
      HSKLevels: [
        HSKLevel1,
        HSKLevel2,
        HSKLevel3,
        HSKLevel4,
        HSKLevel5,
        HSKLevel6,
      ],
      // create HSK array HSKLevel[0,1,2,3,4,5]
      // getRandomChar this.state.HSKLevel[currLevel][index]
    };
  }

  getRandomChar = () => {
    let index = Math.floor(
      Math.random() * this.state.HSKLevels[this.state.currLevel - 1].length
    );
    while (this.state.seenWordsThisGame.includes(index)) {
      index = Math.floor(
        Math.random() * this.state.HSKLevels[this.state.currLevel - 1].length
      );
    }
    this.setState({
      seenWordsThisGame: [...this.state.seenWordsThisGame, index],
    });
    return this.state.HSKLevels[this.state.currLevel - 1][index];
  };

  // 1 Round is made up of 4 stages (Wager Pinyin, Increment/Decrement Score, Wager Meaning, Increment/Decrement Score), 1 game is made up of 10 rounds
  nextStage = async () => {
    let currStage = this.state.currStage + 1;
    if (currStage >= 5) {
      currStage = 1;
      this.nextRound();
      if (this.state.activePlayer === 1) {
        this.setState({
          activePlayer: 2,
          inactivePlayer: 1,
        });
      } else {
        this.setState({
          activePlayer: 1,
          inactivePlayer: 2,
        });
      }
    }
    this.setState(() => ({
      currStage: currStage,
    }));
  };

  nextRound = () => {
    const finalRound = this.state.currRound + 1;
    if (finalRound >= 10) {
      this.setState((prevState) => ({
        currRound: prevState.currRound + 1,
        gameIsRunning: false,
      }));
    } else {
      this.setState((prevState) => ({
        currRound: prevState.currRound + 1,
        currChar: this.getRandomChar(),
      }));
    }
  };

  incrementScore = (amt) => {
    if (this.state.activePlayer === 1) {
      this.setState((prevState) => ({
        playerOneScore: prevState.playerOneScore + amt,
      }));
    } else {
      this.setState((prevState) => ({
        playerTwoScore: prevState.playerTwoScore + amt,
      }));
    }
    this.nextStage();
  };

  decrementScore = (amt) => {
    if (this.state.activePlayer === 1) {
      this.setState((prevState) => ({
        playerOneScore: prevState.playerOneScore - amt,
      }));
    } else {
      this.setState((prevState) => ({
        playerTwoScore: prevState.playerTwoScore - amt,
      }));
    }
    this.nextStage();
  };

  incrementWager = () => {
    let wager = this.state.wager + 1;
    // loop back to 1 when you increase your wager above 10
    if (wager > 10) {
      wager = 1;
    }
    this.setState({
      wager: wager,
    });
  };

  decrementWager = () => {
    let wager = this.state.wager - 1;
    // loop back to 10 when you decrease your wager below 1
    if (wager < 1) {
      wager = 10;
    }
    this.setState({
      wager: wager,
    });
  };

  startGame = (level) => {
    this.setState({
      displayGame: true,
      displayLevelSelect: false,
      currLevel: level,
      currChar: this.getRandomChar(),
    });
  };

  resetGame = () => {
    this.setState({
      displayGame: false,
      gameIsRunning: true,
      displayLevelSelect: true,
      playerOneScore: 0,
      playerTwoScore: 0,
      currStage: 1,
      currRound: 1,
      activePlayer: 1,
      inactivePlayer: 2,
      wager: 1,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.gameIsRunning && this.state.displayGame && (
          <div className="game">
            <div>Round {this.state.currRound} / 10</div>
            <div>HSK Level {this.state.currLevel}</div>
            <TextDisplay
              currStage={this.state.currStage}
              currChar={this.state.currChar}
              activePlayer={this.state.activePlayer}
              inactivePlayer={this.state.inactivePlayer}
            />
            <WagerButtons
              currStage={this.state.currStage}
              incrementScore={() => {
                this.incrementScore(this.state.wager);
              }}
              decrementScore={() => {
                this.decrementScore(this.state.wager);
              }}
              wager={this.state.wager}
              incrementWager={() => {
                this.incrementWager();
              }}
              decrementWager={() => {
                this.decrementWager();
              }}
            />
            <br />
            <NextStageButtons
              currStage={this.state.currStage}
              nextStage={() => {
                this.nextStage();
              }}
            />
          </div>
        )}
        {!this.state.gameIsRunning && this.state.displayGame && (
          <div>
            <h1>Game Over</h1>
            <Button onClick={this.resetGame}>New Game</Button>
          </div>
        )}
        {this.state.displayLevelSelect && (
          <HSKSelect
            chooseLevel1={() => {
              this.startGame(1);
            }}
            chooseLevel2={() => {
              this.startGame(2);
            }}
            chooseLevel3={() => {
              this.startGame(3);
            }}
            chooseLevel4={() => {
              this.startGame(4);
            }}
            chooseLevel5={() => {
              this.startGame(5);
            }}
            chooseLevel6={() => {
              this.startGame(6);
            }}
          />
        )}
        <br />
        <br />
        <div>Player 1 Score: {this.state.playerOneScore}</div>
        <div>Player 2 Score: {this.state.playerTwoScore}</div>
      </div>
    );
  }
}

export default Game;
