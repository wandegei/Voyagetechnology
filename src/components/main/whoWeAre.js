import '../../css/main.css';
import * as json from '../lottie/business.json';
import LottiePlay from './lottiePlayer';

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      <div className="img-container-who-we-are">
        <div className="lottieWidthWho">
          <LottiePlay json={json} />
        </div>
      </div>
      <div className="who-we-are-content">
        <span style={{color: '#02A2AC', alignSelf: 'center'}}>
          WHO ARE WE{' '}
        </span>

        <div className="who-header">
          We are global. We are attuned  to
          {' '}
          <span style={{color: '#4DBBBD'}}>local needs</span>
          {' '}
          <br />
          {' '}
          with pride
        </div>

        <div className="who-content">
          VOYAGE specializes in Web Development, Mobile App Development, UI/UX design, Web/App management, and SEO services. Our skilled global team collaborates to deliver user-friendly websites, mobile apps, and digital experiences that drive traffic and enhance online presence. With a unique approach that combines a global perspective and local focus, we provide world-class services that drive positive change for customers and communities.
          {' '}
        </div>

        <div className="who-btn-main">

          <button
            className="who-btn"
            onClick={() => window.open ('/aboutus', '_blank')}
          >
            <a href="/aboutus" target="blank" className="anchor_default">
              Learn more <i class="fas fa-arrow-circle-right" />
            </a>
          </button>

        </div>

      </div>
    </div>
  );
};

export default WhoWeAre;
