import React from "react";
import Button from "react-bootstrap/Button";
import HSKSelect from "./HSKSelect";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMainMenu: true,
      isLevelSelectScreen: false,
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

  render() {
    let mainMenu = (
      <div>
        <h1>Main Menu</h1>
        <Button onClick={this.goToLevelSelectScreen}>Start Game</Button>
      </div>
    );
    let levelSelect = (
      <HSKSelect
        chooseLevel={() => {
          this.chooseLevel(1);
        }}
      />
    );
    return (
      <div>
        {this.state.isMainMenu && mainMenu}
        {this.state.isLevelSelectScreen && levelSelect}
      </div>
    );
  }
}

export default Menu;
