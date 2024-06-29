import React from 'react';
import womanLeaning from '../../images/image-landpage.png';
import {Container} from 'react-bootstrap';
import Header from '../header/header';
import WhoWeare from './WhoWeAre';
import OurMission from './OurMission';
import OurVision from './OurVision';
import WhatWeDo from './WhatWeDo';
import CoreValues from './CoreValues';
import ClientOriented from './ClientOriented';
import IdeaToLife from './Idea';
import Testimonial from '../main/testimonials';
import WhyTallen from '../main/whyTallen';
import {Helmet} from 'react-helmet';
import Achievements from './Achievements';

const AboutUs = () => {
  return (
    <div className="about-container">

      <Helmet>
        <meta charSet="utf-8" />
        <title>About us</title>
        <meta
          name="About Voyage"
          content="Voyage is a tech business specializing in UI/UX design, web development, mobile app development, and web/app management. Our global team of experts also offers top-notch SEO services and web/app copywriting. With a global perspective and local focus, we prioritize usability, reliability, and innovation to create engaging digital experiences. Let us help you fuel your digital growth and achieve your online potential. Get in touch with us today."
        />
        <link rel="canonical" href="" />
      </Helmet>

      <Header />
      <div className="about-header">
        <div className="container">
        <div className='top-about-us'>
          <img src={womanLeaning} alt="about Voyage" className="abt-img" />
          <div className="text-div-abt">
            <h1 className="middle-title">
              Shaping the<br /> Future of Digital Solutions
            </h1>
            <p className="building-text">
              Building Strong Relationships with Clients and Driving Business Success Through Exceptional Web and App Development
            </p>
          </div>
        </div>
        </div>
      </div>
      <WhoWeare />
      <OurMission />
      <OurVision />
      <IdeaToLife />
      <WhatWeDo />
      <CoreValues />
      <ClientOriented />
      <Testimonial />
      <Achievements />
    </div>
  );
};

export default AboutUs;
