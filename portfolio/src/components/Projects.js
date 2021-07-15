//Own styles for component
import '../css/Projects.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

//Forcing hover state on first project
import '../scripts/forceHoverStatus';


function Projects() {

  return (
    <section className="projects" id="projects">
        <Container fluid={true}>
          <Row className="projects-group">
            <Col sm="3" className="project-bg" id="project1">
              
            </Col>
            <Col sm="3" className="project-bg" id="project2">
              
            </Col>
            <Col sm="3" className="project-bg expanded" id="project3">
              
            </Col>
            <Col sm="3" className="project-bg" id="project4">
              
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default Projects;
