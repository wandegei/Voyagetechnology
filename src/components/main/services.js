import '../../css/main.css';
import ui from '../../images/service/ui.svg';
import mobile from '../../images/service/mobile.svg';
import web from '../../images/service/web.svg';
import Content from '../../images/service/Content.svg';
import SoftWare from '../../images/service/software.svg';
import Search from '../../images/service/search.svg';
import {useNavigate} from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate ();

  const redirectToServicePage = () => {
    navigate ('/service');
  };

  return (
    <div className="service-container">
      <span className="color-common-deep-blue">OUR SERVICES</span>
      <div className="header-service-state">
        What we <span className="color-common-orange">do</span>
      </div>
      <div className="service-content">
        We offer digital services to help businesses establish and strengthen their online presence. From web development to mobile app development, UI/UX design to SEO and web maintenance, we have you covered. Our team of global experts works closely with clients to understand their unique needs and goals and deliver customized solutions that drive success.
        {' '}
      </div>

      <div className="card-service-new">

        <div className="service-flex-container">

          <div
            className="service-card-new"
            onClick={() => redirectToServicePage ()}
          >

            <div className="service-img-container">
              <img
                src={mobile}
                className="icon-service-new"
                alt="service icon"
              />
            </div>

            <div className="service-name-new">
              MOBILE APP{' '}
            </div>
            <div className="service-name-new-below">
              DEVELOPMENT
            </div>

            <div className="service-more-new-container">
              <a href="/service" className="service-read-more-new">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>

          </div>

          <div
            className="service-card-new"
            onClick={() => redirectToServicePage ()}
          >

            <div className="service-img-container">
              <img src={web} className="icon-service-new" alt="service icon" />
            </div>

            <div className="service-name-new">
              WEB APP{' '}
            </div>
            <div className="service-name-new-below">
              DEVELOPMENT
            </div>

            <div className="service-more-new-container">
              <a href="/service" className="service-read-more-new">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>

          </div>
          <div
            className="service-card-new"
            onClick={() => redirectToServicePage ()}
          >

            <div className="service-img-container">
              <img
                src={Search}
                className="icon-service-new"
                alt="service icon"
              />
            </div>

            <div className="service-name-new">
              DIGITAL{' '}
            </div>

            <div className="service-name-new-below">
              MARKETING
            </div>

            <div className="service-more-new-container">
              <a href="/service" className="service-read-more-new">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>

          </div>

          <div
            className="service-card-new"
            onClick={() => redirectToServicePage ()}
          >

            <div className="service-img-container">
              <img
                src={SoftWare}
                className="icon-service-new"
                alt="service icon"
              />
            </div>

            <div className="service-name-new">

              WEB/APP

            </div>

            <div className="service-name-new-below">
              MANAGEMENT
            </div>

            <div className="service-more-new-container">
              <a href="/service" className="service-read-more-new">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>

          </div>
          <div
            className="service-card-new"
            onClick={() => redirectToServicePage ()}
          >

            <div className="service-img-container">
              <img src={ui} className="icon-service-new" alt="service icon" />
            </div>

            <div className="service-name-new">
              UX/UI
            </div>

            <div className="service-name-new-below">
              DESIGN
            </div>
            <div className="service-more-new-container">
              <a href="/service" className="service-read-more-new">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>

          </div>
          <div
            className="service-card-new"
            onClick={() => redirectToServicePage ()}
          >

            <div className="service-img-container">
              <img
                src={Content}
                className="icon-service-new"
                alt="service icon"
              />
            </div>

            <div className="service-name-new">
              DIGITAL
            </div>

            <div className="service-name-new-below">
              CONTENT CREATION
            </div>

            <div className="service-more-new-container">
              <a href="/service" className="service-read-more-new">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/*
      
      <div className="card-service">
        <div className="card w-30 service-card1">
          <div className="card-body">
            <div className="service-card-header">
              {' '}{' '}
              <img src={ui} className="icon-service" alt="service icon" />
              {' '}
              <h4 className="header-serv header-service1">
                UI/UX Design
              </h4>
            </div>
            <p className="card-text  card-text-service card-text-service1">
              We design engaging, user-friendly digital experiences for websites, mobile apps, and products with intuitive interfaces. We prioritize user experience, engagement, and conversions through research and client collaboration.
              {' '}
              {' '}
            </p>
            <a
              href="/service"
              className="service-get-started"
              style={{textDecoration: 'none'}}
            >
              Get Quote
            </a>

            <div style={{display: 'flex', marginTop: 20}}>
              <a href="/service" className="service-read-more">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="card w-30 service-card-left service-card2">
          <div className="card-body">
            <div className="service-card-header">
              {' '}{' '}
              <img src={mobile} className="icon-service" alt="service icon" />
              {' '}
              <h4 className="header-serv header-service2">
                Mobile App Development
              </h4>
            </div>
            <p className="card-text  card-text-service card-text-service2">
              We develop custom, functional, intuitive, and engaging mobile applications for both iOS and Android platforms, prioritizing user experience, security, and performance. Bring your mobile app vision to life with TALLEN's expert services.
              {' '}
            </p>
            <a
              href="/service"
              className="service-get-started"
              style={{textDecoration: 'none'}}
            >
              Get Quote
            </a>

            <div style={{display: 'flex', marginTop: 20}}>
              <a href="/service" className="service-read-more">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-service ">
        <div className="card w-30 service-card3">
          <div className="card-body">
            <div className="service-card-header">
              {' '}{' '}
              <img src={web} className="icon-service" alt="service icon" />
              {' '}
              <h4 className="header-serv header-service3">
                Web App Development
              </h4>
            </div>
            <p className="card-text  card-text-service card-text-service3">
              We power businesses seeking robust and scalable web applications with responsive, user-friendly, and visually appealing websites that enhance user engagement and drive conversions.  Bring your vision to life with TALLEN's web development services.
            </p>
            <a
              href="/service"
              className="service-get-started"
              style={{textDecoration: 'none'}}
            >
              Get Quote
            </a>

            <div style={{display: 'flex', marginTop: 20}}>
              <a href="test" className="service-read-more">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="card w-30 service-card-left service-card4">
          <div className="card-body">
            <div className="service-card-header">
              {' '}{' '}
              <img src={webman} className="icon-service" alt="service icon" />
              {' '}
              <h4 className="header-serv header-service4">
                Web/App Management
              </h4>
            </div>
            <p className="card-text card-text-service card-text-service4">
              We keep web and mobile applications up-to-date, secure, and functioning optimally with regular updates, bug fixes, security, and data backups. Our maintenance services allow you to concentrate on your core business while we manage and maintain your digital assets for you.
              {' '}

            </p>
            <a
              href="/service"
              className="service-get-started"
              style={{textDecoration: 'none'}}
            >
              Get Quote
            </a>

            <div style={{display: 'flex', marginTop: 20}}>
              <a href="test" className="service-read-more">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card-service ">
        <div className="card w-30 service-card3" style={{height:400}}>
          <div className="card-body">
            <div className="service-card-header">
              {' '}{' '}
              <img src={web} className="icon-service" alt="service icon" />
              {' '}
              <h4 className="header-serv header-service3">
                Search Engine Optimization
              </h4>
            </div>
            <p className="card-text  card-text-service card-text-service3" style={{height:190}}>
              Enhance your digital presence and attract a higher volume of organic traffic with our top-notch SEO services. With a demonstrated record of success, our global team of SEO experts will work to improve your business ranking on search engines, and ultimately drive more conversions. Let us help you achieve the growth you've been seeking. Get in touch today to learn more.
            </p>
            <a
              href="/service"
              className="service-get-started"
              style={{textDecoration: 'none'}}
            >
              Get Quote
            </a>

            <div style={{display: 'flex', marginTop: 20}}>
              <a href="test" className="service-read-more">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="card w-30 service-card-left service-card4" style={{height:400}}>
          <div className="card-body">
            <div className="service-card-header">
              {' '}{' '}
              <img src={webman} className="icon-service" alt="service icon" />
              {' '}
              <h4 className="header-serv header-service4">

                Web/App Content Writing
              </h4>
            </div>
            <p className="card-text card-text-service card-text-service4" style={{height:190}}>
              Attract and retain your customers with our Web/App Content Writing services. We specialize in creating persuasive and well-researched content that drives conversions and builds trust. Whether you need web copy, app descriptions, blogs or newsletters, we deliver high-quality content that resonates with your brand. Let's bring your digital content to life.
            </p>
            <a
              href="/service"
              className="service-get-started"
              style={{textDecoration: 'none'}}
            >
              Get Quote
            </a>

            <div style={{display: 'flex', marginTop: 20}}>
              <a href="test" className="service-read-more">
                Read more <i class="fas fa-arrow-circle-right" />
              </a>
            </div>
          </div>
          
        </div>
    
      </div>

        */}
    </div>
  );
};

export default Services;
