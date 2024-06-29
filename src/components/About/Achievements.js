import React from 'react';
import { Carousel } from 'react-bootstrap';
import ui from '../../images/ui.png';
import tel from '../../images/tel.png';
import webd from '../../images/webd.png';
import construction from '../../images/construction.png';

const Achievements = () => {
    const renderCustomPrevIcon = () => (
      <span className="carousel-control-prev-icon custom-carousel-arrow" aria-hidden="true" />
    )
  
    const renderCustomNextIcon = () => (
      <span className="carousel-control-next-icon custom-carousel-arrow" aria-hidden="true" />
    )
    return ( 
        <div className='container achievements'>
            <div className='percent-container'>
            <div className='achieve-title'>
                <h2 className='middle-title a-title'>Our <span>Achievements</span></h2>
                <p className='a-text'>Welcome to our "Our Achievements" section! At VOYAGE, we have seen successes in creating innovative digital solutions for business while maintaining high standards of quality and reliability.</p>
            </div>
            <Carousel
            prevIcon={renderCustomPrevIcon()}
            nextIcon={renderCustomNextIcon()}
            indicators={true}
            >
                <Carousel.Item>
                    <div className='achieve-caption'>
                        <div>
                            <h3 className='ach-title'>UI/UX Designs</h3>
                            <ul className='achieve-ul'>
                                <li>User research/testing for 30+ web and mobile Apps</li>
                                <li>100+ custom interfaces designed</li>
                                <li>Custom designs created for 50+ clients</li>
                            </ul>
                        </div>
                        
                        <div className="achieve-img">  
                            <img
                            src={ui}
                            alt="First slide"
                            />
                            </div>
                        </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='achieve-caption'>
                    <div>
                        <h3 className='ach-title'>Mobile App Development</h3>
                        <ul className='achieve-ul'>
                            <li>50+ mobile applications designed and developed</li>
                            <li>Over 500,000 app downloads on app stores</li>
                            <li>Integrated third-party APIs for 20+ clients</li>
                        </ul>
                    </div>
                    
                    <div className="achieve-img">  
                    <img
                    src={tel}
                    alt="First slide"
                    />
                    </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='achieve-caption'>
                    <div>
                        <h3 className='ach-title'>Web Development </h3>
                        <ul className='achieve-ul'>
                            <li>100+ custom websites created across various industries </li>
                            <li>35% average increase in website traffic for clients  </li>
                            <li>Custom content management system developed </li>
                        </ul>
                    </div>
                    
                    <div className="achieve-img">  
                    <img
                    src={webd}
                    alt="First slide"
                    />
                    </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='achieve-caption'>
                    <div>
                        <h3 className='ach-title'>Web/App Maintenance Services </h3>
                        <ul className='achieve-ul'>
                            <li>Ongoing maintenance/support for 75+ web and applications </li>
                            <li>Technical issues resolved within 2 hours on average </li>
                            <li>Security updates and patches implemented for 100+ clients. </li>
                        </ul>
                    </div>
                    <div className="achieve-img">                        
                        <img                    
                        src={construction}
                        alt="First slide"
                        />
                    </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
     );
}
 
export default Achievements;