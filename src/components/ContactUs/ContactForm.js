import React, { useState } from "react";
import "./contact.css"; // Import CSS file for styling

const ContactForm = ({ selectedOption }) => {
  const [name, setName] = useState("");
  const [motive, setMotive] = useState("");
  const [description, setDescription] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log({
      name,
      motive,
      description,
      contactMethod,
      email,
      phone,
    });
    // Clear form fields after submission
    setName("");
    setMotive("");
    setDescription("");
    setContactMethod("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="contact-form-container">
      <h3>Contact Form - {selectedOption}</h3>
      <form onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="motive">Motive:</label>
          <input
            type="text"
            id="motive"
            value={motive}
            onChange={(e) => setMotive(e.target.value)}
            required
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="contactMethod">Contact Method:</label>
          <select
            id="contactMethod"
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
            required
          >
            <option value="">Select Contact Method</option>
            <option value="mail">Mail</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        {contactMethod === "mail" && (
          <div className="contact-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
        {contactMethod === "phone" && (
          <div className="contact-form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        )}
        <div className="contact-options-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
