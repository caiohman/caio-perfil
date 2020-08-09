import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import {FaWhatsapp} from 'react-icons/fa'
import styled from 'styled-components'

const Styled = styled.div`

.foot-icon-align{
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const ProfileFooter = () => (
  <Styled>
  <div className = "prof-footer-config">
    <Container>
      <Row>
        <Col md>
        </Col>
        <Col md className = "foot-icon-align">
        <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
          <div className = "social-icons-config">
            <a href = "https://www.linkedin.com/in/caioohman/" target = "_blank">
              <FaLinkedin/>
            </a>
            <a href = "https://twitter.com/caioohman" target = "_blank">
              <FaTwitter/>
            </a>
            <a href = "https://www.instagram.com/caioohman/" target = "_blank">
              <FaInstagram/>
            </a>
            <a href = "https://github.com/caiohman" target = "_blank">
              <FaGithub/>
            </a>
            <a href = "https://wa.me/5519989032927" target = "_blank">
              <FaWhatsapp/>
            </a>
          </div>
          </IconContext.Provider>
        </Col>
        <Col md>
        </Col>
      </Row>
    </Container>
  </div>
  </Styled>
)
