import React from 'react';
import { Container } from 'react-bootstrap';
import visionImg from '../../images/vision-img.png'

const OurVision = () => {
    return ( 
        <div className='who-text' id='our-vission-main' >
            <div className='container' style={{marginTop:'50px'}}>
                <div className='top-who vision'>
                    <div className='digital-el'>
                        <h4 className='about-section-title'>OUR VISION</h4>
                        <h2 className='middle-title'>To shape the <span>future</span> of</h2>
                        <p>the web and app development industry by providing innovative, user-friendly, and reliable digital solutions that empower businesses and individuals to reach their fullest online potential.</p>
                    </div>
                    <img src={visionImg} alt='vision' className='abt-img' />
                </div>
            </div>  
        </div>
     );
}
 
export default OurVision;