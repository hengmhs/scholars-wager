import React from "react";

class WagerButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currStage === 2 || this.props.currStage === 4) {
      return (
        <div>
          <button
            onClick={() => {
              this.props.incrementScore();
            }}
          >
            Add {this.props.wager}
          </button>
          <button
            onClick={() => {
              this.props.decrementScore();
            }}
          >
            Minus {this.props.wager}
          </button>
        </div>
      );
    }
    if (this.props.currStage === 1 || this.props.currStage === 3) {
      return (
        <div>
          <div>Wager: {this.props.wager}</div>
          <button
            onClick={() => {
              this.props.incrementWager();
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              this.props.decrementWager();
            }}
          >
            -
          </button>
        </div>
      );
    }
  }
}

export default WagerButtons;
