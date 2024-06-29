import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/notfound.css';
import notImage from '../../images/notfound.png';
import SecondHeader from '../header/secondHeader';
const NotFound = () => {
  const navigate = useNavigate ();

  return (
    <div>
      <SecondHeader />
      <div className="notfound">
        <img src={notImage} alt="Not Found" className="image-cat" />
        <div>
          <h1 className="not-oops">oops... page not found</h1>
          <p className="not-sorry">
            Sorry! Page you're looking for doesn't exist. Please use the search box for help or go to the homepage.
          </p>
          <div className="not-btn">
            <button onClick={() => navigate (-1)}>Go back</button>
            <button onClick={() => navigate (`/`)}>Go to homepage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
