import React from 'react';
import { Row, Alert } from 'react-bootstrap'

function Footer () {
    return (
        <Alert className='footer' variant='dark'>All images are from <Alert.Link href='https://commons.wikimedia.org/wiki/Main_Page'>Wikimedia Commons</Alert.Link>.</Alert>
    )
  }

  export default Footer