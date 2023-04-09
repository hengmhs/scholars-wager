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
          <div>150 words - Basic words & phrases</div>
          <Button onClick={this.props.chooseLevel2}>HSK Level 2</Button>
          <div>150 words - Communicate about daily life</div>
          <Button onClick={this.props.chooseLevel3}>HSK Level 3</Button>
          <div>300 words - Communicate about life, work, study and travel</div>
          <Button onClick={this.props.chooseLevel4}>HSK Level 4</Button>
          <div>600 words - Discuss about a wide range of topics</div>
          <Button onClick={this.props.chooseLevel5}>HSK Level 5</Button>
          <div>
            1300 words - Understand content in newspapers, films, books and
            deliver a speech
          </div>
          <Button onClick={this.props.chooseLevel6}>HSK Level 6</Button>
          <div>
            2500 words - Easily understand and express yourself fluently
          </div>
        </div>
      </div>
    );
  }
}

export default HSKSelect;
