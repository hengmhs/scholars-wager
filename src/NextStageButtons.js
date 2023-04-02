import React from "react";
import Button from "react-bootstrap/Button";

class NextStageButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      (this.props.currStage === 1 || this.props.currStage === 3) && (
        <Button onClick={this.props.nextStage}> Next Stage </Button>
      )
    );
  }
}

export default NextStageButtons;
