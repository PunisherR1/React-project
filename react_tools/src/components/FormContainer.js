import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>CONTACT US</h2>
      <p type="Name:">
        <input
          id="name"
          name="name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Write your name here.."
        ></input>
      </p>
      <p type="Email:">
        <input
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Let us know how to contact you back.."
        ></input>
      </p>
      <p type="Message:">
        <input
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="What would you like to tell us.."
        ></input>
      </p>
      <button type="submit">Send Message</button>
      <div>
        <span className="fa fa-phone">
          <FaPhone />
        </span>
        001 1023 567
        <span className="fa fa-envelope-o">
          <FaEnvelope />
        </span>{" "}
        contact@company.com
      </div>
    </form>
  );
};

export default Form;
