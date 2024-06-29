import '../../css/main.css';
//import img from '../../images/home.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img2 from '../../images/testimonial/6.png';
import tony from '../../images/makerere.jpeg';
import evelyn from '../../images/iuiu.jpg';
import ben from '../../images/childinternational.jpeg';
import winnie from '../../images/Charles Fashion.jpeg';
import log from '../../images/log.png';
import testi from '../../images/testimonial/3.png';
import testi1 from '../../images/testimonial/6.png';
import sharon from '../../images/pixelsviyoge.jpg';
import quotation from '../../images/quotation.svg';

const ButtonGroup = ({next, previous, goToSlide, ...rest}) => {
  const {carouselState: {currentSlide}} = rest;
  return (
    <div className="carousel-button-group" style={{display: 'flex'}}>

      <div className="testimonial-btn-main">
        <i
          class="fas fa-arrow-circle-left"
          style={{fontSize: 30, color: '#BAEFF2', cursor: 'pointer'}}
          onClick={() => previous ()}
        />
        {' '}{' '}
        <div style={{paddingLeft: 10}}>
          {' '}
          <i
            class="fas fa-arrow-circle-right"
            onClick={() => next ()}
            style={{fontSize: 30, color: '#BAEFF2', cursor: 'pointer'}}
          />
        </div>
      </div>
    </div>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 3000},
    items: 5,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 2,
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

const Testimonial = () => {
  return (
    <div>
      <div className="testimonial">
        <div style={{width: '50%'}}>
          <div className="testimonia--slider">
            <Carousel
              responsive={responsive}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
            >
              <div className="testimonial-card">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  Voyage's app maintenance services have given us peace of mind knowing that our digital presence is in good hands. Their proactive approach to identifying and fixing potential issues before they become bigger problems has saved us time and money. We are thrilled with the services we've received from VOYAGE.

                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={tony}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">Ronnie</h5>
                    <div className="cont-title">
                    The Ceo - Makerere University - Kampala
                    </div>

                  </div>

                </div>

              </div>
              <div className="testimonial-card2">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  We have been extremely impressed with the web maintenance services provided by VOYAGE. Their team is knowledgeable and always goes above and beyond to ensure that our website and applications are running smoothly. We highly recommend them to anyone looking for reliable web and app maintenance services
                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={evelyn}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">Prof.Ismail</h5>
                    <div className="cont-title">
                    University Executives :: IUIU Leadership
                    </div>

                  </div>

                </div>

              </div>

              <div className="testimonial-card">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                VOYAGE provided exceptional mobile app development services throughout the entire process. Their team effectively understood our specific needs and requirements, creating a custom solution that fully met our expectations. We are extremely satisfied with the final product and highly recommend VOYAGE for anyone seeking professional mobile app development services.
                  {' '}
                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={ben}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header"> Lucy Buck</h5>
                    <div className="cont-title">
                    Founder of Children Witness International.
                    </div>

                  </div>

                </div>

              </div>

              <div className="testimonial-card2">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  We were blown away by the quality of the mobile app developed by VOYAGE. Their team was knowledgeable, efficient, and always available to answer any questions we had. The end result was exactly what we were looking for and we couldn't be happier. We highly recommend VOYAGE for professional mobile app development services

                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={winnie}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">Charles Frederick</h5>
                    <div className="cont-title">
                    Originator and Executive of Fashion Dress Up.
                    </div>

                  </div>

                </div>

              </div>

              <div className="testimonial-card">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  We hired VOYAGE to redesign our outdated website and they exceeded our expectations in every way. The new website is modern, user-friendly, and has already helped us increase our online conversions. VOYAGE's attention to detail and commitment to customer satisfaction sets them apart from other web development companies

                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={log}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">Akira Nandan</h5>
                    <div className="cont-title">
                    Head of PIXEL Marketing Solutions.
                    </div>

                  </div>

                </div>

              </div>
              <div className="testimonial-card2">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  VOYAGE has been an invaluable partner for our company's web development needs. Their team is highly skilled, efficient, and always goes above and beyond to deliver outstanding results. We highly recommend VOYAGE for anyone looking for a reliable web development company

                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={sharon}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">ERIMU NELSON</h5>
                    <div className="cont-title">
                    IT Supervisor at Marketing Corp.
                    </div>

                  </div>

                </div>

              </div>
              <div className="testimonial-card">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                We collaborated with VOYAGE on a mobile app redesign and were amazed by the outcome. The team transformed our ideas into a beautiful, user-friendly design that has garnered excellent feedback from our customers. VOYAGE excels in crafting outstanding UI/UX designs, and we highly recommend their services.
                </div>
                <div
                  className="testimonial-profile-content"
                  style={{marginTop: -24}}
                >
                  <div className="profile-testimonial">
                    <img
                      src={testi1}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">Adams Emmanuel</h5>
                    <div className="cont-title">
                      Student At Midland High School
                    </div>

                  </div>

                </div>

              </div>

              <div className="testimonial-card">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                We partnered with VOYAGE to redesign our mobile app and were incredibly impressed with the results. The team took our concepts and transformed them into a beautiful, user-friendly design that has received enthusiastic feedback from our customers. VOYAGE has a true talent for crafting exceptional UI/UX designs, and we highly recommend their services.
                </div>
                <div
                  className="testimonial-profile-content"
                  style={{marginTop: -24}}
                >
                  <div className="profile-testimonial">
                    <img
                      src={img2}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">voyage</h5>
                    <div className="cont-title">
                    Technology Manager at Marketing Corp.
                    </div>

                  </div>

                </div>

              </div>

              <div className="testimonial-card">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  We worked with VOYAGE on a redesign of our mobile app and were blown away by the results. The team was able to take our ideas and turn them into a stunning, user-friendly design that has received rave reviews from our customers. VOYAGE truly has a knack for creating amazing UI/UX designs and we highly recommend them
                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={testi}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">voyage</h5>
                    <div className="cont-title">
                    Manager of Information Technology at Marketing Corp.
                    </div>

                  </div>

                </div>

              </div>

            </Carousel>
          </div>
        </div>
        <div className="testimonial-content">
          <span style={{color: '#02A2AC'}}>TESTIMONIES</span>

          <div className="testimonial-header">

            What our

            <span style={{color: '#1A3660'}}> Clients</span>
            {' '}
            say about our services
          </div>

          <div className="testimonial-txt">
          Our firm specializes in providing outstanding work that exceeds client expectations. Our team of talented experts works closely with clients to guarantee the timely delivery of superior results.
          </div>

        </div>
      </div>

      <div className="testimonial-mobile">

        <div className="testimonial-content">
          <span style={{color: '#02A2AC'}} className="testimony-to-center">
            TESTIMONIES
          </span>

          <div className="testimonial-header">

            What our

            <span style={{color: '#1A3660'}}> </span>
            {' '}
            say about our services
          </div>

          <div className="testimonial-paragraph">
            Our company excels in delivering exceptional work that surpasses client expectations. Our team of skilled professionals closely collaborates with clients to ensure timely delivery of high-quality results.
          </div>

          <div>
            <Carousel
              responsive={responsive}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
            >
              <div className="testimonial-card">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                We have been thoroughly impressed with VOYAGE's web maintenance services. Their team possesses deep expertise and consistently exceeds expectations in ensuring the smooth operation of our website and applications. We highly recommend them to anyone seeking dependable web and app maintenance services.
                </div>
                {/* <div
                  className="testimonial-profile-content"
                  style={{marginTop: -20}}
                >
                  <div className="profile-testimonial">
                    <img
                      src={tony}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">Tony</h5>
                    <div className="cont-title">
                      Founder of 360tv inc
                    </div>

                  </div>

                </div> */}

              </div>
              <div className="testimonial-card2">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  We worked with VOYAGE on a redesign of our mobile app and were blown away by the results. The team was able to take our ideas and turn them into a stunning, user-friendly design that has received rave reviews from our customers. VOYAGE truly has a knack for creating amazing UI/UX designs and we highly recommend them
                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={evelyn}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">voyage</h5>
                    <div className="cont-title">
                      CEO voyage
                    </div>

                  </div>

                </div>

              </div>
              <div className="testimonial-card">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                VOYAGE provided exceptional mobile app development services from beginning to end. Their team fully understood our specific needs and requirements, creating a custom solution that fulfilled all our expectations. We are thrilled with the final outcome and highly recommend VOYAGE for professional mobile app development services.

                </div>
                <div
                  className="testimonial-profile-content"
                  style={{marginTop: -30}}
                >
                  <div className="profile-testimonial">
                    <img
                      src={ben}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">voyage</h5>
                    <div className="cont-title">
                    Establisher of Children Witness International.
                    </div>

                  </div>

                </div>

              </div>
              <div className="testimonial-card2">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  We were blown away by the quality of the mobile app developed by VOYAGE. Their team was knowledgeable, efficient, and always available to answer any questions we had. The end result was exactly what we were looking for and we couldn't be happier. We highly recommend VOYAGE for professional mobile app development services

                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={winnie}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">voyage</h5>
                    <div className="cont-title">
                    Creator and Leader of Fashion Dress Up.
                    </div>

                  </div>

                </div>

              </div>
              <div className="testimonial-card">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  VOYAGE has been an invaluable partner for our company's web development needs. Their team is highly skilled, efficient, and always goes above and beyond to deliver outstanding results. We highly recommend VOYAGE for anyone looking for a reliable web development company
                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={log}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">Johnson Okongo</h5>
                    <div className="cont-title">
                      IT manager of Marketing Corp
                    </div>

                  </div>

                </div>

              </div>
              <div className="testimonial-card2">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  VOYAGE has been an invaluable partner for our company's web development needs. Their team is highly skilled, efficient, and always goes above and beyond to deliver outstanding results.
                  We highly recommend VOYAGE for anyone looking for a reliable web development company

                </div>
                <div className="testimonial-profile-content">
                  <div className="profile-testimonial">
                    <img
                      src={sharon}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">voyage</h5>
                    <div className="cont-title">
                    Information Technology Manager at Marketing Corp.
                    </div>

                  </div>

                </div>

              </div>
              <div className="testimonial-card">
                <img src={quotation} className="quotation" alt="slide show" />
                <div className="quotation-content">
                  We worked with VOYAGE on a redesign of our mobile app and were blown away by the results. The team was able to take our ideas and turn them into a stunning, user-friendly design that has received rave reviews from our customers. VOYAGE truly has a knack for creating amazing UI/UX designs and we highly recommend them
                </div>
                <div
                  className="testimonial-profile-content"
                  style={{marginTop: -20}}
                >
                  <div className="profile-testimonial">
                    <img
                      src={img2}
                      alt="slide show"
                      className="profile-testimonial"
                    />
                  </div>
                  <div className="cont-testimonial">
                    <h5 className="cont-header">voyage</h5>
                    <div className="cont-title">
                    Information Technology Manager at Marketing Corp.
                    </div>

                  </div>

                </div>

              </div>

            </Carousel>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
