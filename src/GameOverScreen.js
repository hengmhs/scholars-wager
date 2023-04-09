import React from "react";

class GameOverScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.playerOneScore > this.props.playerTwoScore) {
      return (
        <div>
          <img
            src={this.props.playerOnePhoto}
            className="large-portrait victory"
          ></img>
          <div>
            <h1>Player 1 Wins</h1>
            <p>Score: {this.props.playerOneScore}</p>
            <p>Player 2 Score: {this.props.playerTwoScore}</p>
          </div>
        </div>
      );
    } else if (this.props.playerOneScore < this.props.playerTwoScore) {
      return (
        <div>
          <img
            src={this.props.playerTwoPhoto}
            className="large-portrait victory"
          ></img>
          <h1>Player 2 Wins</h1>
          <p>Score: {this.props.playerTwoScore}</p>
          <p>Player 1 Score: {this.props.playerOneScore}</p>
        </div>
      );
    } else {
      return <div>Draw</div>;
    }
  }
}

export default GameOverScreen;
