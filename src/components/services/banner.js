import React from "react";
import Servicecover from "../../images/service/service.png";
import { useNavigate } from 'react-router-dom';

const Banner = () =>{
    const navigate = useNavigate();

    const navigatetogetquote = () => {
      navigate('/quote')
    }
    return(
        <div className="banner-content container">
            <div> 
                <div className="image">
                    <img className="service-cover" src={Servicecover} alt="cover" />
                </div>
                <div className="contents">
                    <div>
                        
                        <h4>
                        Complete customized <br />
                        Web and Mobile Solutions <br />
                        for Your Business
                        </h4>
                        <p>
                            From design and development to marketing <br />
                            and maintenance, we've got you covered. 
                        </p>
                        <button href="" className="btn text-light" onClick={navigatetogetquote} >Get Quote Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;