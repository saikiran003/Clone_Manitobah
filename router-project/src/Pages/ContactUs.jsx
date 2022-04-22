import React from "react";
import "../Styles/contactus.css";

const ContactUs = () => {
  return (
    <form id="container">
      <p className="para">Contact Us</p>
      <div className="input-box">
          <div>
            <label>Name</label>
            <br />
            <input type="text" className="box"/>
          </div>
          <div>
            <label>Email</label>
            <br />
            <input type="text" />
          </div> 
      </div>

      <div className="text-area">
          <label>Message</label>
          <br/>
          <textarea rows="10" cols="120"/>
      </div>

      <input type="submit" className="submit" value="Send"/>
    </form>
  );
};

export default ContactUs;
