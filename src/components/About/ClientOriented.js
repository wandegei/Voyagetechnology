import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import shakinghands from '../../images/shakinghands.png'

const ClientOriented = () => {
    return ( 
            <div className='container'>
                <div className='percent-container'>
                    <div className='client-oriented'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Client-oriented</Accordion.Header>
                                <Accordion.Body>
                                We place a strong emphasis on exceeding client expectations and building strong relationships with clients through personalized solutions.                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Reliability</Accordion.Header>
                                <Accordion.Body>
                                We strive to deliver dependable digital solutions that businesses and individuals can trust.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Usability</Accordion.Header>
                                <Accordion.Body>
                                We prioritize creating practical user-friendly digital solutions that enhance the user experience for businesses.                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Innovation</Accordion.Header>
                                <Accordion.Body>
                                We value creativity and being at the forefront of advancements in the web and app development industry.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Serve Excellency</Accordion.Header>
                                <Accordion.Body>
                                We are dedicated to constantly delivering high-quality web and app development services to meet client needs and exceed expectations.                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Global Perspective</Accordion.Header>
                                <Accordion.Body>
                                We consider the diverse needs and experiences of users globally to create inclusive and culturally sensitive digital solutions.                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Tailored solutions</Accordion.Header>
                                <Accordion.Body>
                                We value tailoring our services to meet the unique needs of each client.                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <img src={shakinghands} alt='shaking hands' className='shakingHands' />
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default ClientOriented;