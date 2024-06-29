import React from 'react';
import contact from '../../images/contact.png';

const ContactBanner = () => {
    return ( 
        <div className="contact-banner">
            <div className="container ">
                <div className='top-about-us'>
                    <div className="text-div-abt">
                        <h1 className="middle-title">
                        Connect with <br />Our Team 
                        </h1>
                        <p className="building-text">
                        Whether you're interested in learning more about us or need help with any issue, we're just a message away. Contact us today and let's get the conversation started.                        </p>
                    </div>
                    <img src={contact} alt="about vayoge" className="abt-img" />
                </div>
            </div>
        </div>
     );
}
 
export default ContactBanner;