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
        <h1>Chinese Proficiency (HSK) Level</h1>
        <Container className="level-select-container">
          <Row>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel1} className="btn-warning">
                Level 1
              </Button>
              <div className="level-text">
                <div>
                  <b>150 words</b>
                </div>
                <div>Basic words & phrases</div>
              </div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel2} className="btn-warning">
                Level 2
              </Button>
              <div className="level-text">
                <div>
                  <b>150 words</b>
                </div>
                <div>Communicate simply</div>
              </div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel3} className="btn-warning">
                Level 3
              </Button>
              <div className="level-text">
                <div>
                  <b>300 words</b>
                </div>
                <div>Daily life & work communication</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel4} className="btn-warning">
                Level 4
              </Button>
              <div className="level-text">
                <div>
                  <b>600 words</b>
                </div>
                <div>Discuss a wide range of topics</div>
              </div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel5} className="btn-warning">
                Level 5
              </Button>
              <div className="level-text">
                <div>
                  <b>1300 words</b>
                </div>
                <div>Understand media & deliver a speech</div>
              </div>
            </Col>
            <Col lg={4}>
              <Button onClick={this.props.chooseLevel6} className="btn-warning">
                Level 6
              </Button>
              <div className="level-text">
                <div>
                  <b>2500 words</b>
                </div>
                <div>Native understanding & fluent expression</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HSKSelect;
