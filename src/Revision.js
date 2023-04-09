import React from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

class Revision extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const revisionWordsLocalStorage = JSON.parse(localStorage.revisionWords);
    const words = revisionWordsLocalStorage.map((entry) => {
      return (
        <Accordion.Item eventKey={entry.id} key={entry.id}>
          <Accordion.Header>{entry.hanzi}</Accordion.Header>
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
    return (
      <div className="revision">
        <h1>Revision</h1>
        <Accordion alwaysOpen>{words}</Accordion>
      </div>
    );
  }
}

export default Revision;
