import React from "react";
import Button from "react-bootstrap/Button";

class HSKSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>HSK Level Select</h1>
        <Button onClick={this.props.chooseLevel}>HSK Level 1</Button>
      </div>
    );
  }
}

export default HSKSelect;
