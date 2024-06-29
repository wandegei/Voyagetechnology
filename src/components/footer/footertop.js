import {useState} from 'react';
import React from 'react-dom';
import Arrow from '../../images/icons/footer/BUTTON.svg';
import axios from 'axios';
import constantsItem from '../utils/constant';
import ToastMessage from '../common/toastMessage';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FooterTop = () => {
  const [email, setEmail] = useState ('');

  const [name, setName] = useState ('');
  const [error, setError] = useState ({name: '', email: ''});
  const [submit, setSubmit] = useState (false);

  const setValues = (value, status) => {
    setError ({
      name: '',
      email: '',
    });
    if (status === 1) {
      var hasNumber = /\d/;
      if (hasNumber.test (value)) {
        setError ({
          name: 'Name field can not contain numbers',
          email: '',
        });
        return;
      }
      // alert (value.length);
      setName (value);
      return;
    }

    if (status === 2) {
      setEmail (value);
      return;
    }
  };

  const submitForm = () => {
    // alert(name)
    if (name == '') {
      setError ({
        name: 'Name field can not be empty',
        email: '',
      });
      return;
    }

    if (email == '') {
      setError ({
        name: '',
        email: 'Email field can not be empty',
      });
      return;
    }

    const regex = /\S+@\S+\.\S+/;

    if (!regex.test (email)) {
      setError ({
        name: '',
        email: 'Email is invalid',
      });
      return;
    }

    if (name.length < 3) {
      setError ({
        name: 'Name too short. Please enter your full name.',
        email: '',
      });

      return;
    }

    const url = constantsItem.url + '/subscribe';

    setSubmit (true);

    const data = {
      email: email,
      name: name,
    };

    axios
      .post (url, data)
      .then (response => {
        setSubmit (false);
        //console.log (response.data);
        if (response.data.result) {
          ToastMessage (response.data.message, true);
        } else {
          ToastMessage (response.data.message, false);
        }
        setEmail ('');
        setName ('');
      })
      .catch (error => {
        setSubmit (false);
        ToastMessage ('Something went wrong, please try again latter', false);
        setEmail ('');
        setName ('');
        //console.log (error.response.data);
      });
  };

  return (
    <section className="subscribe-area">
      <div className="container">
        <div className="row footer-container">
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="subscribe-text">
              <h2 className="">Subscribe to Stay Updated.</h2>
            </div>
          </div>
          <div className="col-md-8 col-sm-4 col-xs-4 form-item-footer">
            <div className="subscribe-wrapper subscribe2-wrapper">
              <div className="subscribe-form">
                <form action="#">
                  <div className="form-inline newsletter">
                    <div className="form-group">
                      <input
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={e => setValues (e.target.value, 1)}
                      />
                    </div>
                    <div className="form-group formgroup2">
                      <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={e => setValues (e.target.value, 2)}
                        style={{borderLeft: '1px solid white', borderRadius: 0}}
                      />
                      <div
                        style={{
                          cursor: 'pointer',
                          pointerEvents: submit ? 'none' : '',
                          margin: submit ? '-70px -130px' : '',
                        }}
                        className="submit-btn"
                        onClick={() => submitForm ()}
                      >
                        {!submit
                          ? <img src={Arrow} alt="" />
                          : <div>Sending....</div>}

                      </div>
                    </div>
                  </div>

                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
      <div style={{display: 'flex'}}>
        {error.email &&
          <div style={{marginLeft: 'auto', color: 'red', marginRight: '30%'}}>
            {error.email}
          </div>}
        {error.name &&
          <div style={{marginLeft: 'auto', color: 'red', marginRight: '40%'}}>
            {error.name}
          </div>}
      </div>

      <ToastContainer />
    </section>
  );
};

export default FooterTop;
