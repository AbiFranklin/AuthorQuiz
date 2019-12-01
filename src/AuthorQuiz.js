import React from 'react';
import './App.css';
import { Container, Alert, Row, Col } from 'react-bootstrap'
import Hero from './Components/Hero';
import Turn from './Components/Turn';
import Continue from './Components/Continue';
import Footer from './Components/Footer'

function AuthorQuiz() {
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <Hero />
          <Turn />
          <Continue /> 
          <Alert variant='success'>hi</Alert>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default AuthorQuiz;
