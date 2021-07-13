//Own styles for component
import '../css/Footer.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

//Icons import from react bootstrap
import {Facebook} from 'react-bootstrap-icons';
import {Github} from 'react-bootstrap-icons';
import {Instagram} from 'react-bootstrap-icons';

function Footer() {
  return (
    <section className="footer">
        <Container fluid={true}>
          <Row>
            <Col sm={6} className="footer-description">
              Portfolio zostało wykonane z wykorzystaniem
              React.js 
            </Col>
            <Col sm={6} className="footer-info">
              <p>Telefon komórkowy: +48 794 682 811</p>
              <p>Ades e-mail: tomkowa64@gmail.com</p>
              <p className="footer-icons">
                <a href="#"><Facebook /></a>
                <a href="#"><Github /></a>
                <a href="#"><Instagram /></a>
              </p>
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default Footer;
