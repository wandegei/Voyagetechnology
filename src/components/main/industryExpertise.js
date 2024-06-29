import '../../css/main.css';
import img from '../../images/industries.png';
import basket from '../../images/basket.svg';
import educ from '../../images/educ.svg';
import organ from '../../images/organization.svg';
import financeImg from '../../images/finance.svg';
import healthImg from '../../images/health.svg';
import arrowDown from '../../images/industry-arrow.svg';
import arrowUp from '../../images/industry-arrow-up.svg';
import {useState} from 'react';

const IndustryExpertise = () => {
  const [education, setEducation] = useState (false);

  const [finance, setFinance] = useState (true);
  const [commerce, setCommerce] = useState (false);
  const [Organizations, setOrgnization] = useState (false);
  const [health, setHealth] = useState (false);

  const setItems = status => {
    if (status === 1) {
      setEducation (!education);
      setFinance (false);
      setCommerce (false);
      setOrgnization (false);
      setHealth (false);
      return;
    }

    if (status === 2) {
      setFinance (!finance);
      setCommerce (false);
      setEducation (false);
      setOrgnization (false);
      setHealth (false);
      return;
    }
    if (status === 3) {
      setCommerce (!commerce);
      setEducation (false);
      setOrgnization (false);
      setFinance (false);
      setHealth (false);
      return;
    }
    if (status === 4) {
      setOrgnization (!Organizations);
      setEducation (false);
      setFinance (false);
      setCommerce (false);
      setHealth (false);
      return;
    }

    if (status === 5) {
      setOrgnization (false);
      setEducation (false);
      setFinance (false);
      setCommerce (false);
      setHealth (!health);
      return;
    }
  };

  return (
    <div>
      <div className="expertise">

        <div className="expertise-content">
          <span style={{color: '#02A2AC'}}>
            INDUSTRY EXPERTISE{' '}
          </span>

          <div className="expertise-header">

            We highly

            <span style={{color: '#4DBBBD'}}>specialize</span>
            {' '}
            in sectors of our passion and expertise{' '}
          </div>

          <div className="industry-paragraph">
            We specialize in five key industries of health, finance, education, e-commerce and non-profit which have been carefully chosen based on our passion and expertise.
            {' '}
          </div>

          <div
            className={`${finance ? 'industry-cards' : 'industry-cards-unopened'}`}
            style={{marginTop: 10}}
            onClick={() => setItems (2)}
          >
            <div className="expert-icon-left">
              <img
                src={financeImg}
                className="icon-industry"
                alt="service icon"
              />
            </div>

            <div className="industry-cards-content">
              <h5>Finance</h5>
              {finance &&
                <p>
                  We offer cutting-edge technology solutions for financial institutions, including mobile money apps, digital banking platforms, and secure websites. We prioritize security and work closely with clients to ensure their systems meet industry standards.
                </p>}
            </div>
            {finance
              ? <div className="expertise-left-icon">
                  <img
                    src={arrowUp}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>
              : <div className="expertise-left-icon">
                  <img
                    src={arrowDown}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>}

          </div>

          <div
            className={`${health ? 'industry-cards' : 'industry-cards-unopened'}`}
            style={{marginTop: 10}}
            onClick={() => setItems (5)}
          >
            <div className="expert-icon-left">
              <img
                src={healthImg}
                className="icon-industry"
                alt="service icon"
              />
            </div>

            <div className="industry-cards-content">
              <h5>Health</h5>
              {health &&
                <p>
                  We provide innovative technology solutions for the health sector, including secure patient portals, telemedicine platforms, and management systems. We prioritize security and reliability to meet industry standards and improve patient outcomes
                </p>}
            </div>
            {health
              ? <div className="expertise-left-icon">
                  <img
                    src={arrowUp}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>
              : <div className="expertise-left-icon">
                  <img
                    src={arrowDown}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>}

          </div>

          <div
            className={`${education ? 'industry-cards' : 'industry-cards-unopened'}`}
            style={{marginTop: 10}}
            onClick={() => setItems (1)}
          >
            <div className="expert-icon-left">
              <img
                src={educ}
                className="icon-industry"
                alt="service icon"
             
              />
            </div>

            <div className="industry-cards-content">
              <h5>Education</h5>
              {education &&
                <p>
                  We leverage technology to improve the learning experience through innovative solutions like online learning platforms, virtual classrooms, educational games, and student progress tracking. Our custom solutions help schools adapt to the increasingly online and remote learning demand.
                  {' '}
                </p>}
            </div>

            {education
              ? <div className="expertise-left-icon">
                  <img
                    src={arrowUp}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>
              : <div className="expertise-left-icon">
                  <img
                    src={arrowDown}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>}

          </div>

          <div
            className={`${commerce ? 'industry-cards' : 'industry-cards-unopened'}`}
            style={{marginTop: 10}}
            onClick={() => setItems (3)}
          >
            <div className="expert-icon-left">
              <img src={basket} className="icon-industry" alt="service icon" />
            </div>

            <div className="industry-cards-content">
              <h5>E-commerce</h5>
              {commerce &&
                <p>
                  We help businesses improve customer experience through custom-built online stores and marketplaces. We streamline processes and design user-friendly websites to drive conversions. Our solutions prioritize user experience to increase sales and drive growth.
                  {' '}
                </p>}
            </div>
            {commerce
              ? <div className="expertise-left-icon">
                  <img
                    src={arrowUp}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>
              : <div className="expertise-left-icon">
                  <img
                    src={arrowDown}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>}

          </div>

          <div
            className={`${Organizations ? 'industry-cards' : 'industry-cards-unopened'}`}
            style={{marginTop: 10}}
            onClick={() => setItems (4)}
          >
            <div className="expert-icon-left">
              <img src={organ} className="icon-industry" alt="service icon" />
            </div>

            <div className="industry-cards-content">
              <h5>Non-Profit</h5>
              {Organizations &&
                <p>
                  We support non-profit organizations with technology solutions to manage their operations, fundraising, and reporting. Our solutions include websites, management systems, communication platforms, fundraising tools, and reporting solutions.
                  {' '}
                </p>}
            </div>
            {Organizations
              ? <div className="expertise-left-icon">
                  <img
                    src={arrowUp}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>
              : <div className="expertise-left-icon">
                  <img
                    src={arrowDown}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                  {/*
                
                  <i class="fas fa-arrow-circle-down" />
                  */}
                </div>}

          </div>

        </div>

        <div>
          <img
            src={img}
            className="img-expertise"
            alt="Teaching presentation"
          />
        </div>
      </div>

      <div className="expertise-mobile">

        <div className="img-expertise-container">
          <img
            src={img}
            className="img-expertise"
            alt="Teaching presentation"
          />
        </div>

        <div className="expertise-content">
          <span style={{color: '#02A2AC', alignSelf: 'center'}}>
            INDUSTRIES EXPERTISE
          </span>

          <div className="expertise-header">
            We highly

            <span style={{color: '#4DBBBD'}}> specialize </span>

            in sectors of our passion.
          </div>

          <div>
            Voyage specializes in four key industries of finance, education, e-commerce and non-profit which have been carefully chosen based on our passion and expertise.
          </div>

          <div
            className={`${education ? 'industry-cards' : 'industry-cards-unopened'}`}
            style={{marginTop: 10}}
            onClick={() => setItems (1)}
          >
            <div className="expert-icon-left">
              <img src={educ} className="icon-industry" alt="service icon" />
            </div>

            <div className="industry-cards-content">
              <h5>Education</h5>
              {education &&
                <p>
                  Technology is increasingly vital in education, and we are committed to helping educational institutions leverage its benefits. Education is a rapidly growing sector with a huge demand for innovative and effective digital solutions.
                </p>}
            </div>

            {education
              ? <div className="expertise-left-icon">
                  <img
                    src={arrowUp}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>
              : <div className="expertise-left-icon">
                  <i class="fas fa-arrow-circle-down" />
                </div>}

          </div>

          <div
            className={`${finance ? 'industry-cards' : 'industry-cards-unopened'}`}
            style={{marginTop: 10}}
            onClick={() => setItems (2)}
          >
            <div className="expert-icon-left">
              <img
                src={financeImg}
                className="icon-industry"
                alt="service icon"
              />
            </div>

            <div className="industry-cards-content">
              <h5>Finance</h5>
              {finance &&
                <p>
                  Technology is increasingly vital in education, and we are committed to helping educational institutions leverage its benefits. Education is a rapidly growing sector with a huge demand for innovative and effective digital solutions.
                </p>}
            </div>
            {finance
              ? <div className="expertise-left-icon">
                  <img
                    src={arrowUp}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>
              : <div className="expertise-left-icon">
                  <i class="fas fa-arrow-circle-down" />
                </div>}

          </div>

          <div
            className={`${commerce ? 'industry-cards' : 'industry-cards-unopened'}`}
            style={{marginTop: 10}}
            onClick={() => setItems (3)}
          >
            <div className="expert-icon-left">
              <img src={basket} className="icon-industry" alt="service icon" />
            </div>

            <div className="industry-cards-content">
              <h5>E-commerce</h5>
              {commerce &&
                <p>
                  Technology is increasingly vital in education, and we are committed to helping educational institutions leverage its benefits. Education is a rapidly growing sector with a huge demand for innovative and effective digital solutions.
                </p>}
            </div>
            {commerce
              ? <div className="expertise-left-icon">
                  <img
                    src={arrowUp}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>
              : <div className="expertise-left-icon">
                  <i class="fas fa-arrow-circle-down" />
                </div>}

          </div>
          <div
            className={`${Organizations ? 'industry-cards' : 'industry-cards-unopened'}`}
            style={{marginTop: 10}}
            onClick={() => setItems (4)}
          >
            <div className="expert-icon-left">
              <img src={organ} className="icon-industry" alt="service icon" />
            </div>

            <div className="industry-cards-content">
              <h5>Non-Profit Organizations</h5>
              {Organizations &&
                <p>
                  Technology is increasingly vital in education, and we are committed to helping educational institutions leverage its benefits. Education is a rapidly growing sector with a huge demand for innovative and effective digital solutions.
                </p>}
            </div>
            {Organizations
              ? <div className="expertise-left-icon">
                  <img
                    src={arrowUp}
                    alt="Voyage Industry expertise"
                    style={{width: 20}}
                  />
                </div>
              : <div className="expertise-left-icon">
                  <i class="fas fa-arrow-circle-down" />
                </div>}

          </div>

        </div>

      </div>
    </div>
  );
};

export default IndustryExpertise;
