import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap'
import {authors} from '../Components/data';

function Turn () {

    return (
    <Row className='turn'>
        <Col sm={{ span: 4 }}>
            <img src={authors[1].imgUrl} className='authorimage' alt='Author' />
        </Col>
        <Col sm={{ span: 8 }}>
            {authors[0].books.map((title) => <Alert key={title} className='answer' variant='secondary'>{title}</Alert>)}
        </Col>
    </Row>
    )
  }

  export default Turn 
