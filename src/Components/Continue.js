import React from 'react';
import { connect } from 'react-redux';
import {Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function matchDispatchToProps(dispatch){
    return {
      Reset: () => {
        dispatch({ type: 'RESET' })
      }
    }
  }
  
  const Continue = connect(null, matchDispatchToProps) (function Continue(props) {
    let result = props.result
    console.log()
    return (
    <Col sm={{ span: 2, offset: 10}}>
        <Button className='nextQuestion' variant='info' onClick={props.nextQuestion} >Next Question</Button>
        <Button className='reset' variant='danger' onClick={props.Reset} >Reset</Button>
    </Col>
        )
  })

  Continue.propTypes = {
      nextQuestion: PropTypes.func,
  }

  export default Continue