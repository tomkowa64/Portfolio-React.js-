//Own styles for component
import '../css/Skills.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

//Icons import from react bootstrap
import {CodeSlash} from 'react-bootstrap-icons';
import {Brush} from 'react-bootstrap-icons';
import {UiChecks} from 'react-bootstrap-icons';
import {MenuApp} from 'react-bootstrap-icons';
import {CodeSquare} from 'react-bootstrap-icons';
import {Globe} from 'react-bootstrap-icons';

function Skills() {
  return (
    <section className="skills" id="skills">
        <Container fluid={true}>
          <Row>
            <Col sm={4}>
              <div className="col-item">
                <CodeSlash />
                <span className="skill-title">Front-end</span>
                Tworzyłem front-end z wykorzystaniem React'a
                i Vue. Poza JS, mam jeszcze doświadczenie w pracy
                z Laravel'em (PHP) oraz z chęcią poznam nowe alternatywy.
              </div>
            </Col>
            <Col sm={4}>
              <div className="col-item">
                <Brush />
                <span className="skill-title">Tworzenie grafiki</span>
                Posiadam umiejętności w pracy w programach do 
                obróbki grafiki typu Adobe PhotoShop, czy 
                też CorelDraw. Tworzyłem już różne grafiki
                i banery.
              </div>
            </Col>
            <Col sm={4}>
            <div className="col-item">
                <UiChecks />
                <span className="skill-title">Design UI/UX</span>
                Wielokrotnie tworzyłem układy interfejsu użytkownika,
                oraz implementowałem je do aplikacji.
            </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            <div className="col-item">
                <MenuApp />
                <span className="skill-title">Responsywne aplikacje</span>
                Wykonując swoje projekty zawsze dbam o to, by kontent
                aplikacji był również przyjemny dla oka ze strony
                użytkowników korzystających z urządzeń mobilnych.
            </div>
            </Col>
            <Col sm={4}>
            <div className="col-item">
                <CodeSquare />
                <span className="skill-title">Języki programowania</span>
                Oprócz dużej pracy włożonej w doskonalenie JavaScript'a
                oraz PHP'a, posiadam też doświadczenie w tworzeniu aplikacji
                w innych językach takich jak:  C#, C++, Java, Python.
            </div>
            </Col>
            <Col sm={4}>
            <div className="col-item">
                <Globe />
                <span className="skill-title">Strony internetowe</span>
                Potrafię tworzyć strony internetowe, szablony do WordPress'a
                oraz wtyczki. Obsługiwałem już strony klientów oraz
                zajmowałem się ich administracją.
            </div>
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default Skills;
