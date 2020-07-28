import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const whoami = " Meu nome é Caio. Sou estudante na Universidade" +
  " de São Paulo no curso Bacharelado em Sistema de Informação. Sou formado" +
  " pela ETEC Bento Quirino como Técnico em Eletrônica."

const interests = "Atualmente, estou aprendendo desenvolvimento web, " +
  "desktop e IoT. Gosto muito de pensar o layouts para os produtos e soluções" +
  " que automatizam as nossas tarefas."

const languages = "Português nativo, Inglês nível Avançado" +
  " e Francês nível Iniciante."


export const HomeOptions = () => (
  <Accordion defaultActiveKey = "0" className = "arc-pos-config">
    <Card>
      <Accordion.Toggle as = {Card.Header} eventKey= "0" className = "acc-title-config">
        Quem sou
      </Accordion.Toggle>
      <Accordion.Collapse eventKey = "0">
        <Card.Body>{whoami}</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as = {Card.Header} eventKey = "1" className = "acc-title-config">
        Interesses
      </Accordion.Toggle>
      <Accordion.Collapse eventKey = "1">
        <Card.Body>{interests}</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as = {Card.Header} eventKey = "2" className = "acc-title-config">
        Línguas
      </Accordion.Toggle>
      <Accordion.Collapse eventKey = "2">
        <Card.Body>{languages}</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
)
