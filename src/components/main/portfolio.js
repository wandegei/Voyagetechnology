import '../../css/main.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../images/portfolio1.png';
import img2 from '../../images/portfolio2.png';
import {useState} from 'react';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 3000},
    items: 5,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
  },
};

const Portfolio = () => {
  const [ux, setUx] = useState (true);
  const [web, setWeb] = useState (false);

  const [mobile, setMobile] = useState (false);

  const toggleButton = status => {
    if (status === 1) {
      setUx (true);
      setWeb (false);
      setMobile (false);
      return;
    }

    if (status === 2) {
      setUx (false);
      setWeb (true);
      setMobile (false);
      return;
    }
    if (status === 3) {
      setUx (false);
      setWeb (false);
      setMobile (true);
      return;
    }
  };

  return (
    <div className="portfoilio-container" id="portfolio">

      <div className="portfolio-upper">

        <span style={{color: '#02A2AC'}}>OUR PORTIFOLIO</span>

        <div className="portfolio-header">
          <div className="center-first-port">
            Outstanding

            <span style={{color: '#F7901F'}}> achievement. </span>
          </div>

          We look forward to a bright future.
        </div>
        <p style={{textAlign: 'justify'}} className="portfolio-txt">
          At VOYAGE, we've been fortunate to work on various projects for our valued clients, including UI/UX design, mobile development, web development, and web/app management. Our client-focused approach and skilled teams have allowed us to deliver exceptional services and help our clients reach their goals. Here's a summary of some of our completed projects.
        </p>

        <div className="portfolio-apps">
          <div
            style={{
              paddingRight: 10,
              cursor: 'pointer',
              borderRight: '1px solid black',
            }}
            className={ux && 'active-portfolio'}
            onClick={() => toggleButton (1)}
          >
            UX/UI Designs
          </div>
          <div
            style={{
              paddingRight: 10,
              borderRight: '1px solid black',
              cursor: 'pointer',
              paddingLeft: 10,
            }}
            className={web && 'active-portfolio'}
            onClick={() => toggleButton (2)}
          >
            Web Apps
          </div>
          <div
            style={{paddingLeft: 10, cursor: 'pointer'}}
            onClick={() => toggleButton (3)}
            className={mobile && 'active-portfolio'}
          >
            Mobile Apps
          </div>
        </div>

      </div>

      <div className="portfolio--slider">
        {ux &&
          <Carousel responsive={responsive}>

            <img src={img} className="img-slider-portfolio" alt="slide show" />
            <img src={img2} className="img-slider-portfolio" alt="slide show" />
            <img src={img} className="img-slider-portfolio" alt="slide show" />
            <img src={img} className="img-slider-portfolio" alt="slide show" />
          </Carousel>}
          {web &&
          <Carousel responsive={responsive}>

            <img src={img} className="img-slider-portfolio" alt="slide show" />
            <img src={img2} className="img-slider-portfolio" alt="slide show" />
            <img src={img} className="img-slider-portfolio" alt="slide show" />
            <img src={img} className="img-slider-portfolio" alt="slide show" />
          </Carousel>}
          {mobile &&
          <Carousel responsive={responsive}>

            <img src={img} className="img-slider-portfolio" alt="slide show" />
            <img src={img2} className="img-slider-portfolio" alt="slide show" />
            <img src={img} className="img-slider-portfolio" alt="slide show" />
            <img src={img} className="img-slider-portfolio" alt="slide show" />
          </Carousel>}
      </div>

    </div>
  );
};

export default Portfolio;
