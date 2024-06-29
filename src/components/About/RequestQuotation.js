import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import QuoteHeader from './QuoteHeader';
import iconemail from '../../images/icon-email.png';
import constantsItem from '../utils/constant';
import '../../css/quotation.css';

import axios from 'axios';
import Testimonial from '../main/testimonials';
import {Helmet} from 'react-helmet';
import SecondHeader from '../header/secondHeader';
import Form from 'react-bootstrap/Form';

const RequestQuotation = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm ();

  const [emailValue, setEmailValue] = useState ('');
  const [submit, setSubmit] = useState (false);

  const [price, setPrice] = useState (0);
  const [custom_price, setCustomPriceStatus] = useState ('');
  const [service, setService] = useState ('');
  const [service_error, setServiceError] = useState ('');

  const [errors_custom, setCustomErrors] = useState (false);

  const [show_samples, setSamples] = useState (false);

  const [exists, setExists] = useState (false);

  const onSubmit = data => {
    setEmailValue (data);

    const body = data;
    body.service = service;

    if (!service) {
      setServiceError (true);
      return;
    }

    const url = constantsItem.url + '/quotation';

    setSubmit (true);

    axios
      .post (url, body)
      .then (response => {
        // console.log (response);
        if (response.data.result) {
          document.getElementById ('thank-you-box').style.display = 'block';
        }
      })
      .catch (error => {
        setSubmit (false);
        setExists (true);

        //console.log (error.response.data);
      });
  };

  const email = watch ('email');

  const close = () => {
    setSubmit (false);

    document.getElementById ('thank-you-box').style.display = 'none';
    window.location.href = '/';
  };

  const [value, setValue] = useState ('');
  const [isChecked, setIsChecked] = useState (false);

  const formatValue = value => {
    return value.replace (/\D/g, '').replace (/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const onChange = e => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test (e.target.value)) {
      setValue (e.target.value);
    }

    // Add a comma after every three positions when typing in the input field
    const inputValue = e.target.value;
    const formattedValue = formatValue (inputValue);
    setValue (formattedValue);
  };

  function handleCheckboxChange (event) {
    setIsChecked (event.target.checked);
  }
  const handleSamples = status => {
    setSamples (status);
  };

  useEffect (() => {
    const elem = document.getElementById ('header');
    elem.style.backgroundColor = 'white';
  });

  return (
    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Request Quote</title>
        <meta
          name="Request Quote"
          content="Voyage is a tech business specializing in UI/UX design, web development, mobile app development, and web/app management. Our global team of experts also offers top-notch SEO services and web/app copywriting. With a global perspective and local focus, we prioritize usability, reliability, and innovation to create engaging digital experiences. Let us help you fuel your digital growth and achieve your online potential. Get in touch with us today."
        />
        <link rel="canonical" href="https://.tech/aboutus" />
      </Helmet>

      {show_samples
        ? <div className="about-popup">
            <div className="close-sec">
              <span
                className="close-window"
                onClick={() => handleSamples (false)}
              >
                Close window
              </span>
            </div>
            <p>
              <span style={{color: 'black', fontSize: 20}}>
                {' '}Website for real estate business
              </span>
              {' '}
              <br />
              Our real estate business aims to provide exceptional service to buyers and sellers in the property market. We need a well-designed website that offers personalized customer experiences and efficient property search tools to achieve this. Comprehensive property information, including floor plans, photos, and detailed descriptions, is crucial, and we require a user-friendly content management system to manage our website’s content efficiently. Additionally, we need SEO tools to help our website rank high in search engine results and reach a wider audience. With content management and SEO systems, we can optimize our website’s performance, improve the user experience, and ultimately drive sales.
              {' '}

            </p>
            <p>
              <span style={{color: 'black', fontSize: 20}}>
                {' '}Mobile Application for restaurant business <br />
              </span>
              Our restaurant business aims to offer customers exceptional dining experiences through a mobile application. We face challenges like intense competition and the need to optimize our supply chain management to ensure the timely delivery of orders. To succeed in this competitive industry, we continuously innovate and offer unique value propositions such as personalized customer experiences, efficient ordering and payment processing, and loyalty programs. We require essential software tools such as online ordering systems, CRM, and payment processing software to enhance our performance. We must streamline our operations, improve the customer experience, and stay ahead of the competition. With technology as our ally, we can provide exceptional customer service and increase profitability.

            </p>
            <p>
              <span style={{color: 'black', fontSize: 20}}>
                {' '}Custom Software for Flight Ticketing Business <br />
              </span>
              Delta Travels is a highly competitive flight ticketing business that offers airline tickets through various channels. Our primary objective is to provide our customers with the best flight deals while maximizing our profits. We face challenges like competition and dynamic pricing, which require us to innovate continuously and offer unique value propositions such as personalized customer experiences, loyalty programs, and competitive pricing. We need essential software tools such as flight booking systems, CRM, revenue management, and payment processing software to enhance our performance. By utilizing these tools, we can streamline our operations, improve the customer experience, and stay ahead of our competition.

            </p>

            <p>
              <span style={{color: 'black', fontSize: 20}}>
                {' '}Custom Software for Warehouse business <br />
              </span>
              Balton Stores is a competitive warehouse business that focuses on storing and distributing goods. We are facing significant challenges in optimizing space and supply chain management. The rising cost of real estate demands that we make the most of every inch of storage space available. We require software tools such as warehouse management systems to help us optimize our inventory and storage space to overcome this challenge. In addition, we must ensure that our goods are delivered to customers on time and in the most efficient manner possible. This requires transportation management systems that help us optimize our logistics and supply chain operations. Utilizing these software tools can enhance our overall performance, remain competitive, and offer better value propositions to our customers.

            </p>

          </div>
        : null}
      <header className="header" id="header">
        <SecondHeader quotation={true} />
      </header>
      <div className="container request-quotation">
        <div className="static-page-section percent-container">
          <h1 className="terms-title" style={{textAlign:'center'}}>Request a Quotation</h1>
          <p className="page-text thank-text">
            Thank you for considering our digital services. Our experienced team specializes in delivering intelligent solutions that bring your ideas to life.
          </p>
        </div>

        <form
          className="quote-form percent-container"
          onSubmit={handleSubmit (onSubmit)}
        >
          <Row className="quote-row" style={{marginTop: '60px'}}>
            <p className="form-par"><span>Service Package</span></p>
            <Form.Group className="mb-3" style={{width: '48%'}}>
              <Form.Select
                onChange={e => {
                  setService (e.target.value);
                  setServiceError (false);
                }}
              >
                <option value={null}>Select Service</option>
                <option value={'UI/UX Design'}>UI/UX Design</option>
                <option value={'Mobile App Development'}>
                  Mobile App Development
                </option>
                <option value={'Web/App Audit'}>Web/App Audit</option>
                <option value={'Web/App Management'}>Web/App Management</option>
                <option value={'Web App Development'}>
                  Web App Development
                </option>
                <option value={'Digital Content Creation'}>
                  Digital Content Creation
                </option>
                <option value={'Digital Marketing Solutions'}>
                  Digital Marketing Solutions
                </option>
              </Form.Select>
            </Form.Group>

            {service_error &&
              <p className="text-error">Please select service</p>}

            {/*
            

            <Col md={6}>
              <input
                type="radio"
                id="ui"
                {...register ('service', {required: true})}
                name="service"
                value="UI/UX Design"
              />
              &emsp;
              <label for="ui">UI/UX Design</label>
              {' '}
            </Col>
            <Col md={6}>
              <input
                type="radio"
                id="mobileapp"
                name="service"
                {...register ('service', {required: true})}
                value="Mobile App Development"
              />
              &emsp;
              <label for="mobileapp">Mobile App Development</label>
              {' '}
            </Col>
            <Col md={6}>
              <input
                type="radio"
                id="audit"
                name="service"
                {...register ('service', {required: true})}
                value="Web/App Audit"
              />
              &emsp;
              <label for="audit">Web/App Audit</label>
              {' '}
            </Col>
            <Col md={6}>
              <input
                type="radio"
                id="maintenance"
                name="service"
                {...register ('service', {required: true})}
                value="Web / App Maintenance"
              />
              &emsp;
              <label for="maintenance">Web / App Maintenance</label>
              {' '}
            </Col>
            <Col md={6}>
              <input
                type="radio"
                id="webdev"
                {...register ('service', {required: true})}
                name="service"
                value="Web App Development"
              />
              &emsp;
              <label for="webdev">Web App Development</label>
              {' '}
            </Col>
            <Col md={6}>
              <input
                type="radio"
                id="digitalmarketing"
                {...register ('service', {required: true})}
                name="service"
                value="digital marketing"
              />
              &emsp;
              <label for="seo">Digital Marketing</label>
              {' '}
            </Col>
            <Col md={6}>
              <input
                type="radio"
                id="contentwriting"
                {...register ('service', {required: true})}
                name="service"
                value="Web/App content writing"
              />
              &emsp;
              <label for="seo">Web/App content writing</label>
              {' '}
            </Col>
            <Col md={6}>
              <input
                type="radio"
                id="pre-built"
                {...register ('service', {required: true})}
                name="service"
                value="Pre-built Software Products"
              />
              &emsp;
              <label for="seo">Pre-built Software Products</label>
              {' '}
            </Col>

            {errors.service &&
              <p className="text-error">Please check the service</p>}
            */}
          </Row>

          <Row>
            <p className="form-par">Contact Details</p>
            <Col md={6}>
              <label for="name">Name</label><br />
              <input
                type="text"
                placeholder="Robin Harrison"
                id="name"
                className="quote-form-input"
                {...register ('name', {
                  required: true,
                  maxLength: 25,
                })}
              />
              {errors.name &&
                <p className="text-error">Please check the Name</p>}
            </Col>
            <Col md={6}>
              <label for="email">Email</label><br />
              <input
                type="text"
                placeholder="robin@topwriter.com"
                id="email"
                className="quote-form-input"
                {...register ('email', {
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email &&
                <p className="text-error">Please check the Email</p>}
            </Col>
          </Row>

          <Row>

            <Col md={6}>
              <label for="company">Company</label><br />
              <input
                type="text"
                placeholder="Topwriter Inc"
                id="company"
                className="quote-form-input"
                {...register ('company', {
                  required: true,
                })}
              />
              {errors.company &&
                <p className="text-error">Please check the Company</p>}
            </Col>
            <Col md={6}>
              <label for="job">Job Title</label><br />
              <input
                type="text"
                placeholder=" Managing Director"
                id="job"
                className="quote-form-input"
                {...register ('job', {
                  required: true,
                })}
              />
              {errors.job &&
                <p className="text-error">Please check the Job Title</p>}
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label for="country">Country</label> <br />
              <input
                type="text"
                placeholder="United Kingdom"
                id="country"
                className="quote-form-input"
                {...register ('country', {
                  required: true,
                  maxLength: 25,
                })}
              />
              {errors.country &&
                <p className="text-error">Please check the Country</p>}
            </Col>
            <Col md={6}>
              <label for="phone">Phone</label><br />
              <input
                type="text"
                placeholder="+44 12 7845 3272"
                id="phone"
                className="quote-form-input"
                {...register ('phone', {
                  required: true,
                  pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                })}
              />
              {errors.phone &&
                <p className="text-error">Please check the Phone</p>}
            </Col>
          </Row>
          <Row>
            <p className="page-text form-par"><span>Your Budget</span></p>
            <Row>
              <Col md={4} className="quote-row">
                <input
                  {...register ('budget', {required: true})}
                  type="radio"
                  id="onethousand"
                  value="USD $7,000 - USD $8,999"
                />
                &emsp;
                <label for="onethousand">USD $7,000 - USD $8,999</label>
                <br />
                <input
                  {...register ('budget', {required: true})}
                  type="radio"
                  id="threeThousand"
                  value="USD $8,000 - USD $11,999"
                />
                &emsp;
                <label for="threeThousand">USD $8,000 - USD $11,999</label>
              </Col>
              <Col md={4} className="quote-row">
                <input
                  {...register ('budget', {required: true})}
                  type="radio"
                  id="sixThousand"
                  value="USD $12,000 - USD $17,999"
                />
                &emsp;
                <label for="sixThousand">USD $12,000 - USD $17,999</label>
                <br />
                <input
                  {...register ('budget', {required: true})}
                  type="radio"
                  id="twelve"
                  value="USD $18,000 - USD $29,999"
                />
                &emsp;
                <label for="twelve">USD $18,000 - USD $29,999</label>
              </Col>
              <Col md={4} className="quote-row">
                <input
                  {...register ('budget', {required: true})}
                  type="radio"
                  id="twentyfour"
                  value="USD $30,000 - USD $51,999"
                />
                &emsp;
                <label for="twentyfour">USD $30,000 - USD $51,999</label>
                <br />
                <input
                  {...register ('budget', {required: true})}
                  type="radio"
                  id="custom"
                  value="custom"
                />
                &emsp;
                <label for="custom">
                  Customize USD
                  {' '}
                  <input
                    type="text"
                    style={{width: '5rem'}}
                    value={value}
                    onChange={onChange}
                  />
                </label>
              </Col>
            </Row>
            {errors.budget &&
              <p className="text-error">Please check the budget</p>}
          </Row>

          <Row>
            <Col>
              <p className="page-text form-par">
                <span>Your Idea/Project (Optional)</span>

              </p>
              <p>
                In the space below, please describe your business and the main challenges you face, as well as the type of software you require to enhance your performance. Check out some samples
                {' '}
                <span
                  style={{color: '#4DBBBD', cursor: 'pointer'}}
                  onClick={() => handleSamples (true)}
                >
                  here
                </span>
              </p>
              <textarea
                {...register ('idea', {required: false})}
                style={{width: '100%', height: '200px'}}
                placeholder="In this space, please describe your business and the main challenges you face, as well as the type of software you require to enhance your performance."
              />

              {errors.idea &&
                <p className="text-error">Please check the Idea</p>}
              <p
                className="page-text"
                style={{marginTop: '60px', lineHeight: '28px'}}
              >
                We look forward to working with you and bringing your vision to life. If you have any further questions, please don't hesitate to contact us
                {' '}
                <a href="mailto: info@voyagetechi.com">info@voyagetechi.com</a>
                .
              </p>
            </Col>
          </Row>
          <Row>

            {exists &&
              <p className="text-error">
                You can not resubmit a quotation in the shortest period; we have already received your quote; Kindly wait for our team to get back to you.
              </p>}
            <Col>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{marginRight: '1rem', marginBlock: '2rem'}}
                />
                By submitting this quote request, you agree with the
                {' '}
                <a href="/terms" className="links" target="_blank">
                  terms{' '}
                </a>
                {' '}
                and
                {' '}
                <a href="/terms" className="links" target="_blank">
                  Privacy Policy of Voyage.
                </a>
              </label>
            </Col>
          </Row>
          <Row>
            <Col style={{textAlign: 'center'}}>
              <Button
                type="submit"
                disabled={!isChecked || submit}
                className="quote-btn"
              >
                {submit ? 'Submiting' : 'Submit'}
              </Button>
            </Col>

          </Row>

        </form>

      </div>
      <div className="thank-you-box" id="thank-you-box">
        <div className="icon-mail">
          <img src={iconemail} alt="Mail Icon" className="env-icon" />
        </div>
        <h1>THANK YOU!</h1>
        <p>
          You have successfully submitted your quotation. A confirmation email has been sent to
          {' '}
          <span className="email-capture">{email}</span>
          {' '}
          with more information.
          {' '}
        </p>
        <p>Thanks again for visiting Voyage today. </p>
        <button className="alright-btn" onClick={close}>Alright!</button>
      </div>
      {/* <WhyTallen /> */}
      <Testimonial />
    </div>
  );
};

export default RequestQuotation;
