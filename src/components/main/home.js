import Header from '../header/header';
import Main from './main';
import MainContent from './mainContents';

const Home = () => {
  return (
    <div className="main-container" id='top-site-menu'>

      <div className="block-cover">
        <Header />

        <div className="main-home-content-margin">

          <Main />
        </div>
      </div>

      <MainContent />

      {/* <Footer/> */}

    </div>
  );
};

export default Home;
