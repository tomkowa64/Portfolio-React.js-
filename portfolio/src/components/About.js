//Own styles for component
import '../css/About.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

function About() {
  return (
    <section className="about" id="about">
        <Container fluid={true}>
          <Row>
            <Col sm={6}>
              <div className="about-desc">

              </div>
            </Col>
            <Col sm={6}>
              <div className="about-exp">

              </div>
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default About;
