import '../../css/main.css';
import homeImg from '../../images/product/home.png';
import * as json from '../lottie/landing.json';
import LottiePlay from '../main/lottiePlayer';

const Main = () => {
  return (
    <div>
      <div className="main-content">

        <div className="uniform-width">
          <div>
            <h3 className="font-main">

              Elevate Your Business with Custom Digital Solutions

            </h3>
          </div>
          <div>
            <h6 style={{color: 'white'}} className="sub-content-main">
              Unlock Your Potential with the Best Web Development, <br />
              Mobile App Development, and UI/UX Design for
              {' '}
              <br />
              {' '}
              Impactful Success.
            </h6>
          </div>
        </div>

        <div className="uniform-width">

          <div className="lottieWidth" style={{marginLeft:0}}>
            <img src={homeImg} alt='product animation service display' style={{width:'140%'}}/>
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
