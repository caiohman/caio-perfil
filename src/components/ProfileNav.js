import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const homePage = '/caio-perfil/#/'

export const ProfileNav = () => (
  <Navbar bg="dark" variant="dark" expand="md" className = "navbar-config" >
    <Navbar.Toggle />
    <Navbar.Collapse className = "justify-content-end" >
      <Nav defaultActiveKey = {homePage} className = "justify-content-end" >
        <Nav.Link href = {homePage} className = "icons-config" > Perfil </Nav.Link>
        <Nav.Link href = "#projetos" className = "icons-config" > Projetos </Nav.Link>
        <Nav.Link href = "#artigos" className = "icons-config" > Artigos </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
