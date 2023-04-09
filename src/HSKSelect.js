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
        <h1>Chinese Proficiency (HSK) Contest</h1>
        <Container className="level-select-container">
          <Row>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel1}>Level 1</Button>
              <div>150 words</div>
              <div>Basic words & phrases</div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel2}>Level 2</Button>
              <div>150 words</div>
              <div>Communicate simply</div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel3}>Level 3</Button>
              <div>300 words</div>
              <div>Daily life & work communication</div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel4}>Level 4</Button>
              <div>600 words</div>
              <div>Discuss a wide range of topics</div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel5}>Level 5</Button>
              <div>1300 words</div>
              <div>Understand media & deliver a speech</div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel6}>Level 6</Button>
              <div>2500 words</div>
              <div>Native understanding & fluent expression</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HSKSelect;
