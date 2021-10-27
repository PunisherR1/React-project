import React from "react";

const Form = () => {
  return (
    <form className="form">
      <h2>CONTACT US</h2>
      <p type="Name:">
        <input placeholder="Write your name here.."></input>
      </p>
      <p type="Email:">
        <input placeholder="Let us know how to contact you back.."></input>
      </p>
      <p type="Message:">
        <input placeholder="What would you like to tell us.."></input>
      </p>
      <button>Send Message</button>
      <div>
        <span className="fa fa-phone"></span>001 1023 567
        <span className="fa fa-envelope-o"></span> contact@company.com
      </div>
    </form>
  );
};

export default Form;
