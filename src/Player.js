import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const selected = (
      <div>
        <img src={this.props.playerPhoto} className="portrait selected" />
        <p className="score">
          Player {this.props.playerPosition} Score: {this.props.playerScore}
        </p>
      </div>
    );
    const deselected = (
      <div>
        <img src={this.props.playerPhoto} className="portrait deselected" />
        <p className="score">
          Player {this.props.playerPosition} Score: {this.props.playerScore}
        </p>
      </div>
    );
    if (
      this.props.currStage === 1 ||
      this.props.currStage === 2 ||
      this.props.currStage === 4
    ) {
      if (this.props.activePlayer === this.props.playerPosition) {
        return selected;
      } else {
        return deselected;
      }
    } else if (this.props.currStage === 3) {
      if (this.props.activePlayer === this.props.playerPosition) {
        return deselected;
      } else {
        return selected;
      }
    }
  }
}

export default Player;
