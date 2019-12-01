import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap'
import {authors} from '../Components/data';
import {shuffle} from 'underscore'

function Turn () {
    const randomauthor = Math.floor(Math.random() * authors.length)

    function randombooks(){
        const allBooks = authors.reduce(function(p, c, i) {
            return p.concat(c.books)
        }, []);

        return shuffle(allBooks).slice(0, 3);
    }

    const answers = randombooks()
    const randomauthorbook = shuffle(authors[randomauthor].books).slice(0,1);
    answers.push(randomauthorbook[0])

    return (
    <Row className='turn'>
        <Col sm={{ span: 4 }} className='image'>
            <img src={authors[randomauthor].imgUrl} className='authorimage' alt='Author' />
        </Col>
        <Col sm={{ span: 8 }}>
            {shuffle(answers).map((title) => <Alert key={title} className='answer' variant='secondary'>{title}</Alert>)}
        </Col>
    </Row>
    )
  }

  export default Turn 
