//Own styles for component
import '../css/About.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

//Icons import from React bootstrap
import {Journals} from 'react-bootstrap-icons';
import {Book} from 'react-bootstrap-icons';
import {CodeSlash} from 'react-bootstrap-icons';
import {Terminal} from 'react-bootstrap-icons';

function About() {
  return (
    <section className="about" id="about">
        <Container fluid={true}>
          <Row>
            <Col sm={6}>
              <div className="about-desc">
                <div className="text-center about-title"><span>O mnie</span></div>
                <div className="about-description">
                  Nazywam się Tomasz Kowalski, już od 6 lat nabywam wiedzę
                  w różnych dziedzinach Informatyki, głównie związanych z programowaniem
                  Front-end'owym oraz Designowaniem UI/UX. Aktualnie jestem na 3 Roku Studiów
                  kierunku Informatyka. Na swoim koncie mam już kilka projektów, tworzonych
                  przeważnie w celu rozwinięcia własnych umiejętności. Dotyczas byłem na trzech
                  praktykach / stażach, gdzie tworzyłem oprogramowanie w PHP lub JS, wykonywałem
                  Design stron internetowych klienta i ich implementację. W planach mam dalszą
                  pracę nad umiejętnościami oraz nauczenie się większej ilości technologii by
                  kiedyś móc aplikować na stanowiska FullStack Developera.
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="about-exp">
                <div className="text-center about-exp-title">Nauka i Doświadczenie</div>
                <div className="row exp-item"><Book color="#61dafb" />2015 - 2019 - Nauka w Technikum nr 6 w Rzeszowie</div>
                <div className="row exp-item"><CodeSlash color="#61dafb"  />2017 (Październik) - Praktyki w Firmie<a target="_blank" href="https://aberit.eu/en/">Aberit</a></div>
                <div className="row exp-item"><Journals color="#61dafb"  />2018 (Lipiec) - Staże w Firmie<a target="_blank" href="https://nanocoder.pl/">NanoCoder</a></div>
                <div className="row exp-item"><Terminal color="#61dafb"  />2018 (Październik) - Praktyki zagraniczne w Portugalii</div>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default About;
