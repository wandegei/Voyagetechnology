import React, { useEffect, useState } from "react";
import "../../css/footer.css";
import Logob from "../../images/footervoyage.png";
import top from "../../images/top-arrow.svg";
import Twitter from "../../images/icons/footer/twiter.svg";
import Linkedin from "../../images/icons/footer/link.svg";
//import Instagram from "../../images/icons/footer/insta.svg";
import Fb from "../../images/icons/footer/fb.svg";
import FooterTop from "./footertop";
import Line from "../../images/icons/footer/Line.svg";
import Vector from "../../images/icons/footer/Vector.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const [company, setCompany] = useState(true);
    const [service, setService] = useState(true);
    const [media, setMedia] = useState(true);

    const togglecompany = () => {
        console.log(company)

        setCompany(!company);
    }
    const toggleservice = () => {
        setService(!service);
    }
    const togglemedia = () => {
        setMedia(!media);
    }
    const navigate = useNavigate();

    const handleAboutUs = (status) => {


        localStorage.setItem('status', status);

    

        window.open('/aboutus', '_blank');
        //navigate('/aboutus')

        return;
  
    }


    const handleServiceRedirect = (status) => {


        localStorage.setItem('service', status);

        window.open('/service', '_blank');
        //navigate('/aboutus')

        return;
  
    }


    const redirectSocial = status => {
        if (status === 1) {
          window.open ('https://twitter.com/voyagetechi', '_blank').focus ();
          return;
        }
    
        if (status === 2) {
          window.open ('https://facebook.com/voyagetechi', '_blank').focus ();
          return;
        }
        if (status === 3) {
          window
            .open ('https://www.linkedin.com/company/voyagetechi', '_blank')
            .focus ();
          return;
        }
        if (status === 4) {
          window.open ('https://www.instagram.com/voyagetechi', '_blank').focus ();
          return;
        }
        if(status==5){
    
          window.location.href="mailto: info@voyagetechi.com"   

    
          return
        }
      };

    
    const handleTerms = () => {

        window.open('/terms', '_blank');


        //navigate('/terms')
    }

    
    const handlePrivacyPolicy = () => {

        localStorage.setItem('privacy', true);
        window.open('/terms', '_blank');
        //('/terms#policy')
    }

    const handleContact = () => {
        navigate('/contact')
    }

   // let oldScrollY = 0;

  const controlDirection = () => {
    if (window.pageYOffset === 0) {
     // setDirection('down');
    // alert("'Yes")
    const elem = document.getElementById('floating-div-container-footer-id');
    elem.style.display = 'none';
 
    } 
    else{
        const elem = document.getElementById('floating-div-container-footer-id');
        elem.style.display = 'block';
    }
    //oldScrollY = window.scrollY;
  };

  
  useEffect(() => {
    window.addEventListener('scroll', controlDirection);
    return () => {
      window.removeEventListener('scroll', controlDirection);
    };
  },);

    return (
        <>
              <div className='floating-div-container-footer' id="floating-div-container-footer-id">
        <div className='floating-div-child-footer'>
            
                
            
          <div className="back-wording-footer">Back to top</div>
            
          <div style={{marginLeft:5}} onClick={()=>window.location.href='#top-site-menu'}><img src={top} style={{width:45}} alt="Top scroller for Voyage Web site"/></div>
        </div>
      </div>

            <FooterTop />
            <footer className="footer" id="footer-top-scroll">
                <div className=" container">
                    <div className="footer-card mx-1">
                        <div className="row mb-4">
                            <div className="sect sect1">
                                <div className="footer-text pull-left pe-3">

                                    <div className="footer-logo">
                                        <img src={Logob} alt="" />
                                    </div>

                                    <p className="card-text">Voyage is a tech enterprise that provides world-class services in UI/UX design, web/app development, and management. We utilize global teams and latest technologies to deliver efficient solutions to local problems.</p>
                                </div>
                            </div>
                            <div className=" sect sect2">
                                <div  className="heading"  onClick={()=>togglecompany()}>About Us <span   onClick={()=>togglecompany()} className="angleright"><img  onClick={()=>togglecompany()} src={Vector} alt="angle right" /></span></div>

                                <ul className={`box ${company ? 'card-text mobile-toggle ' : 'card-text'}`} >
                                    <li  onClick={()=>handleAboutUs(1)} className='about-route'> <a href="/aboutus" className="anchor_tag">Who Are We </a></li>
                                    <li onClick={()=>handleAboutUs(2)} className='about-route'> <a href="/aboutus" className="anchor_tag">What We Do </a></li>
                                    <li onClick={()=>handleAboutUs(3)} className='about-route' > <a href="/aboutus" className="anchor_tag">Our Core Values</a></li>    
                                    <li onClick={()=>handleAboutUs(4)} className='about-route' > <a href="/aboutus" className="anchor_tag">Our Achievements</a></li>    
                                </ul>
                            </div>
                            <div className=" sect sect3">
                                <div onClick={toggleservice} className="heading" style={{marginTop:-8}}>Our Services <span className="angleright"><img src={Vector} alt="angle right" /></span></div>
                                <ul className={`box ${service ? 'card-text mobile-toggle ' : 'card-text'}`}>
                                    <li onClick={()=>handleServiceRedirect(1)}><a href="/service" className="anchor_tag"> UI/UX Design</a></li>
                                    <li onClick={()=>handleServiceRedirect(2)} ><a href="/service" className="anchor_tag">Web Development</a></li>
                                    <li onClick={()=>handleServiceRedirect(3)}><a href="/service" className="anchor_tag">Mobile App Development</a></li>
                                    <li onClick={()=>handleServiceRedirect(4)}><a href="/service" className="anchor_tag">Web/Mobile Management</a></li>
                                    <li onClick={()=>handleServiceRedirect(5)}><a href="/service" className="anchor_tag">Digital Content Creation</a></li>
                                    <li onClick={()=>handleServiceRedirect(6)}> <a href="/service" className="anchor_tag">Digital Marketing Solutions</a></li>
                                </ul>
                            </div>
                            
                            <div className="sect sect4">
                                <div onClick={togglemedia} className="heading">Social Media<span className="angleright"><img src={Vector} alt="angle right" /></span></div>
                                <ul className={`box ${media ? 'card-text mobile-toggle ' : 'card-text'}`}>
                                    <li onClick={()=>redirectSocial(1)}><div className="icon" ><img src={Twitter} alt="" /></div><a href="https://twitter.com/voyagetechi" className="anchor_tag"> Twiter</a></li>
                                    <li onClick={()=>redirectSocial(2)}><div className="icon" ><img src={Fb} alt="" /></div><a href="https://facebook.com/voyagetechi" className="anchor_tag"> Facebook </a></li>
                                    <li onClick={()=>redirectSocial(3)}><div className="icon" ><img src={Linkedin} alt="" /></div><a href="https://www.linkedin.com/company/voyagetechi" className="anchor_tag"> LinkedIn </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="divider mb-4"> </div>
                        <div className="lower">
                            <div className="items">
                                <div className="text-light mr-4 d-flex policy">
                                    <div className="footer-pointer" onClick={handleTerms}><a href="/terms" className="anchor_tag" target="blank">Terms</a></div><img src={Line} alt="Line" className='footer-policy-lines'/>
                                    <div className="footer-pointer" onClick={handlePrivacyPolicy}><a href="/terms" className="anchor_tag" target="blank">Privacy</a></div><img src={Line} className='footer-policy-lines' alt="Line" />
                                    {
                                        /*
                                    
                                    <div className="footer-pointer">Careers</div><img src={Line} alt="Line"  className='footer-policy-lines'/>
                                    */}
                                    <div className="footer-pointer" onClick={handleContact}>Help</div><img src={Line} alt="Line" className='footer-policy-lines' />
                                    <div className="footer-pointer" onClick={handleContact}><a href="/contact" className="anchor_tag" target="blank">Contact Us</a></div>
                                </div>
                            </div>
                            <div className="copyright">
                                <div className="">
                                    <p className="text-light">Copyright&#169;2024 Voyage. All right reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;