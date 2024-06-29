import '../../css/main.css';
import img from '../../images/your-ideas.svg';
import * as json from '../lottie/web.json';
import LottiePlay from './lottiePlayer';

const YourIdeas = () => {
  const redirect = () => {
    window.open ('/quote', '_blank');
    // window.location.href = '/requestquote';
  };

  return (
    <div className="your-ideas">

      <div className="img-container-ideas">

        <div className="lottieWidthIdeas">
          <LottiePlay json={json} />
        </div>

      </div>

      <div className="your-ideas-content">

        <div className="your-ideas-header">
          Tell us your ideas, <br /> and let us bring them to life
        </div>

        <div className="ideas-txt-first">
          <div className="idea-txt-paragraph">
            VOYAGE is here to turn your vision into reality Contact us today for exceptional services. Whether it’s
          </div>
          <div className="ideas-txt" style={{marginTop: 30}}>
            {' '}
            <span style={{color: 'white'}}>
              <img src={img} alt="Your ideas" />
            </span>
            {' '}
            New software development
          </div>
          <div className="ideas-txt">
            {' '}
            <span style={{color: 'white'}}>
              <img src={img} alt="Your ideas" />
            </span>
            {' '}
            Existing software audit or rebuilding
          </div>
          <div className="ideas-txt">
            {' '}
            <span style={{color: 'white'}}>
              <img src={img} alt="Your ideas" />
            </span>
            {' '}
            Fully managed web/app maintenance
          </div>

        </div>

        <div className="your-ideas-btn-main">
          <button className="your-ideas-btn" onClick={redirect}>
            <a
              href="/contact"
              onclick="Calendly.initPopupWidget({url: ''});return false;"
              target="blank"
              className="anchor_default"
              style={{color: 'white'}}
            >
              Contact Us  <i class="fas fa-arrow-circle-right" />
            </a>
          </button>
        </div>

      </div>

    </div>
  );
};

export default YourIdeas;
