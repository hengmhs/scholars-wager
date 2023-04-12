import React from "react";
import Button from "react-bootstrap/Button";

class HowTo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>How To Play</h1>
        <div className="how-to-container">
          <div>
            {" "}
            <h3 className="how-to-title">About</h3>
            <p className="how-to-text">
              A 2-player game that makes learning Chinese vocabulary more fun
              for English-speaking players by implementing competitive wagering
              elements.
            </p>
          </div>
          <div>
            <h3 className="how-to-title">Objective</h3>
            <p>
              Played over 10 rounds, the winner is the player who has the most
              points at the end of the game.
            </p>
          </div>
          <div>
            <h3 className="how-to-title">Rounds</h3>
            <div className="how-to-text">
              A round is made up of 4 stages:
              <p>
                <b>Stage 1:</b> The active player will wager points and guess
                the han yu pin yin (pronunciation) of the word. The active
                player will write down or say aloud what they think is the
                pronunciation of the word.
              </p>
              <p>
                <b>Stage 2:</b> The active player checks if they got the
                pronunciation right or wrong. If they get it right, they add
                points to their score equal to the amount wagered. If they get
                it wrong, they deduct points from their score equal to the
                amount wagered.{" "}
              </p>
              <p>
                <b> Stage 3:</b> The non-active player will wager points and
                guess if the active player knows the meaning of the word. The
                active player will write down or say aloud what they think is
                the meaning of the word.
              </p>
              <p>
                <b>Stage 4:</b> The active player checks if they got the meaning
                right or wrong. If they get it right, they add points to their
                score equal to the amount wagered. If they get it wrong, they
                deduct points from their score equal to the amount wagered.{" "}
              </p>
            </div>
          </div>
          <div>
            <h3 className="how-to-title">Active Player</h3>
            <div className="how-to-text">
              The players take turns being the active player for each round,
              with the Player 1 as the active player of the first round, Player
              2 as the active player of the second round, alternating back to
              Player 1 as the active player of the third round, and so on.
            </div>
          </div>
          <div>
            <h3 className="how-to-title">Wagers</h3>
            <div>
              A maximum of 10 points and a minimum of 1 point can be wagered
              each stage.
            </div>
          </div>
        </div>
        <Button
          onClick={this.props.goToMainMenu}
          variant="btn btn-outline-secondary"
        >
          Return to Main Menu
        </Button>
      </div>
    );
  }
}

export default HowTo;
