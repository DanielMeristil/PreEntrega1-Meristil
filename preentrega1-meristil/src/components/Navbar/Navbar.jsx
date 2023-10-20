import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container> 
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#home">Porductos</Nav.Link>
            <Nav.Link href="#home">Servicios</Nav.Link>
            <Nav.Link href="#home">Contactos</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Seleccionar servicio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Micropimentacion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Microblading</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Labios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Delineado Permanente y Scejas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Depilacion Facial (lifting)</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Microneedling</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Trata Arrugas Manchas Lunares</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );

}

export default NavBar;