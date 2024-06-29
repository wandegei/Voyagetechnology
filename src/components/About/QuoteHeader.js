import React from 'react';
import Logo2 from "../../images/logo2.svg"
import Log from '../../images/VoyageLogo.png';
import Menu from "../../images/icons/menu.svg"
import { useNavigate } from 'react-router-dom';
import MobileMenu from '../header/mobileMenu';
import ServiceDrop from '../header/serviceDrop';
import back from '../../images/back.png';

const QuoteHeader = ({ scrollState }) => {

  const mobilemenuopen = () => {
    const close = document.getElementById('menu-overlay');
    close.style.display = 'block';
  }

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/quote')
  }

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <>
      <nav className="navbar navbar-sticky navbar-expand-sm navbar-light">
        <div className="container">

          <div className="navbar-brand mobile" onClick={()=>window.location.href="/"}>
            <img src={Log} alt="logo" style={{width:'110px'}}/>
          </div>

          <div className="navbar-brand desktop" onClick={()=>window.location.href="/"}>
            <img src={Log} alt="logo" style={{width:'110px'}} />
          </div>

          {/* <!-- List of links --> */}
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ms-auto me-4 pe-5" >
              <li className="nav-item dropdown dropdown-hover position-static">
                <a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown"> Service  </a>
                <div className="dropdown-menu megamenu" role="menu">
                  <ServiceDrop />
                </div>
              </li>
              <li className="nav-item">
                <a href='/#' className="nav-link">Products</a>
              </li>
              <li className="nav-item">
                <a href='/#' className="nav-link">Tech Stack</a>
              </li>
              <li className="nav-item">
                <a href='/aboutus' className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a href='/blog' className="nav-link">Blog</a>
              </li>
            </ul>
          </div>
          <button className="btn get-btn  me-4 text-white" onClick={handleGoBack}>
            <img src={back} alt='' className='back-img' /> Go Back
          </button>


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

export default QuoteHeader;
