import React, {useEffect} from 'react';
import Message from '../../images/icons/message.svg';
import Fb from '../../images/icons/fb.svg';
import Instagram from '../../images/icons/instagram.svg';
import Linkedin from '../../images/icons/linkin.svg';
import Skype from '../../images/whatsapp.png';
import Twiter from '../../images/icons/twiter.svg';
// import Message from "../../images/icons/"

const FirstHeader = ({scrollState}) => {
  const redirectSocial = status => {
    if (status == 1) {
      window.open ('https://twitter.com/voyagetechi', '_blank').focus ();
      return;
    }

    if (status == 2) {
      window.open ('https://facebook.com/voyagetechi', '_blank').focus ();
      return;
    }
    if (status == 3) {
      window
        .open ('https://www.linkedin.com/company/voyagetechi', '_blank')
        .focus ();
      return;
    }
    if (status == 4) {
      window.open ('https://www.instagram.com/voyagetechi', '_blank').focus ();
      return;
    }
    if (status == 5) {
      window.location.href = 'mailto: info@voyagetechi.com';

      return;
    }

    if (status == 6) {
      window.location.href = '';
    }
  };
  useEffect (
    () => {
      if (scrollState === 'up') {
        const element = document.getElementById ('direction');
        // element.classList.add('scroll-up');
        element.style.display = 'none';
      } else {
        const element = document.getElementById ('direction');
        element.style.display = 'block';
      }
    },
    [scrollState]
  );

  return (
    <div className="container fist-header" id="direction">
      <div className="bread-crumb">
        <div className="media d-flex ps-2" onClick={() => redirectSocial ()}>
          <div className="media-icon">
            <img src={Skype} alt="skype" />
          </div>
          <div className="elem">
            <div className="handle-header">+256 778 304699 </div>
            <div>WhatsApp</div>
          </div>
        </div>
        <div className="media d-flex ps-3">
          <div className="media-icon">
            <img src={Message} alt="message" />
          </div>
          <div className="elem" onClick={() => redirectSocial (5)}>
            <div className="handle-header">info@voyagetechi.com </div>
            <div>Email Us</div>
          </div>
        </div>
        <div className="ms-auto my-auto pe-4">
          <div className="d-inline text-light pe-2">Follow</div>
          <div className="d-inline social-icons">
            <span onClick={() => redirectSocial (1)}>
              <img src={Twiter} alt="twetter" />
            </span>
            <span onClick={() => redirectSocial (2)}>
              <img src={Fb} alt="facebook" />
            </span>
            <span onClick={() => redirectSocial (3)}>
              <img src={Linkedin} alt="linkedin" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
