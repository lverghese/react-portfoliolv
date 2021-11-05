import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Form, FormLabel, FormGroup, Button } from 'react-bootstrap'

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              } 
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          } 
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }
      
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    

    return(
        <section className="contact-wrapper">
            <h1 data-testid="h1tag">Contact Me</h1>
            <Form id="contact-form mx-auto"  onSubmit={handleSubmit}>
              <FormGroup className="mb-2">
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
              </FormGroup>
              <FormGroup className="mb-3">
                  <FormLabel htmlFor="email">Email address:</FormLabel>
                  <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
              </FormGroup>
              <FormGroup className="mb-3">
                  <FormLabel htmlFor="message">Message:</FormLabel>
                  <textarea name="message" defaultValue={message} onBlur={handleChange} rows="2"  />
                  {errorMessage && (
                      <div>
                          <p className="error-text bg-black">{errorMessage}</p>
                      </div>
                      )}
                  
              </FormGroup>
              <Button data-testid="button" type="submit">Submit</Button>
            </Form>
        </section>
    )

}

export default Contact; 