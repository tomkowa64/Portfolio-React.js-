//Own styles for component
import '../css/Contact.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function Contact() {
  return (
    <section className="contact">
        <Container fluid={true}>
          <Row></Row>
        </Container>
    </section>
  );
}

export default Contact;
