import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap'

function Hero (props) {
    return (
        <Jumbotron>
            <Row>
                <Col sm={6}>
                    <h1>Author Quiz</h1>
                    <p>Select the book written by the author shown.</p>
                </Col>
                {/* <Col>
                    <h1>Correct Answers: {props.right} / {props.total}</h1>
                </Col> */}
            </Row>
        </Jumbotron>
    )
  }

  export default Hero