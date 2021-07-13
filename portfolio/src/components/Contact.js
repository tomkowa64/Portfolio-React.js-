//React Component
import React,{Component} from 'react';

//Own styles for component
import '../css/Contact.scss';

//Navbar bootstrap components
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

//Icons import from react bootstrap
import {Envelope} from 'react-bootstrap-icons';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
}

handleSubmit(e) {
  e.preventDefault();

  fetch('http://localhost:3002/send', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
    (response) => (response.json())
      ).then((response)=> {
    if (response.status === 'success') {
      alert("Message Sent.");
      this.resetForm()
    } else if(response.status === 'fail') {
      alert("Message failed to send.")
    }
  })
}

resetForm(){
  this.setState({name: '', email: '', message: ''})
}

render(){
  return (
    <section className="contact" id="contact">
        <div className="section-label"><Envelope /></div>
        <Container fluid={true}>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name">Imię i Nazwisko</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Wiadomość</label>
                <textarea className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Wyślij</button>
          </form>
        </Container>
    </section>
  );
}

onNameChange(event) {
  this.setState({name: event.target.value})
}

onEmailChange(event) {
  this.setState({email: event.target.value})
}

onMessageChange(event) {
  this.setState({message: event.target.value})
}

}
export default Contact;
