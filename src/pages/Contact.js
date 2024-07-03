import React, { useState } from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // JavaScript code that verifies the email fields match 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      setErrorMessage('Emails do not match');
    } else {
      setErrorMessage('');
      // Handle form submission
      console.log('Form submitted');
    }
  };

  return (
    <div>
      {/* head and title using Helmet component tags for SEO optimization*/}
      <Helmet>
        <title>Contact Us - Reach Out to Us for Assistance</title>
        <meta name="description" content="Contact me for any inquiries or questions you may have. Fill out the form to reach out to me." />
      </Helmet>
      <header>
        <h1>Contact Info</h1>
      </header>
      {/* ID selector */}
      <form id="contactForm" onSubmit={handleSubmit}>
        <h3>Contact Us</h3>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
        
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
        
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        
        <label htmlFor="confirmEmail">Confirm Email:</label>
        <input 
          type="email" 
          id="confirmEmail" 
          name="confirmEmail" 
          placeholder="Confirm Email" 
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          required 
        />
        
        {errorMessage && <p className="error">{errorMessage}</p>}
        
        <label htmlFor="question">Question:</label>
        <textarea id="question" name="question" placeholder="Your question..." required></textarea>
        
        <button type="submit">Submit</button>
      </form>
      <p>This form is for demonstration purpose only.</p>
      <p>Once the user hits the submit button the handleSubmit function will verify:</p>
      <ul className="custom-list">
        <li>Fields are filled</li>
        <li>Emails match</li>
      </ul>
    </div>
  );
};

export default Contact;
