import React, { useEffect } from "react";
import "../../css/service.css";
import Header from "../header/header";
import Banner from "./banner";
import Contents from "./contents";
import QuickList from "./quicklist";
import {Helmet} from 'react-helmet';
import Testimonial from "../main/testimonials";

const Service = () =>{



    useEffect (() => {
        const status = localStorage.getItem ('status');

    
    
        if (status == 1) {
          window.location.href = '#ui-ux';
        }
        if (status == 2) {
          window.location.href = '#web-dev';
        }
        if (status == 3) {
          window.location.href = '#mobile-dev';
        }
        if (status == 4) {
          window.location.href = '#web-app-management';
        }
        if (status == 5) {
          window.location.href = '#web-app-content';
        }
        if (status == 6) {
            window.location.href = '#digital-marketing';
          }
      });

    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Service</title>
        <meta
          name="Service VOYAGE"
          content="VOYAGE is dedicated to helping businesses thrive in the digital age with exceptional results and outstanding customer service. We are highly specialized in UI/UX design, web and mobile app development, web/app management, digital content creation, and digital marketing solutions. With a strong online presence being crucial for businesses to succeed in today's digital world, we create visually stunning and intuitive digital experiences that drive user engagement and conversions. Trust us to bring your digital vision to life and enhance your digital presence, attracting more organic traffic while ensuring your digital assets are always up-to-date, secure, and running at peak performance. Contact VOYAGE today to learn more about our services and take your business to the next level."
        />
        <link rel="canonical" href="" />
      </Helmet>


        <Header />
        <div className="service-banner">
           <Banner />
           <div className="quicklist">
            <QuickList />
           </div>
        </div>
        <Contents />

        <Testimonial/>
        </>
    );
}

export default Service;