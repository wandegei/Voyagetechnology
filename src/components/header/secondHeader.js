import React from 'react';
import Logo2 from "../../images/VoyageLogo.png"
import Logo from '../../images/VoyageLogo.png';
import MobileMenu from './mobileMenu';
// import ServiceDrop from './serviceDrop';
import Menu from "../../images/icons/menu.svg"
import { useNavigate } from 'react-router-dom';

import back from '../../images/back.png';

const SecondHeader = ({ scrollState, quotation }) => {

  const mobilemenuopen = () => {
    const close = document.getElementById('menu-overlay');
    close.style.display = 'block';
  }

  const navigate = useNavigate();

  const handleGetStarted = () => {

    window.open('/quote', '_blank');
    //navigate('/requestquote')
  }

  const handleGoBack = () => {
    navigate('/');
  }

  return (
    <>
      <nav className="navbar navbar-sticky navbar-expand-sm navbar-light">
        <div className="container">

          <div className="navbar-brand mobile" onClick={()=>navigate('/')}>
            <img src={Logo} alt="logo"  style={{width:75}}/>
          </div>

          <div className="navbar-brand desktop" onClick={()=>    navigate('/')}>
            <img src={Logo2} alt="logo" style={{width:180}} />
          </div>

          {/* <!-- List of links --> */}
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ms-auto me-4 pe-5" >
            <li className="nav-item">
                <a href='/' className="nav-link" target='_blank'>Home</a>
              </li>

            <li className="nav-item">
                <a href='/aboutus' className="nav-link" target='_blank'>About Us</a>
              </li>
              <li className="nav-item dropdown dropdown-hover position-static">
              {/* "dropdown-toggle" this is a class for the lower a tag and the propety data-bs-toggle="dropdown" */}
                <a className="nav-link " href="/service" > Services  </a>
                {/* <div className="dropdown-menu megamenu" role="menu">
                  <ServiceDrop />
                </div> */}
              </li>
              {
                /*
              
              <li className="nav-item">
                <a href='/#' className="nav-link" onClick={()=>    navigate('/')}>Products</a>
              </li>
              */}

              <li className="nav-item">
                <a href='#techstack' className="nav-link" onClick={()=>    navigate('/')}>Tech Stack</a>
              </li>
           
              {/* <li className="nav-item">
                <a href='/#' className="nav-link">Blog</a>
              </li> */}
              <li className="nav-item">
                <a href='/contact' className="nav-link">Contact Us</a>
              </li>
            </ul>
          </div>

          
          {/* {
            quotation?
               <button className="btn get-btn  me-4 text-white" onClick={handleGoBack}>
               <img src={back} alt='' className='back-img' /> Go Back
             </button>
             :      <button className="btn get-btn   text-white">
             <a href=""  onclick="Calendly.initPopupWidget({url: ''});return false;" target="blank" className="anchor_default" style={{color:'white'}}>
               Free Consultation
               </a>
             </button>
          } */}
    
    


          <button className="mobile-toggle-btn" onClick={mobilemenuopen} type="button">
            <img src={Menu} alt="menu" />
          </button>

          <div className='position-static'>
            <MobileMenu />
          </div>

        </div>

      </nav>

    </>
  );
};

export default SecondHeader;