import React from 'react';
import {Button, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

function Continue (props) {
    let result = props.result
    console.log()
    return (
        <Col sm={{ span: 2, offset: 10}}>
            <Button className='nextQuestion' variant='info' onClick={props.nextQuestion} >Next Question</Button>
        </Col>
        )
  }

  Continue.propTypes = {
      nextQuestion: PropTypes.func,
  }

  export default Continue