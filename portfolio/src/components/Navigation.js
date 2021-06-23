//Own styles for component
import '../css/Navigation.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';


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
          <div className="navigation-icons-group">
            <a href="#start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="url(#linear-gradient)">
              <defs>
                <linearGradient id="linear-gradient" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              
                    <stop offset="0" stop-color="#b5bcc7" />
                  
                    <stop offset="0.14285714285714285" stop-color="#aab8cc" />
                  
                    <stop offset="0.2857142857142857" stop-color="#9db5d0" />
                  
                    <stop offset="0.42857142857142855" stop-color="#8db2d5" />
                  
                    <stop offset="0.5714285714285714" stop-color="#7cafd9" />
                  
                    <stop offset="0.7142857142857142" stop-color="#66acdd" />
                  
                    <stop offset="0.8571428571428571" stop-color="#48a9e0" />
                  
                    <stop offset="1" stop-color="#00a7e3" />
                  
                </linearGradient>
              </defs>
                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path><path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path></svg>
            </a>
            <a href="#projects">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="url(#linear-gradient)">
              <defs>
                <linearGradient id="linear-gradient" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              
                    <stop offset="0" stop-color="#b5bcc7" />
                  
                    <stop offset="0.14285714285714285" stop-color="#aab8cc" />
                  
                    <stop offset="0.2857142857142857" stop-color="#9db5d0" />
                  
                    <stop offset="0.42857142857142855" stop-color="#8db2d5" />
                  
                    <stop offset="0.5714285714285714" stop-color="#7cafd9" />
                  
                    <stop offset="0.7142857142857142" stop-color="#66acdd" />
                  
                    <stop offset="0.8571428571428571" stop-color="#48a9e0" />
                  
                    <stop offset="1" stop-color="#00a7e3" />
                  
                </linearGradient>
              </defs>
                <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z"></path><path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z"></path></svg></a>
            <a href="#about"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="url(#linear-gradient)">
            <defs>
                <linearGradient id="linear-gradient" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              
                    <stop offset="0" stop-color="#b5bcc7" />
                  
                    <stop offset="0.14285714285714285" stop-color="#aab8cc" />
                  
                    <stop offset="0.2857142857142857" stop-color="#9db5d0" />
                  
                    <stop offset="0.42857142857142855" stop-color="#8db2d5" />
                  
                    <stop offset="0.5714285714285714" stop-color="#7cafd9" />
                  
                    <stop offset="0.7142857142857142" stop-color="#66acdd" />
                  
                    <stop offset="0.8571428571428571" stop-color="#48a9e0" />
                  
                    <stop offset="1" stop-color="#00a7e3" />
                  
                </linearGradient>
              </defs>
              <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"></path><path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg></a>
            <a href="#skills"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="url(#linear-gradient)">
            <defs>
                <linearGradient id="linear-gradient" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              
                    <stop offset="0" stop-color="#b5bcc7" />
                  
                    <stop offset="0.14285714285714285" stop-color="#aab8cc" />
                  
                    <stop offset="0.2857142857142857" stop-color="#9db5d0" />
                  
                    <stop offset="0.42857142857142855" stop-color="#8db2d5" />
                  
                    <stop offset="0.5714285714285714" stop-color="#7cafd9" />
                  
                    <stop offset="0.7142857142857142" stop-color="#66acdd" />
                  
                    <stop offset="0.8571428571428571" stop-color="#48a9e0" />
                  
                    <stop offset="1" stop-color="#00a7e3" />
                  
                </linearGradient>
              </defs>
              <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"></path></svg></a>
            <a href="#contact"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="url(#linear-gradient)">
            <defs>
                <linearGradient id="linear-gradient" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              
                    <stop offset="0" stop-color="#b5bcc7" />
                  
                    <stop offset="0.14285714285714285" stop-color="#aab8cc" />
                  
                    <stop offset="0.2857142857142857" stop-color="#9db5d0" />
                  
                    <stop offset="0.42857142857142855" stop-color="#8db2d5" />
                  
                    <stop offset="0.5714285714285714" stop-color="#7cafd9" />
                  
                    <stop offset="0.7142857142857142" stop-color="#66acdd" />
                  
                    <stop offset="0.8571428571428571" stop-color="#48a9e0" />
                  
                    <stop offset="1" stop-color="#00a7e3" />
                  
                </linearGradient>
              </defs>
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"></path></svg></a>
          </div>
        </Container>
    </section>
  );
}

export default Navigation;
