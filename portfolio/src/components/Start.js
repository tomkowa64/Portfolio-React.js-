//Own styles for component
import '../css/Start.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';

function Start() {
  return (
    <section className="start">
        <Container fluid={true}>
          <Row>
            <Col sm={4} className="portfolio-image">
              <Image src="https://via.placeholder.com/150" fluid />
            </Col>
            <Col sm={8}>
              <Container className="portfolio-title">
                <Row className="">

                </Row>
                <Row>

                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default Start;
