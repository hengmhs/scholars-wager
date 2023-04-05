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
        <Button onClick={this.props.chooseLevell}>HSK Level 1</Button>
        <Button onClick={this.props.chooseLevel2}>HSK Level 2</Button>
        <Button onClick={this.props.chooseLevel3}>HSK Level 3</Button>
        <Button onClick={this.props.chooseLevel4}>HSK Level 4</Button>
        <Button onClick={this.props.chooseLevel5}>HSK Level 5</Button>
        <Button onClick={this.props.chooseLevel6}>HSK Level 6</Button>
      </div>
    );
  }
}

export default HSKSelect;
