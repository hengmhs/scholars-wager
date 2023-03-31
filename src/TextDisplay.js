import React from "react";

class TextDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formatTrans = (trans) => {
    /* this check is needed because the first time the app is run, the input is null */
    if (trans === null) {
      return null;
    }
    return trans.map((text, index) => {
      return <div key={index + text}>{text}</div>;
    });
  };

  render() {
    const stage1 = (
      <div>
        <h1>{this.props.currChar.hanzi}</h1>
        <p>
          Stage 1/4 - Player {this.props.activePlayer} is guessing the pinyin
        </p>
      </div>
    );
    const stage2 = (
      <div>
        <div>
          <h1>{this.props.currChar.hanzi}</h1>
          <h1>{this.props.currChar.pinyin}</h1>
          <p>
            Stage 2/4 - Player {this.props.activePlayer} is adding or removing
            score based on whether they guessed correctly
          </p>
        </div>
      </div>
    );
    const stage3 = (
      <div>
        <h1>{this.props.currChar.hanzi}</h1>
        <h1>{this.props.currChar.pinyin}</h1>
        <p>
          Stage 3/4- Player {this.props.inactivePlayer} is guessing whether
          Player {this.props.activePlayer} knows the meaning
        </p>
      </div>
    );
    const stage4 = (
      <div>
        <div>
          <h1>{this.props.currChar.hanzi}</h1>
          <h1>{this.props.currChar.pinyin}</h1>
          <h4>{this.formatTrans(this.props.currChar.translations)}</h4>
          <p>
            Stage 4/4 - Player {this.props.activePlayer} is adding or removing
            score based on whether they guessed the meaning correctly
          </p>
        </div>
      </div>
    );
    if (this.props.currStage === 1) {
      return stage1;
    } else if (this.props.currStage === 2) {
      return stage2;
    } else if (this.props.currStage === 3) {
      return stage3;
    } else if (this.props.currStage === 4) {
      return stage4;
    }
  }
}

export default TextDisplay;
