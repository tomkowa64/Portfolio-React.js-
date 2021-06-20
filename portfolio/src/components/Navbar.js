//Own styles for component
import '../css/Nav.scss';

//Navbar bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'; 
import {Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

function PortfolioNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default PortfolioNavbar;
