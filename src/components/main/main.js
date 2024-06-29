import '../../css/main.css';
//import img from '../../images/home.png';
import * as json from '../lottie/landing.json';
import LottiePlay from './lottiePlayer';

const Main = () => {
  return (
    <div>
      <div className="main-content">

        <div className="uniform-width">
          <div>
            <h3 className="font-main">

            Elevate Your Online Presence with comprehensive digital solutions.


            </h3>
          </div>
          <div>
            <h6 style={{color: 'white'}} className="sub-content-main">
            Unleash the full potential of your business to rise above the competition with our bespoke web development and digital marketing strategies.
              {/* {' '}
              <br />
              {' '}
              marketing strategies. */}
            </h6>
          </div>
        </div>

        <div className="uniform-width">

          <div className="lottieWidth">
            <LottiePlay json={json} />
          </div>

          {/*
          
          <img src={img} className="img-home" alt="Teaching presentation" />
          */}
        </div>
      </div>
      {/*mobile view main content display*/}

      <div className="main-content-mobile">

        <div className="uniform-width">

          <div className="lottieWidthmobile">
            <LottiePlay json={json} />
          </div>
        </div>

        <div className="uniform-width cont-landing">
          <div>
            <h3 className="font-main">
              Elevate Your Business with Custom Digital Solutions
            </h3>
          </div>
          <div>
            <h6 style={{color: 'white'}}>
              Unlock Your Potential with the Best Web Development,
              Mobile App Development, and UI/UX Design for Impactful Success.
            </h6>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Main;
