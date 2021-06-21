//Stylesheets
import '../css/Main.scss';

//Components
import PortfolioNavbar from '../components/Navbar';
import Start from '../components/Start';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function Main() {
  return (
    <section className="main">
        <PortfolioNavbar />
        <Navigation />
        <Start />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
    </section>
  );
}

export default Main;
