import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import picture from './assets/caio-site.jpg'
import {HomeOptions} from './components/HomeOptions.js'


export const Home = () => (
  <Container >
    <Container>
      <Row>
        <Col md>
          <HomeOptions />
        </Col>
        <Col md className = "pic-align-config">
          <Image className = "profile-pic-config" src = {picture} rounded />
        </Col>
      </Row>
    </Container>
  </Container>
)
