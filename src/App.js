import "./App.css";
import React from "react";
import TextDisplay from "./TextDisplay.js";
import NextStageButtons from "./NextStageButtons";
import WagerButtons from "./WagerButtons";
import Game from "./Game";
import Menu from "./Menu";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMainMenu: true,
      gameIsRunning: false,
      isLevelSelectScreen: false,
      isRevision: false,
      HSKLevel: null,
      isHowTo: false,
    };
  }

  goToMainMenu = () => {
    this.setState({
      isMainMenu: true,
      gameIsRunning: false,
      isLevelSelectScreen: false,
      isRevision: false,
      isHowTo: false,
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
      isHowTo: false,
    });
  };

  startHowTo = () => {
    this.setState({
      isMainMenu: false,
      gameIsRunning: false,
      isLevelSelectScreen: false,
      isRevision: false,
      isHowTo: true,
    });
  };

  render() {
    return (
      <div className="app">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Scholar's Wager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={this.goToMainMenu}>Menu</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="main-container">
          <div className="main-display">
            <Menu
              isMainMenu={this.state.isMainMenu}
              gameIsRunning={this.state.gameIsRunning}
              isRevision={this.state.isRevision}
              isHowTo={this.state.isHowTo}
              startGame={this.startGame}
              startRevision={this.startRevision}
              startHowTo={this.startHowTo}
              goToMainMenu={this.goToMainMenu}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
