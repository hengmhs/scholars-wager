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
        <div className="level-select-container">
          <Button onClick={this.props.chooseLevel1}>HSK Level 1</Button>
          <Button onClick={this.props.chooseLevel2}>HSK Level 2</Button>
          <Button onClick={this.props.chooseLevel3}>HSK Level 3</Button>
          <Button onClick={this.props.chooseLevel4}>HSK Level 4</Button>
          <Button onClick={this.props.chooseLevel5}>HSK Level 5</Button>
          <Button onClick={this.props.chooseLevel6}>HSK Level 6</Button>
        </div>
      </div>
    );
  }
}

export default HSKSelect;
