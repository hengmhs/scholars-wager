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
        <Container fluid>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8} className="main-display">
              <Menu
                isMainMenu={this.state.isMainMenu}
                gameIsRunning={this.state.gameIsRunning}
                isRevision={this.state.isRevision}
                startGame={this.startGame}
                startRevision={this.startRevision}
              />
              <Col lg={2}></Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
