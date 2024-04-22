import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Exercicios Miguel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/teste">Teste</Nav.Link>
            <NavDropdown title="Exercicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/exercicio1">Exercicio 1</NavDropdown.Item>
              <NavDropdown.Item href="/exercicio2">Exercicio 2</NavDropdown.Item>
              <NavDropdown.Item href="/exercicio3">Exercicio 3</NavDropdown.Item>
              <NavDropdown.Item href="/exercicio4">Exercicio 4</NavDropdown.Item>
              <NavDropdown.Item href="/exercicio5">Exercicio 5</NavDropdown.Item>
              <NavDropdown.Item href="/exercicio6">Exercicio 6</NavDropdown.Item>
              <NavDropdown.Item href="/exercicio7">Exercicio 7</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;