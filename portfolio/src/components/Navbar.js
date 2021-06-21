//Own styles for component
import '../css/Nav.scss';

//Navbar bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'; 
import {Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap';


function PortfolioNavbar() {


  return (
    <Navbar bg="#00a7e3" variant="dark" fixed="top" id="navbar">
      <Container  className="title-nav">
        <Navbar.Brand href="#start">Tomasz Kowalski - Portfolio</Navbar.Brand>
      </Container>
    </Navbar>
  
  );
}

export default PortfolioNavbar;
