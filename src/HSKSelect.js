import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HSKSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>HSK Level Select</h1>
        <Container className="level-select-container">
          <Row>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel1}>HSK Level 1</Button>
              <div>150 words</div>
              <div>Basic words & phrases</div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel2}>HSK Level 2</Button>
              <div>150 words</div>
              <div>Communicate simply</div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel3}>HSK Level 3</Button>
              <div>300 words</div>
              <div>Basic life, academic and work communication</div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel4}>HSK Level 4</Button>
              <div>600 words</div>
              <div>Discuss about a wide range of topics</div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel5}>HSK Level 5</Button>
              <div>1300 words</div>
              <div>Understand media and deliver a speech</div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel6}>HSK Level 6</Button>
              <div>2500 words</div>
              <div>High level of understanding and fluent expression</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HSKSelect;
