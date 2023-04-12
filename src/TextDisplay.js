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
        <h1 className="chinese-character-display">
          {this.props.currChar.hanzi}
        </h1>
        <div>
          <p>Stage 1/4</p>
          <p>
            1. Player {this.props.activePlayer} will write down or say aloud
            what they think is the pronunciation of the word.
          </p>
          <p>
            2. Player {this.props.activePlayer} will wager points from 1 - 10
            based on their confidence of getting the pronunciation right.
          </p>
        </div>
      </div>
    );
    const stage2 = (
      <div>
        <div>
          <h1 className="chinese-character-display">
            {this.props.currChar.hanzi}
          </h1>
          <h1>{this.props.currChar.pinyin}</h1>
          <div>
            <p>Stage 2/4</p>
            <p>
              Player {this.props.activePlayer} will add points if they got the
              pinyin (pronunciation) right and deduct points if they got it
              wrong.
            </p>
          </div>
        </div>
      </div>
    );
    const stage3 = (
      <div>
        <h1 className="chinese-character-display">
          {this.props.currChar.hanzi}
        </h1>
        <h1>{this.props.currChar.pinyin}</h1>
        <div>
          <p>Stage 3/4</p>
          <p>
            1. Player {this.props.inactivePlayer} will wager points from 1 - 10
            based on their confidence of Player {this.props.activePlayer}{" "}
            getting the meaning right.
          </p>{" "}
          <p>
            2. Player {this.props.activePlayer} will write down or say aloud
            what they think is the meaning of the word.
          </p>
        </div>
      </div>
    );
    const stage4 = (
      <div>
        <div>
          <h1 className="chinese-character-display">
            {this.props.currChar.hanzi}
          </h1>
          <h1>{this.props.currChar.pinyin}</h1>
          <h4 className="translation-display">
            {this.formatTrans(this.props.currChar.translations)}
          </h4>
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
