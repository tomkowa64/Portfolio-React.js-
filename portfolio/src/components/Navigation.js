//Own styles for component
import '../css/Navigation.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function Navigation() {
    var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navigation").style.top = "0";
    }
    else {
      document.getElementById("navigation").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  }  
  return (
    <section className="navigation" id="navigation">
        <Container fluid={true}>
          <Row></Row>
        </Container>
    </section>
  );
}

export default Navigation;
