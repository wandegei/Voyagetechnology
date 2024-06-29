import React from 'react';
import { Container } from 'react-bootstrap';
import womanonphone from '../../images/voyage.jpeg'

const WhoWeare = () => {
    return ( 
        <div className='who-text ' id='who-we-are-main'>
            <div className='container'>
                <div className='top-who percent-container'>
                    <div className='digital-el'>
                        <h4 className='about-section-title'>WHO WE ARE</h4>
                        <h2 className='middle-title'>Digital <span>Global</span> Local Needs  </h2>
                        <p style={{marginBottom:'4rem', textAlign:"justify"}}>We are a full-service digital enterprise highly specialized in Web Development, Mobile App Development, UI/UX design, and SEO services for empowering businesses to succeed. Our global team of skilled professionals collaborate to delivers effective solutions digital solutions that supersedes the expectations our clients.</p>
                    </div>
                    <img src={womanonphone} alt='woman talking on phone' className='abt-img whowe-img' />
                </div>
                <div className='percent-container'>
                    <p><span>With a unique approach that combines a global perspective and local focus, we are able to</span> provide world-class services that drive positive change for our customers and communities. We utilize the latest technologies, vast global resources, design trends, and SEO practices to create engaging and user-friendly websites, mobile apps, and digital experiences that drive traffic, increase conversions, and enhance your online presence.</p>
                    <p> We take pride in our ability to provide personalized services and deliver digital solutions that empower businesses to achieve their objectives and succeed in the digital world." Join us on our mission to bring the best of the tech industry to the local level and achieve your digital goals</p>
                </div>
            </div>
        </div>
     );
}
 
export default WhoWeare;