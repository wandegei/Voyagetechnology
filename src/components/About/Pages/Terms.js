import React, {useEffect, useState} from 'react';
import SecondHeader from '../../header/secondHeader';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';

const Terms = () => {
  const [isTerm, setIsTerm] = useState (true);
  const [isPrivacy, setIPrivacy] = useState (false);

  const handleTermsClick = () => {
    setIsTerm (current => !current);
    setIPrivacy (current => !current);
    document.getElementById ('terms').style.color = '#4DBBBD';
    document.getElementById ('privacy').style.color = '#000000';
  };

  const handlePrivacyClick = () => {
    setIsTerm (current => !current);
    setIPrivacy (current => !current);
    document.getElementById ('terms').style.color = '#000000';
    document.getElementById ('privacy').style.color = '#4DBBBD';
  };

  useEffect (() => {
    const terms = localStorage.getItem ('privacy');

    if (terms) {
      setIsTerm (current => !current);
      setIPrivacy (current => !current);
      document.getElementById ('terms').style.color = '#000000';
      document.getElementById ('privacy').style.color = '#F7901F';
      localStorage.removeItem('privacy');
    }
  }, []);
  return (
    <div className="terms-container">
      <SecondHeader />
      <div className="top-banner">
        <h1
          className="terms-title"
          style={{textAlign: 'center', color: 'inherit'}}
        >
          Voyage Legal
        </h1>
        <p>
          Welcome to our website! To ensure your privacy and security, we have legal documents such as our Terms of Service and Privacy Policy. By using our website, you agree to these documents which explain our policies and practices.
        </p>
        <p style={{marginTop: '1.5rem', fontWeight: '500', cursor: 'pointer'}}>
          <span onClick={handleTermsClick} id="terms">Terms</span>
          {' '}
          &emsp; | &emsp;
          {' '}
          <span onClick={handlePrivacyClick} id="privacy">Privacy</span>
          {' '}
        </p>
      </div>
      {isTerm && <TermsOfUse />}
      {isPrivacy && <PrivacyPolicy id="policy" />}
    </div>
  );
};

export default Terms;
