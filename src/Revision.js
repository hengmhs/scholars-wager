import React from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

class Revision extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let words =
      "You have not seen any words yet. Play the game to see your words here.";
    if (localStorage.revisionWords) {
      const revisionWordsLocalStorage = JSON.parse(localStorage.revisionWords);
      words = revisionWordsLocalStorage.map((entry) => {
        return (
          <Accordion.Item eventKey={entry.id} key={entry.id}>
            <Accordion.Header>
              <h5>{entry.hanzi}</h5>
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <b>{entry.pinyin}</b>
              </div>
              <ol>
                {entry.translations.map((line) => {
                  return <li>{line}</li>;
                })}
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        );
      });
    }
    return (
      <div className="revision">
        <h1>Revision</h1>
        <Accordion alwaysOpen>{words}</Accordion>
      </div>
    );
  }
}

export default Revision;
