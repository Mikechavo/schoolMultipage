import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      <header>
        <h1>Contact Info</h1>
      </header>
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
    </div>
  );
};

export default Contact;
