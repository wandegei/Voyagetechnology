import '../../css/main.css';
import manage from '../../images/management.svg';
import plan from '../../images/planprocess.svg';
import design from '../../images/designprocess.svg';
import deployment from '../../images/deploymentprocess.svg';

const HowWeWork = () => {
  const redirect = () => {
    window.open ('/quote', '_blank');
    //window.location.href="/requestquote";
  };

  return (
    <div className="how-we-work">

      <div className="how-we-work-content" style={{marginTop: -270}}>
        <span style={{color: '#02A2AC'}} className="center-top-how">
          HOW WE WORK
        </span>
        <div className="how-we-work-header">

          Our
          <span style={{color: '#4DBBBD'}}> work </span>
          Process
        </div>

        <div className="how-we-work-paragraph">
          At VOYAGE, we value systematic and organized approaches to conducting business to eradicate red tape and deliver software projects promptly.
          {' '}
        </div>

        <div className="how-we-work-btn-main">
          <button className="how-we-work-btn" onClick={redirect}>
            <a href="/contact"  onclick="Calendly.initPopupWidget({url: ''});return false;" target="blank" className="anchor_default">
              Contact Us <i class="fas fa-arrow-circle-right" />
            </a>
          </button>
        </div>

      </div>

      <div className="how-work-card-container">

        <div className="card-how-we-work">
          <div className="card width-how-we-work">
            <div className="card-body">

              <h4>
                <img src={plan} className="icon-service" alt="service icon" />
              </h4>
              <div className="how-we-work-card-header">

                <h4>
                  Plan & <br /> Research{' '}
                </h4>
              </div>
              <p className="card-text card-text-how-we-work">
                We start with planning and researching based on the project requirements
              </p>
            </div>
          </div>
          <div className="card width-how-we-work">

            <div className="card-body">
              <h4>
                <img
                  src={deployment}
                  className="icon-service"
                  alt="service icon"
                />
              </h4>
              <div className="how-we-work-card-header">

                <h4>
                  Deployment
                </h4>
              </div>
              <p className="card-text card-text-how-we-work">
                We deploy the software online and make any integration based on the need
              </p>
            </div>

          </div>
        </div>

        <div className="card-how-we-work">
          <div className="card width-how-we-work">
            <div className="card-body">
              <h4>
                <img src={design} className="icon-service" alt="service icon" />
              </h4>
              <div className="how-we-work-card-header">

                <h4>
                  Design & <br /> Develop
                </h4>
              </div>
              <p className="card-text card-text-how-we-work">
                We create visual designs, write codes, test, and debug for smooth operation.
                {' '}
              </p>
            </div>
          </div>
          <div className="card width-how-we-work">
            <div className="card-body">
              <h4>
                <img src={manage} className="icon-service" alt="service icon" />
              </h4>
              <div className="how-we-work-card-header">
                <h4>
                  Management
                </h4>
              </div>
              <p className="card-text card-text-how-we-work">
                Maintenance and continuous improvement of the software through feedback
                {' '}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HowWeWork;
