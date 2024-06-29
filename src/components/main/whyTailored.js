import '../../css/main.css';
import img from '../../images/tailored.svg';

const WhyTailored = () => {
  const redirect = () => {
    window.open ('', '_blank');
    // window.location.href="/requestquote";
  };
  return (
    <div className="tailored">
      <div className="tailored-img-container">
        <img src={img} className="img-tailored" alt="Teaching presentation" />
      </div>
      <div className="tailored-content">
        <span style={{color: '#02A2AC'}} className="center-tailored">
          WHY TAILORED SERVICES{' '}
        </span>

        <div className="tailored-header">

          We don't believe in a

          <span style={{color: '#4DBBBD'}}> one-size-fits-all</span>
          {' '}
          approach
        </div>

        <div className="tailored-paragraph">
          At VOYAGE, we prioritize providing tailored web and app development services that meet the unique needs of our clients. We understand that every business is different and requires a customized solution to succeed in its respective industries. Our team of experts is dedicated to crafting personalized solutions that align with the client's goals. Our clients receive the most effective and efficient solutions that help them achieve their desired outcomes. Trust VOYAGE to provide you with a bespoke service that sets you apart from your competitors.
          {' '}
        </div>

        <div className="tailored-btn-main">
          <button className="tailored-btn" onClick={redirect}>
            <a
              href="/contact"
              onclick="Calendly.initPopupWidget({url: ''});return false;"
              target="blank"
              className="anchor_default"
            >
              Contact Us <i class="fas fa-arrow-circle-right" />
            </a>
          </button>
        </div>

      </div>
    </div>
  );
};

export default WhyTailored;
