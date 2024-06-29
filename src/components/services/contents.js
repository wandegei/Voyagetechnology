import React from "react";
import Mobile from "../../images/service/mobile.png";
import WebApp from "../../images/service/webapp.png";
import UIX from "../../images/service/uix.png";
import Digitalmarketing from "../../images/service/digitalmarketing.png";
import Management from "../../images/service/management.png";
import Digitalcontent from "../../images/service/digitalcontent.png";
import { useNavigate } from 'react-router-dom';

const Contents = () =>{
    const navigate = useNavigate();

    const navigatetogetquote = () => {
      navigate('/quote')
    }
    return(
        <div className="container services">
            <div className="row mx-4" id="mobile-dev">
                <div className="col-md-6">
                    <h2>
                       <span>Mobile </span>App Development
                    </h2>
                    <div className="text">
                        <p>
                            VOYAGE, specializes in developing customized mobile applications that prioritize user experience, 
                            security, and performance for both iOS and Android platforms. Our team of experts creates intuitive 
                            and engaging apps that cater to your specific business needs. From ideation to deployment, we provide 
                            end-to-end solutions to bring your mobile app vision to life. Trust us to deliver high-quality, functional, 
                            and innovative apps that help your business stay ahead of the competition. Contact us today to learn 
                            more about our mobile app development services.
                        </p>
                    </div>
                    <div>
                        <button className="btn" onClick={navigatetogetquote} >Get Quote</button>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="image ">
                        <img src={Mobile} alt="" />
                    </div>
                </div>            
            </div>

            <div className="row mx-4" id="web-dev">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="image">
                        <img src={WebApp} alt="" />
                    </div>
                </div>

                <div className="col-md-6 ">
                    <h2>
                    
                       <span>Web </span>Development
                    </h2>
                    <div className="text">
                        <p>
                            VOYAGE provides web development services that create powerful, responsive, and visually stunning websites 
                            to enhance user experience and drive conversions for businesses. Our team of experts leverages the latest 
                            web development technologies to create websites that are scalable, user-friendly, and engaging. We work 
                            with you to turn your vision into reality and help you achieve your business goals through the power of 
                            digital technology. Get in touch with us to take your web presence to the next level. 
                        </p>
                    </div>
                    <div>
                        <button className="btn" onClick={navigatetogetquote} >Get Quote</button>
                    </div>
                </div>
                            
            </div>        
            <div className="row mx-4 mt-4" id="ui-ux">
                <div className="col-md-6">
                    <h2>
                       <span>UI/UX</span> Design
                    </h2>
                    <div className="text">
                        <p>
                            At VOYAGE, we specialize in creating visually stunning and user-friendly digital experiences through 
                            our UI/UX design services. Our team of experts works with clients to understand their brand vision 
                            and user needs, conducting thorough research and analysis to create intuitive interfaces that enhance 
                            user engagement and drive conversions. Whether designing for websites, mobile apps, or products, we 
                            prioritize user experience and aim to create engaging experiences that exceed expectations. Let us 
                            help bring your digital vision to life with our UI/UX design services.
                        </p>
                    </div>
                    <div>
                        <button className="btn" onClick={navigatetogetquote}>Get Quote</button>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="image">
                        <img src={UIX} alt="" />
                    </div>
                </div>            
            </div>

            <div className="row mx-4" id="web-app-management">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="image">
                        <img src={Management} alt="" />
                    </div>
                </div>

                <div className="col-md-6">
                    <h2>
                       Web/App <span> Management</span> 
                    </h2>
                    <div className="text">
                        <p>
                            At VOYAGE, we specialize in creating visually stunning and user-friendly digital experiences 
                            through our UI/UX design services. Our team of experts works with clients to understand their 
                            brand vision and user needs, conducting thorough research and analysis to create intuitive 
                            interfaces that enhance user engagement and drive conversions. Whether designing for websites, 
                            mobile apps, or products, we prioritize user experience and aim to create engaging experiences 
                            that exceed expectations. Let us help bring your digital vision to life with our UI/UX design services.
                        </p>
                    </div>
                    <div>
                        <button className="btn" onClick={navigatetogetquote} >Get Quote</button>
                    </div>
                </div>
                            
            </div>

            <div className="row mx-4" id="web-app-content">
                <div className="col-md-6">
                    <h2>
                     Digital <span>Content</span> Creation                
                    </h2>
                    <div className="text">
                        <p>
                            At VOYAGE, we specialize in crafting captivating digital content for your business. 
                            Our services range from written content such as blogs, descriptions, and posts to visually 
                            stunning graphics and videos. Our content is specifically designed to enhance user engagement, 
                            increase website traffic, and drive conversions for your business. Trust us to deliver 
                            high-quality, powerful content that will take your business to the next level.                        </p>
                    </div>
                    <div>
                    <button className="btn" onClick={navigatetogetquote}>Get Quote</button>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="image ">
                        <img className="digitalcontent" src={Digitalcontent} alt="" />
                    </div>
                </div>            
            </div> 

            <div className="row mx-4" id="digital-marketing">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="image">
                        <img src={Digitalmarketing} alt="" />
                    </div>
                </div>

                <div className="col-md-6">
                    <h2>
                    Digital Marketing <span>Solutions</span>  
                    </h2>
                    <div className="text">
                        <p>
                            VOYAGE offers top-notch digital marketing solutions to help businesses enhance their digital presence 
                            and attract more organic traffic. Our global team of SEO experts has a proven track record of success 
                            in improving business rankings on search engines and driving more conversions. We provide comprehensive 
                            SEO services, including keyword research, on-page optimization, link building, social media marketing, 
                            content marketing, and analytics reporting. Our goal is to help you achieve the growth you seek by 
                            leveraging the power of digital marketing. Contact us today to learn more about how we can help your 
                            business succeed online.
                        </p>
                    </div>
                    <div>
                        <button className="btn" onClick={navigatetogetquote}>Get Quote</button>
                    </div>
                </div>
                            
            </div>       
        </div>
    );
}

export default Contents;