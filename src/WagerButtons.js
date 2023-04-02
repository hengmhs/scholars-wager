import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

class WagerButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currStage === 2 || this.props.currStage === 4) {
      return (
        <div>
          <Button
            variant="success"
            onClick={() => {
              this.props.incrementScore();
            }}
          >
            Add {this.props.wager}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              this.props.decrementScore();
            }}
          >
            Minus {this.props.wager}
          </Button>
        </div>
      );
    }
    if (this.props.currStage === 1 || this.props.currStage === 3) {
      return (
        <div>
          <div>Wager: {this.props.wager}</div>
          <ButtonGroup aria-label="wager-buttons">
            <Button
              variant="secondary"
              onClick={() => {
                this.props.incrementWager();
              }}
            >
              +
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                this.props.decrementWager();
              }}
            >
              -
            </Button>
          </ButtonGroup>
        </div>
      );
    }
  }
}

export default WagerButtons;
