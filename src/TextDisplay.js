import React from "react";

class TextDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const stage1 = (
      <div>
        <h1>{this.props.currChar.hanzi}</h1>
        <p>
          Stage 1/4 - Player {this.props.activePlayer} is guessing the pinyin
        </p>
      </div>
    );
    const stage2 = this.state.currStage === 2 && (
      <div>
        <div>
          <h1>{this.state.currChar.hanzi}</h1>
          <h1>{this.state.currChar.pinyin}</h1>
          <p>
            Stage 2/4 - Player {this.state.activePlayer} is adding or removing
            score based on whether they guessed correctly
          </p>
        </div>
      </div>
    );
    const stage3 = this.state.currStage === 3 && (
      <div>
        <h1>{this.state.currChar.hanzi}</h1>
        <h1>{this.state.currChar.pinyin}</h1>
        <p>
          Stage 3/4- Player {this.state.inactivePlayer} is guessing whether
          Player {this.state.activePlayer} knows the meaning
        </p>
      </div>
    );
    const stage4 = this.state.currStage === 4 && (
      <div>
        <div>
          <h1>{this.state.currChar.hanzi}</h1>
          <h1>{this.state.currChar.pinyin}</h1>
          <h4>{this.formatTrans(this.state.currChar.translations)}</h4>
          <p>
            Stage 4/4 - Player {this.state.activePlayer} is adding or removing
            score based on whether they guessed the meaning correctly
          </p>
        </div>
      </div>
    );
    if (this.props.currStage === 1) {
      console.log("on stage 1");
      return stage1;
    }
  }
}

export default TextDisplay;
