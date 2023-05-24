import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './register.css';

const EmailSend = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('msrajpoot1000', 'msrajpoot1001', form.current, 'UbRCrSU_1k2Vj559z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" value="manish"/>
      <input type="submit" value="Send" />
    </form>
  );
};
export default EmailSend