import React, { useState } from 'react';
import './contact.css'; // Import CSS file for styling
import ContactForm from './ContactForm';
import Navbar from '../../components/Navbar';

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
    <Navbar />
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p> Heya!! Thank you for reaching out to us, if you wanna collab or have any query please choose an option below to get in touch with us.</p>

      <div className="contact-options-container">
        <button onClick={() => handleOptionSelect('Collab')}>Collab</button>
        <button onClick={() => handleOptionSelect('Events')}>Events</button>
        <button onClick={() => handleOptionSelect('Game Related')}>Game Related</button>
        <button onClick={() => handleOptionSelect('Game Pass')}>Game Pass</button>
      </div>

      {selectedOption && <ContactForm selectedOption={selectedOption} />}
    </div>
    </>
  );
};

export default Contact;
