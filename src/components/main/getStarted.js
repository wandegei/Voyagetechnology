import {useNavigate} from 'react-router-dom';
import '../../css/main.css';
import img from '../../images/getStarted.svg';

const GetStarted = () => {
  //const navigate = useNavigate ();

  const handleGetStarted = () => {

    window.open('/quote', '_blank');
   // navigate ('/requestquote');
  };
  

  return (
    <div>
      <div className="get-started">

        <div className="get-started-content">

          <div className="get-started-header">
            Don't Be Left Behind. Advance with

            <span style={{color: '#1A3660'}}> Technological </span>
            Advancement
          </div>

          <div className="get-started-paragraph">
            In today's fast-paced digital landscape, keeping up with the latest technological advancements is crucial for businesses. An effective online presence is paramount for success, and developing a custom website or mobile application can significantly improve the customer experience, leading to increased satisfaction and revenue generation. Our services are designed to help businesses stay ahead of the curve and achieve their goals in the digital realm.
            {' '}
          </div>

          <div className="get-started-btn-main">
            <button className="get-started-btn" onClick={handleGetStarted}>
            <a href="/contact"  onclick="Calendly.initPopupWidget({url: ''});return false;" target="blank" className="anchor_default">
            Contact Us <i class="fas fa-arrow-circle-right" />
              </a>
            </button>
          </div>

        </div>
        <div>
          <img
            src={img}
            className="img-get-started"
            alt="Teaching presentation"
          />
        </div>
      </div>
      <div className="get-started-mobile">

        <div>
          <img
            src={img}
            className="img-get-started"
            alt="Teaching presentation"
          />
        </div>

        <div className="get-started-content">

          <div className="get-started-header">
            Advance with

            <span style={{color: '#F7901F'}}> Technological </span>
            Advancement
          </div>

          <div>
            Technology is constantly evolving, and businesses must stay updated with the latest trends to remain competitive. A robust online presence is crucial to success in the fast-paced digital landscape. A custom business website or mobile application can significantly enhance the customer experience, increase customer satisfaction, and ultimately generate more revenue.
          </div>

          {/* <div className="get-started-btn-main">
            <button className="get-started-btn" onClick={handleGetStarted}>
            Freemmm Consultation <i class="fas fa-arrow-circle-right" />
            </button>
          </div> */}

        </div>

      </div>
    </div>
  );
};

export default GetStarted;
