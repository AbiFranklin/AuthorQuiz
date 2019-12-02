import React from 'react';
import { connect } from 'react-redux'
import { Row, Col, Jumbotron } from 'react-bootstrap'


function mapStatetoProps(state) {
    return {
      correct: state.correct,
      total: state.total
    }
  }

  
  const Hero = connect(mapStatetoProps) (function Hero(props) {
    return (
        <Jumbotron>
            <Row>
                <Col sm={6}>
                    <h1>Author Quiz</h1>
                    <p>Select the book written by the author shown.</p>
                </Col>
                <Col>
                    <h1>Correct Answers: {props.correct} / {props.total}</h1>
                </Col>
            </Row>
        </Jumbotron>
    )
  })

  export default Hero