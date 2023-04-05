import React from "react";
import Button from "react-bootstrap/Button";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Main Menu</h1>
        <Button onClick={this.props.startGame}>Start Game</Button>
      </div>
    );
  }
}

export default Menu;
