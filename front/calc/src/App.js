import React from 'react';
import './css/comun.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Container from 'react-bootstrap/esm/Container';

import base from './componentes/base'
import Inicio from './componentes/calculadora'
import { Route} from "wouter"
import './App.css';

function App() {
  const redireccionInicio = () => {
    window.location.href = `http://localhost:3000/`
  }
  const redireccionAnalisis = () => {
    window.location.href = `http://localhost:3000/base`
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand >Practica 1</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  >
            <Nav className="mr-auto">
              <Nav.Link onClick={redireccionInicio} >Calculadora</Nav.Link>
              <Nav.Link onClick={redireccionAnalisis}>Datos </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    <br />

      <Container>
      <Route exact path ="/base" component={base}></Route>
      <Route exact path ="/" component = {Inicio}></Route>  
      </Container> 
</>
  );
}

export default App;
