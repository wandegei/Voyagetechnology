import React from 'react';
import { Container } from 'react-bootstrap';
import wedo from '../../images/wedo.png'

const WhatWeDo = () => {
    return ( 
        <div className='who-text' id='what-we-do-main'>
            <div className='container'>
                <div className='top-who percent-container'>
                    <div className='digital-el'>
                        <h4 className='about-section-title'>WHAT WE DO</h4>
                        <h2 className='middle-title'>Voyage offers a <span>comprehensive</span> range</h2>
                        <p>of digital services to help businesses establish and strengthen their online presence. From web development to mobile app development, UI/UX design to SEO, we have you covered.</p>
                    </div>
                    <img src={wedo} alt='mission' className='abt-img' />
                </div>
            </div>
        </div>
     );
}
 
export default WhatWeDo;