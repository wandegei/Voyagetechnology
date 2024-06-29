import React from 'react';
import { Container } from 'react-bootstrap';
import missionImage from '../../images/mission-image.png'

const OurMission = () => {
    return ( 
        <div className='who-text'>
            <div className='container'>
                <div className='top-who percent-container'>
                    <div className='digital-el'>
                        <h4 className='about-section-title'>OUR MISSION</h4>
                        <h2 className='middle-title'>To constantly <span>deliver</span></h2>
                        <p>exceptional web and app development services that exceed client expectations and drive business growth. We are dedicated to building strong relationships with our clients and providing personalized solutions that meet their unique needs. </p>
                    </div>
                    <div>
                        <img src={missionImage} alt='mission' className='abt-img' />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OurMission;