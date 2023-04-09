import React from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

class Revision extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const words = this.props.revisionWords.map((entry, index) => {
      return (
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{entry.hanzi}</Accordion.Header>
          <Accordion.Body>
            <div>{entry.pinyin}</div>
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
      <div>
        <h1>Revision</h1>
        <Accordion alwaysOpen>{words}</Accordion>
      </div>
    );
  }
}

export default Revision;
