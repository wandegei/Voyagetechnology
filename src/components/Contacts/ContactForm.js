import React, {useState} from 'react';
import skype from '../../images/phoneviyoge.png';
import skypex from '../../images/address.png';
import whatsapp from '../../images/whatsapp.png';
import email from '../../images/email.png';
import {useForm} from 'react-hook-form';
import iconemail from '../../images/icon-email.png';
import axios from 'axios';
import ToastMessage from '../common/toastMessage';
import constantsItem from '../utils/constant';

const ContactForm = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm ();

  const [submit, setSubmit] = useState (false);

  const [isChecked, setIsChecked] = useState (false);

  const onSubmit = data => {
    setSubmit (true);
   // setIsChecked (false);

    const url = constantsItem.url + '/contact-us';

    axios
      .post (url, data)
      .then (response => {
        const res = response.data;
        if (res.result) {
          document.getElementById ('thank-you-box').style.display = 'block';
        }
      })
      .catch (error => {
        //console.log (error.response);
        setSubmit (false);
        //setIsChecked (true);

        ToastMessage ('Something went wrong, please try again latter', false);
      });
  };

  function handleCheckboxChange (event) {
    setIsChecked (event.target.checked);
  }

  const close = () => {
    document.getElementById ('thank-you-box').style.display = 'none';
    window.location.href="/";
  };

  return (
    <div className="percent-container">
      <div className="form-social-container">
        <div className="social-container text-contact">
          <h2 className="middle-title" style={{margin: '0'}}>
            Get in <span>touch</span> with us
          </h2>
          <p className="text-contact do-text">
            Do you have questions or ideas? We'd love to hear from you!{' '}
          </p>
          <div className="icon-cont">
            <div className="icon-div">
              <a href="mailto:info@voyagetechi.com" target="_blank">
                <img src={email} alt="email" className="social-icon" />
                <span>info@voyagetechi.com</span>
              </a>
            </div>
            <div className="icon-div">
              <a href="" target="_blank">
                <img src={whatsapp} alt="WhatsApp" className="social-icon" />
                <span>+256778304699</span>
              </a>
            </div>
            <div className="icon-div">
              
                <img src={skype} alt="skype" className="social-icon" />
                <span>+256393193885</span>
              
            </div>
            <div className="icon-div">
              
                <img src={skypex} alt="skype" className="social-icon" />
                <span>Plot 280, Block 244 ,Bujjuko, Wakiso District, Uganda</span>
              
            </div>
          </div>
        </div>
        <form
          className="contact-form-section"
          onSubmit={handleSubmit (onSubmit)}
        >
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register ('name', {required: true})}
          />
          {errors.name && <p className="text-error">Please check the Name</p>}

          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register ('email', {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && <p className="text-error">Please check the Email</p>}

          <input
            type="text"
            id="phone-number"
            placeholder="Phone Number"
            {...register ('phone', {
              required: true,
              pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            })}
          />
          {errors.phone &&
            <p className="text-error">Please check the Phone number</p>}

          <textarea
            placeholder="Message"
            {...register ('message', {required: true})}
          />

          {errors.message &&
            <p className="text-error">Please check the message</p>}

          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{marginRight: '1rem', marginBlock: '2rem'}}
            />
            By clicking Send you agree with our
            {' '}
            <a href="/terms" className="links">terms</a>
            {' '}
            and
            {' '}
            <a href="/terms" className="links">privacy</a>
          </label>
          <button type="submit" className="contact-btn" disabled={!isChecked||submit}>
            {submit ? 'Sending....' : 'Send'}
          </button>
        </form>
      </div>
      <div className="thank-you-box" id="thank-you-box">
        <div className="icon-mail">
          <img src={iconemail} alt="Mail Icon" className="env-icon" />
        </div>
        <h1>THANK YOU!</h1>
        {/* <p>
          You have successfully submitted your quotation. A confirmation email has been sent to
          {' '}
          <span className="email-capture">{email}</span>
          {' '}
          with more information.
          {' '}
        </p> */}
        <p>Thanks again for visiting VOYAGE today. </p>
        <button className="alright-btn" onClick={close}>Alright!</button>
      </div>
    </div>
  );
};

export default ContactForm;
