//Own styles for component
import '../css/Projects.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function Projects() {
  return (
    <section className="projects" id="projects">
        <Container fluid={true}>
          <Row className="projects-group">
            <Col sm="3" className="project-bg" id="project1">
              1
            </Col>
            <Col sm="3" className="project-bg" id="project2">
              2
            </Col>
            <Col sm="3" className="project-bg" id="project3">
              3
            </Col>
            <Col sm="3" className="project-bg" id="project4">
              4
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default Projects;
