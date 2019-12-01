import React, {useState} from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import {authors} from '../Components/data';
import {shuffle} from 'underscore';
import Continue from './Continue';
import PropTypes from 'prop-types';

function Turn (props) {
    const randomauthor = Math.floor(Math.random() * authors.length)

    function randombooks(){
        const allBooks = [];
        authors.forEach((author, i) => {
            if (i !== randomauthor){
                author.books.forEach(book => allBooks.push(book))
            }
        })

        return shuffle(allBooks).slice(0, 3);
    }

    const answers = randombooks()
    const randomauthorbook = shuffle(authors[randomauthor].books).slice(0,1);
    answers.push(randomauthorbook[0])

    let answered = false;

    const onClick = (e) => {
        if (answered === false) {
            if (e.target.innerHTML === randomauthorbook) {
                e.target.style.color = '#155724';
                e.target.style.backgroundColor = '#d4edda';
                e.target.style.borderColor = '#c3e6cb';

            } else {
                e.target.style.color = '#721c24';
                e.target.style.backgroundColor = '#f8d7da';
                e.target.style.borderColor = '#f5c6cb';

                var allAnswers = document.querySelectorAll('.alert');
                var rightAnswer = [];

                for (var i = 0; i < allAnswers.length; i++) { 
                    if (allAnswers[i].innerHTML.startsWith(randomauthorbook)) {
                        rightAnswer.push(allAnswers[i]);
                
                rightAnswer[0].style.color = '#155724';
                rightAnswer[0].style.backgroundColor = '#d4edda';
                rightAnswer[0].style.borderColor = '#c3e6cb';
    }
}
            }
            answered = true;
        }
    }
 
    return (
    <Row className='turn'>
        <Col sm={{ span: 4 }} className='image'>
            <img src={authors[randomauthor].imgUrl} className='authorimage' alt='Author' />
        </Col>
        <Col sm={{ span: 8 }}>
            {shuffle(answers).map((title) => {
            return (<Alert 
                    onClick={onClick}
                    key={title} 
                    className='answer' 
                    variant='secondary' >
                    {title}
                    </Alert>)
            })}
        </Col>
        <Continue nextQuestion={props.nextQuestion} />
    </Row>
    )
  }

  Turn.propTypes = {
      nextQuestion: PropTypes.func
  }

  export default Turn 
