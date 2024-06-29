import {useState} from 'react';
import '../../css/main.css';
import arrow from '../../images/Arrows.svg';

import plan from '../../images/backend.svg';
import backend from '../../images/backend.svg';
import frontend from '../../images/backend.svg';
import design from '../../images/design.svg';
import cloud from '../../images/cloud.svg';

const TechStack = () => {
  const [first, setFirst] = useState (true);

  const [second, setsecond] = useState (false);
  const [third, setthird] = useState (false);
  const [forth, setForth] = useState (false);

  const setItems = status => {
    if (status === 1) {
      setFirst (!first);
      setsecond (false);
      setthird (false);
      setForth (false);
      return;
    }

    if (status === 2) {
      setsecond (!second);
      setFirst (false);
      setthird (false);
      setForth (false);
      return;
    }
    if (status === 3) {
      setthird (!third);
      setFirst (false);
      setsecond (false);
      setForth (false);
      return;
    }
    if (status === 4) {
      setForth (!forth);
      setFirst (false);
      setsecond (false);
      setthird (false);
      return;
    }
  };

  return (
    <div className="techstack-container" id="techstack">

      <div className="techstack-upper">

        <span style={{color: '#1A3660'}}>OUR TECH STACK</span>

        <div className="techstack-header">

          We utilize

          <span style={{color: '#4DBBBD'}}> cutting-edge  </span> <br/>
          technologies and tools for the best results
        </div>
        <p style={{textAlign: 'justify'}} className="techstack-txt">
          At Voyage, we utilize a combination of cutting-edge technologies and tools to build dynamic and engaging websites and mobile applications that meet the unique needs of our clients. Our aim is to create a seamless and efficient user experience that meets the unique needs of each project.
        </p>
      </div>

      <div className="card-techstack">
        <div
          className={`card ${first ? 'card-techstack-open' : 'width-techstack'}`}
          onClick={() => setItems (1)}
        >
          <div className="card-body">

            <h4 className="header-color-techstack">
              <img
                src={frontend}
                className="icon-industry"
                alt="service icon"
              />
            </h4>
            <div className="techstack-card-header">

              <h4 className="header-color-techstack">
                Frontend Developers

              </h4>
            </div>
            {first &&
              <p className="card-text card-text-techstack">
                At Voyage, we use a variety of languages, frameworks, and libraries to create engaging and responsive user interfaces, including HTMDL, CSS, JavaScript, React, and AngularJS. These technologies allow our developers to create visually appealing and interactive user interfaces optimized for desktop and mobile devices. Our developers use HTML to structure the content and layout of web pages, CSS to provide styling and visual appeal, and JavaScript to add dynamic behavior and interactivity to web pages. We also utilize modern front-end frameworks like React and AngularJS to create complex user interfaces that are easily maintainable and scalable.
              </p>}

          </div>

          {!first &&
            <div className="down-arrow-techstack">
              <div style={{marginLeft: 'auto', padding: 20}}>
                <img src={arrow} className="icon-industry" alt="service icon" />
              </div>
            </div>}

        </div>
        <div
          className={`card ${second ? 'card-techstack-open' : 'width-techstack'}`}
          onClick={() => setItems (2)}
        >

          <div className="card-body">
            <h4 className="header-color-techstack">
              <img src={backend} className="icon-industry" alt="service icon" />
            </h4>
            <div className="techstack-card-header">

              <h4 className="header-color-techstack">
                Back-end development
              </h4>
            </div>
            {second &&
              <p className="card-text card-text-techstack">
                Voyage uses a variety of server-side technologies to power the functionality of our websites and mobile applications. Our developers use Java, Node.js, Express, Laravel, and MySQL to handle database interactions, user authentication and authorization, and data processing. This allows us to provide a seamless user experience for our clients and deliver high-quality products that meet their specific needs. For example, we might use Java to create a custom business application that needs to process and store large amounts of data or Node.js and Express to build a real-time chat application that handles multiple simultaneous connections.
              </p>}
          </div>
          {!second &&
            <div className="down-arrow-techstack">
              <div style={{marginLeft: 'auto', padding: 20}}>
                <img src={arrow} className="icon-industry" alt="service icon" />
              </div>
            </div>}

        </div>

        <div
          className={`card ${third ? 'card-techstack-open' : 'width-techstack'}`}
          onClick={() => setItems (3)}
        >
          <div className="card-body">
            <h4 className="header-color-techstack">
              <img src={design} className="icon-industry" alt="service icon" />
            </h4>
            <div className="techstack-card-header">

              <h4 className="header-color-techstack">
                Design & Office Collaboration
              </h4>
            </div>
            {third &&
              <p className="card-text card-text-techstack">
                Voyage values efficient and effective collaboration between teams in the work process. Our talented teams use several tools and applications to ensure smooth collaboration and communication between teams, improve productivity, and streamline the design and development process. Our design tools, such as Adobe suites, Figma, and Sketch, provide intuitive and user-friendly interfaces for our designers to create visually appealing and interactive user interfaces. Meanwhile, tools like GitHub and Microsoft 365 allow teams to track changes, manage different versions of a project, and communicate effectively in real time.
              </p>}
          </div>
          {!third &&
            <div className="down-arrow-techstack">
              <div style={{marginLeft: 'auto', padding: 20}}>
                <img src={arrow} className="icon-industry" alt="service icon" />
              </div>
            </div>}
        </div>
        <div
          className={`card ${forth ? 'card-techstack-open' : 'width-techstack'}`}
          onClick={() => setItems (4)}
        >
          <div className="card-body">
            <h4 className="header-color-techstack">
              <img src={cloud} className="icon-industry" alt="service icon" />
            </h4>
            <div className="techstack-card-header">

              <h4 className="header-color-techstack">
                Cloud Computing
              </h4>
            </div>
            {forth &&
              <p className="card-text card-text-techstack">
                Voyage leverages the power of cloud computing to deliver scalable, reliable, and cost-effective solutions to our clients. Our developers can store, manage, and process data over the internet by using cloud-based services such as AWS, Azure, Apple Store Connect, Firebase, Google Play Console, and Google Cloud Platform. This eliminates the need for expensive physical servers and storage solutions and reduces the risk of data loss due to hardware failures
              </p>}
          </div>
          {!forth &&
            <div className="down-arrow-techstack">
              <div style={{marginLeft: 'auto', padding: 20}}>
                <img src={arrow} className="icon-industry" alt="service icon" />
              </div>
            </div>}
        </div>

      </div>

      <div className="card-techstack-mobile">
        <div className="card width-techstack">
          <div className="card-body">

            <div className="techstack-card-header">

              <h4 className="header-color-techstack">
                <img src={plan} className="icon-industry" alt="service icon" />
              </h4>

              <h4 className="header-color-techstack">

                Frontend Developers

              </h4>
            </div>
            <p className="card-text card-text-techstack">
              Voyage uses a variety of server-side technologies to power the functionality of our websites and mobile applications. Our developers use Java, Node.js, Express, Laravel, and MySQL to handle database interactions, user authentication and authorization, and data processing. This allows us to provide a seamless user experience for our clients and deliver high-quality products that meet their specific needs. For example, we might use Java to create a custom business application that needs to process and store large amounts of data or Node.js and Express to build a real-time chat application that handles multiple simultaneous connections.
            </p>
          </div>
        </div>
        <div className="card width-techstack">

          <div className="card-body">

            <div className="techstack-card-header">
              <h4 className="header-color-techstack">
                <img src={plan} className="icon-industry" alt="service icon" />
              </h4>

              <h4 className="header-color-techstack">
                Back-end development
              </h4>
            </div>
            <p className="card-text card-text-techstack">
              Voyage uses a variety of server-side technologies to power the functionality of our websites and mobile applications. Our developers use Java, Node.js, Express, Laravel, and MySQL to handle database interactions, user authentication and authorization, and data processing. This allows us to provide a seamless user experience for our clients and deliver high-quality products that meet their specific needs. For example, we might use Java to create a custom business application that needs to process and store large amounts of data or Node.js and Express to build a real-time chat application that handles multiple simultaneous connections.
            </p>
          </div>

        </div>

        <div className="card width-techstack">
          <div className="card-body">

            <div className="techstack-card-header">
              <h4 className="header-color-techstack">
                <img src={plan} className="icon-industry" alt="service icon" />
              </h4>

              <h4 className="header-color-techstack">
                Design & Office Collaboration
              </h4>
            </div>
            <p className="card-text card-text-techstack">
              Voyage uses a variety of server-side technologies to power the functionality of our websites and mobile applications. Our developers use Java, Node.js, Express, Laravel, and MySQL to handle database interactions, user authentication and authorization, and data processing. This allows us to provide a seamless user experience for our clients and deliver high-quality products that meet their specific needs. For example, we might use Java to create a custom business application that needs to process and store large amounts of data or Node.js and Express to build a real-time chat application that handles multiple simultaneous connections.
            </p>
          </div>

        </div>
        <div className="card width-techstack">
          <div className="card-body">

            <div className="techstack-card-header">

              <h4 className="header-color-techstack">
                <img src={plan} className="icon-industry" alt="service icon" />
              </h4>

              <h4 className="header-color-techstack">
                Cloud Computing
              </h4>
            </div>
            <p className="card-text card-text-techstack">
              Voyage uses a variety of server-side technologies to power the functionality of our websites and mobile applications. Our developers use Java, Node.js, Express, Laravel, and MySQL to handle database interactions, user authentication and authorization, and data processing. This allows us to provide a seamless user experience for our clients and deliver high-quality products that meet their specific needs. For example, we might use Java to create a custom business application that needs to process and store large amounts of data or Node.js and Express to build a real-time chat application that handles multiple simultaneous connections.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default TechStack;
