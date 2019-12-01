import React, {useState} from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Hero from './Components/Hero';
import Turn from './Components/Turn';
import Footer from './Components/Footer'

function AuthorQuiz() {
  const [question, setQuestion] = useState(true);
  let total = 0;
  let right = 0;

  const nextQuestion = (result) => {
    setQuestion(!question);
  }

  



  
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <Hero total={total} right={right}/>
          <Turn 
          nextQuestion={nextQuestion} 
          key={question}/>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default AuthorQuiz;
