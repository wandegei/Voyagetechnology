import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../header/header';
import ContactBanner from './ContactBanner';
import '../../css/contact.css'
import ContactForm from './ContactForm';
import Offices from './Offices';
import Testimonial from '../main/testimonials';

const Contact = () => {
    return ( 
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact us</title>
                <meta
                name="Contact VOYAGE"
                content="VOYAGE is a tech business specializing in UI/UX design, web development, mobile app development, and web/app management. Our global team of experts also offers top-notch SEO services and web/app copywriting. With a global perspective and local focus, we prioritize usability, reliability, and innovation to create engaging digital experiences. Let us help you fuel your digital growth and achieve your online potential. Get in touch with us today."
                />
                <link rel="canonical" href="" />
            </Helmet>
            <Header />
            <ContactBanner />
            <div className='container'>
                <ContactForm />
                <Offices />
            </div>
            <Testimonial/>
        </div>
     );
}
 
export default Contact;