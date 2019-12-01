import React from 'react';
import { Alert } from 'react-bootstrap'

function Footer () {
    return (
        <Alert className='footer' variant='dark'>All images are from <Alert.Link href='https://commons.wikimedia.org/wiki/Main_Page'>Wikimedia Commons</Alert.Link>.</Alert>
    )
  }

  export default Footer