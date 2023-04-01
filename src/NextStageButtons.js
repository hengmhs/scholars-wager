import React from "react";

class NextStageButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      (this.props.currStage === 1 || this.props.currStage === 3) && (
        <button onClick={this.props.nextStage}> Next Stage </button>
      )
    );
  }
}

export default NextStageButtons;
