//Own styles for component
import '../css/Skills.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
function Skills() {
  return (
    <section className="skills" id="skills">
        <Container fluid={true}>
          <Row>
            <Col sm={4}>
              <div className="col-item"></div>
            </Col>
            <Col sm={4}>
              <div className="col-item"></div>
            </Col>
            <Col sm={4}>
            <div className="col-item"></div>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            <div className="col-item"></div>
            </Col>
            <Col sm={4}>
            <div className="col-item"></div>
            </Col>
            <Col sm={4}>
            <div className="col-item"></div>
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default Skills;
