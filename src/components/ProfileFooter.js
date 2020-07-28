import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import { IconContext } from "react-icons";

export const ProfileFooter = () => (
  <div className = "prof-footer-config">
    <Container>
      <Row>
        <Col md>
        </Col>
        <Col md className = "foot-icon-align">
        <IconContext.Provider value={{ size: "2em", className: "global-class-name" }}>
          <div>
            <a href = "https://www.linkedin.com/in/caioohman/">
              <FaLinkedin/>
            </a>
            <a href = "https://twitter.com/caioohman">
              <FaTwitter/>
            </a>
            <a href = "https://www.instagram.com/caioohman/">
              <FaInstagram/>
            </a>
            <a href = "https://github.com/caiohman">
              <FaGithub/>
            </a>
          </div>
          </IconContext.Provider>
        </Col>
        <Col md>
        </Col>
      </Row>
    </Container>
  </div>
)
