import Header from '../header/header';
import Main from './main';

const Service = () => {
  return (
    <div className="main-container" id="top-site-menu">

      <div className="block-cover">
        <Header />

        <div className="main-home-content-margin">

          <Main />
        </div>
      </div>

      {/* <Footer/> */}

    </div>
  );
};

export default Service;
