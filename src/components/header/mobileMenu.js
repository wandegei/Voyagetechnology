import React from 'react';
import MenuLogo from '../../images/logo2.svg';
import Close from '../../images/icons/closex.svg';
import Twitter from '../../images/icons/footer/twiter.svg';
import Linkedin from '../../images/icons/footer/link.svg';
import Instagram from '../../images/icons/footer/insta.svg';
import Fb from '../../images/icons/footer/fb.svg';
import Vector from '../../images/icons/Vector.svg';

const MobileMenu = () => {
  const mobilemenuclose = () => {
    const close = document.getElementById ('menu-overlay');
    close.style.display = 'none';
  };

  const redirectSocial = status => {
    if (status == 1) {
      window.open ('', '_blank').focus ();
      return;
    }

    if (status == 2) {
      window.open ('', '_blank').focus ();
      return;
    }
    if (status == 3) {
      window
        .open ('', '_blank')
        .focus ();
      return;
    }
    if (status == 4) {
      window.open ('', '_blank').focus ();
      return;
    }
    if (status == 5) {
      window.location.href = 'info@voyagetechi.com';

      return;
    }

    if (status == 6) {
      window.location.href = '';
    }
  };

  return (
    <div className="menu-overlay" id="menu-overlay">
      <div className="container">
        <div className="d-flex">
          <div>
            <img src={MenuLogo} alt="mobilelogo" />
          </div>
          <button
            className="mobile-toggle-btn ms-auto"
            onClick={mobilemenuclose}
          >
            <img src={Close} alt="mobilelogo" />
          </button>
        </div>

        <div>
          <div className="nav  flex-column py-3">

            <a
              href="/aboutus"
              className="nav-link collapsed text-truncate font-weight-bold text-dark"
            
            >
              About Us
              {' '}
              <span className="float-end">
                <img src={Vector} alt="vector" />
              </span>
            </a>
            <a
              href="/service"
              className="nav-link collapsed text-truncate font-weight-bold text-dark"
            
            >
              Services
              {' '}
              <span className="float-end">
                <img src={Vector} alt="vector" />
              </span>
            </a>
            <div className="collapse ps-2" id="menu2" data-bs-parent="#sidebar">
              <a
                href="/#"
                className="nav-link text-dark"
                data-bs-parent="#menu2sub1"
                onClick={mobilemenuclose}
              >
                Mobile App Development
              </a>
              <a
                href="/#"
                className="nav-link text-dark"
                data-bs-parent="#menu2sub1"
                onClick={mobilemenuclose}
              >
                Web Application Development
              </a>
              <a
                href="/#"
                className="nav-link text-dark"
                data-bs-parent="#menu2sub1"
                onClick={mobilemenuclose}
              >
                Web Application Development
              </a>
              <a
                href="/#"
                className="nav-link text-dark"
                data-bs-parent="#menu2sub1"
                onClick={mobilemenuclose}
              >
                Web & Mobile App Management
              </a>
            </div>

            <a
              href="#techstack"
              className="nav-link text-truncate font-weight-bold text-dark"
              onClick={mobilemenuclose}
            >
              Tech Stack
              {' '}
              <span className="float-end">
                <img src={Vector} alt="vector" />
              </span>
            </a>

            <a
              href="/#"
              className="nav-link text-truncate font-weight-bold text-dark"
              onClick={mobilemenuclose}
            >
              Blog
              {' '}
              <span className="float-end">
                <img src={Vector} alt="vector" />
              </span>
            </a>

            <a
              href="/contact"
              className="nav-link text-truncate font-weight-bold text-dark"
              onClick={mobilemenuclose}
            >
              Contact Us
              {' '}
              <span className="float-end">
                <img src={Vector} alt="vector" />
              </span>
            </a>

          </div>
        </div>

        <div className="media-icons">
          <div>
            <a href="/#" className="">
              <img src={Fb} alt="facebook" onClick={() => redirectSocial (2)} />
            </a>
            <a href="/#" className="">
              <img
                src={Twitter}
                alt="tweeter"
                onClick={() => redirectSocial (1)}
              />
            </a>
            <a href="/#" className="">
              <img
                src={Instagram}
                alt="instagram"
                onClick={() => redirectSocial (4)}
              />
            </a>
            <a href="/#" className="">
              <img
                src={Linkedin}
                alt="linkedin"
                onClick={() => redirectSocial (3)}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MobileMenu;
