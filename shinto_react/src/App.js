import React from 'react';
import Canvas from './components/P5Canvas';
import * as ReactBootstrap from "react-bootstrap";

function App() {
  return (
    <div className="App">
    <ReactBootstrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootstrap.Navbar.Brand href="#home">Kami no Michi</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#features"></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#pricing"></ReactBootstrap.Nav.Link>
      <ReactBootstrap.NavDropdown title="options" id="collasible-nav-dropdown">

        <ReactBootstrap.NavDropdown.Item href="#action/3.1">logged in as </ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.2">log out</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Create Kamvas</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Divider />
        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Search</ReactBootstrap.NavDropdown.Item>
      </ReactBootstrap.NavDropdown>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link href="#deets"></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
      </ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
      <Canvas />
      
    </div>
  );
}

export default App;
