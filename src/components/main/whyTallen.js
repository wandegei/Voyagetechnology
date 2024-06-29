import {useState} from 'react';
import '../../css/main.css';

import plan from '../../images/management.svg';

import pricing from '../../images/pricing.svg';
import team from '../../images/globalTeam.svg';

import solutions from '../../images/customizedslutions.svg';
import sector from '../../images/Specificexp.svg';
import global from '../../images/global.svg';

const WhyTallen = () => {
  const [first, setFirst] = useState (false);

  const [second, setsecond] = useState (false);
  const [third, setthird] = useState (false);
  const [forth, setForth] = useState (false);
  const [fifth, setFifth] = useState (false);
  const [sixth, setSixth] = useState (false);

  const setItems = status => {
    if (status === 1) {
      setFirst (!first);
      setsecond (false);
      setthird (false);
      setForth (false);
      setFifth (false);
      setSixth (false);
      return;
    }

    if (status === 2) {
      setsecond (!second);
      setFirst (false);
      setthird (false);
      setForth (false);
      setFifth (false);
      setSixth (false);
      return;
    }
    if (status === 3) {
      setthird (!third);
      setFirst (false);
      setsecond (false);
      setForth (false);
      setFifth (false);
      setSixth (false);
      return;
    }
    if (status === 4) {
      setForth (!forth);
      setFirst (false);
      setsecond (false);
      setthird (false);
      setFifth (false);
      setSixth (false);
      return;
    }
    if (status === 5) {
      setForth (false);
      setFirst (false);
      setsecond (false);
      setthird (false);
      setFifth (!fifth);
      setSixth (false);
      return;
    }

    if (status === 6) {
      setForth (false);
      setFirst (false);
      setsecond (false);
      setthird (false);
      setFifth (false);
      setSixth (!sixth);
      return;
    }
  };

  const removeItems = status => {
    if (status === 1) {
      // alert("Yes")
      setFirst (false);
      return;
    }

    if (status === 2) {
      setsecond (false);
      return;
    }
    if (status === 3) {
      setthird (false);
      return;
    }
    if (status === 4) {
      setForth (false);
      return;
    }
    if (status === 5) {
      setFifth (false);

      return;
    }

    if (status === 6) {
      setSixth (false);
      return;
    }
  };

  return (
    <div className="why-tallen-container" id='why-tallen'>

      <div className="why-tallen-upper">

        <span style={{color: '#02A2AC'}}>WHAT MAKES US DIFFERENT</span>

        <div className="why-tallen-header">

          <div className="">Why you </div> should

          <span style={{color: '#4DBBBD'}}> choose </span>
          VOYAGE
        </div>
        <p style={{textAlign: 'justify'}} className="why-content">
          Choose us because we approach every project with a client-centric focus. Our commitment to delivering cutting-edge technology solutions, combined with our investment in our clients' success, sets us apart from the hundreds of other companies in our field.
        </p>
      </div>

      <div className="card-container">
        <div
          className={`${first ? 'card-why-tallen-hover' : 'card-why-tallen'}`}
          onMouseEnter={() => setItems (1)}
          onMouseLeave={() => removeItems (1)}
        >
          <div className="icon-why-tallen">
            <img src={sector} className="icon-industry svg-color-change" alt="service icon" />
          </div>
          <div>
            <h6 style={{fontWeight: 'bold'}}>Sector Specific Expertise</h6>
            <p>
            We have deep knowledge and experience in our focus industries, delivering tailored solutions for each sector.
            </p>

          </div>
        </div>
        <div
          className={`${second ? 'card-why-tallen-hover' : 'card-why-tallen'}`}
          onMouseEnter={() => setItems (2)}
          onMouseLeave={() => removeItems (2)}
        >
          <div className="icon-why-tallen">
            <img src={team} className="icon-industry svg-color-change" alt="service icon" />
          </div>
          <div>
            <h6 style={{fontWeight: 'bold'}}>Experienced Global Team</h6>
            <p>
              Our talented professionals from around the world bring diverse knowledge, experience, and skills to your project.
            </p>
          </div>
        </div>
      </div>
      <div className="card-container" style={{marginTop: 10}}>
        <div
          className={`${third ? 'card-why-tallen-hover' : 'card-why-tallen'}`}
          onMouseEnter={() => setItems (3)}
          onMouseLeave={() => removeItems (3)}
        >
          <div className="icon-why-tallen">
            <img src={solutions} className="icon-industry svg-color-change" alt="service icon" />
          </div>
          <div>
            <h6 style={{fontWeight: 'bold'}}>Customized Solutions</h6>
            <p>
              Our approach is understanding your unique needs and designing custom software solutions to fit those requirements.
            </p>

          </div>
        </div>
        <div
          className={`${forth ? 'card-why-tallen-hover' : 'card-why-tallen'}`}
          onMouseEnter={() => setItems (4)}
          onMouseLeave={() => removeItems (4)}
        >
          <div className="icon-why-tallen">
            <img src={global} className="icon-industry svg-color-change" alt="service icon" />
          </div>
          <div>
            <h6 style={{fontWeight: 'bold'}}>Customer Satisfaction</h6>
            <p>
              We prioritize your success and strive for 100% "5-Stars" satisfaction in every project.
            </p>

          </div>
        </div>
      </div>

      <div className="card-container" style={{marginTop: 10}}>
        <div
          className={`${fifth ? 'card-why-tallen-hover' : 'card-why-tallen'}`}
          onMouseEnter={() => setItems (5)}
          onMouseLeave={() => removeItems (5)}
        >
          <div className="icon-why-tallen">
            <img src={pricing} className="icon-industry svg-color-change" alt="service icon" />
          </div>
          <div>
            <h6 style={{fontWeight: 'bold'}}>Affordable Pricing</h6>
            <p>
              We harbor NO hidden costs. We are flexible and transparent for businesses of all sizes.
            </p>

          </div>
        </div>
        <div
          className={`${sixth ? 'card-why-tallen-hover' : 'card-why-tallen'}`}
          onMouseEnter={() => setItems (6)}
          onMouseLeave={() => removeItems (6)}
        >
          <div className="icon-why-tallen">
            <img src={plan} className="icon-industry" alt="service icon" />
          </div>
          <div>
            <h6 style={{fontWeight: 'bold'}}>Fast Response</h6>
            <p>
              We value your time and prioritize quick and efficient communication, ensuring a prompt response to your inquiries.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTallen;
