import React, { useState } from "react";
// import Blogger from "../../images/portfolio1.png";
// import Image2 from "../..//images/blog/blog2.png";
import Logo from '../../images/logo-header.svg';
// import Comments from "./comments";
import Drawingman from "../../images/blog/drawingman.jpg";
// import Drawinglady from "../../images/blog/drawinglady.jpg";
import Peoplegroup from "../../images/blog/peoplegroup.jpg";
import Businesswoman from "../../images/blog/busnesswoman.jpg";

const Content1 = () =>{
    // const [name , setName] = useState('');
    // const [email , setEmail] = useState ('');
    // const [message , setMessage] = useState('');

    // const commentsubmit = (e)=>{
    //     e.preventDefault();
    //     const comment = {name,email,message};

        // fetch('./comment.json',{
        // method: "POST",
        // headers: {"context-type" : "application/json"},
        // body : JSON.stringify(comment)
        // }).then(()=>{
        //     console.log("val added");
        // }).catch(error => {
        //     console.error('Error writing data to file:', error);
        // });
        // fetch('./comment.json')
        // .then(response => response.json())
        // .then(comment => comment)
        // .catch(error => console.error(error));


    // }


    
    return(
        <div className="main-blog">
            <div className="blog-cont">
                <div className="topimage">
                    <img src={Drawingman} alt="" height="280" width="100%"  />
                </div>
                <div className="d-flex mt-2">
                    <div className="blogger me-3">
                        {/* <img src={Blogger} alt="blogger" /> */}
                    </div>
                    <div>
                        {/* <h4>Dr. Ben Mooya</h4> */}
                        {/* <p>January 25, 2023</p> */}
                    </div>
                    <div className="ms-auto">
                    {/* <i className="fas fa-comments" /> */}
                    </div>
                </div>
                <h3 className="sussi fw-bold">Revolutionize Your Business: How to Create a Winning Digital Transformation Strategy That Works</h3>
                <p>In today's rapidly changing digital landscape, it's more cruncial than ever for businesses to have a successful digital transformation strategy. 
                    A digital transformation strategy can help your business stay competitive, improve operational efficiency, and increase customer satisfaction. 
                    In this blog post, we'll take a look at the steps you can take in creating an impactful digital transformation strategy for your business, 
                    with helpful insights from VOYAGE - a tech enterprise that provides Web Development, Mobile App Development, SEO services, and Web/App copywriting and maintenance services.
                    </p>
                <div className="plan">
                    <div><img src={Businesswoman} alt="" /></div>
                    <div>
                        <h3 className="sussi fw-bold">1. Define your business goals.</h3>
                        <p>Defining your business goals is the first step in creating a successful digital transformation strategy. 
                            What are you hoping to achieve through digital transformation? Are you looking to improve operational efficiency, increase sales, or enhance customer satisfaction? 
                            Once you clearly understand your business goals, you can develop a digital transformation strategy that aligns with these goals.
                            </p>
                    </div>
                </div>
                <br />
                <h3 className="sussi fw-bold mt-2">2. Assess your current digital infrastructure</h3>                
                <p>Before implementing a digital transformation strategy, you need to assess your current digital infrastructure, 
                    including your hardware, software, and networking capabilities. Look at your existing systems and identify any areas that need improvement. 
                    VOYAGE's expertise in Web Development and Mobile App Development can help you identify the right technologies to invest in and improve your digital infrastructure.
                    </p>

                <h3 className="sussi fw-bold">3. Develop a roadmap</h3>                
                <p>Once you clearly understand your business goals and your current digital infrastructure, you can start to develop a roadmap for your digital transformation strategy. 
                    This should include a detailed plan for implementing new technologies, upgrading existing systems, and training your employees on the new tools and processes. 
                    VOYAGE's Web/App, copywriting, and maintenance services can help you effectively communicate your roadmap to your employees and customers.
                    </p>
                <div>
                   <img src={Peoplegroup} alt=""  width="100%" />
                </div>
                <h3 className="sussi fw-bold my-2">4. Engange your employees</h3>
                <p>
                Digital transformation is not only about technology – it's also about people. 
                Engaging your employees in the transformation process is critical to its success. 
                Ensure you communicate digital transformation's benefits to your employees and provide them with the training and support they need to adopt new tools and processes.
                VOYAGE's expertise in training and support can help you engage your employees effectively. 
                </p>

                <h3 className="sussi fw-bold my-2">5. Engange your employees</h3>
                <p>
                Once you have implemented your digital transformation strategy, monitoring and evaluating its effectiveness is essential. 
                It helps you identify any areas needing improvement and make adjustments. It would be best if you also tracked key indicators to measure the success of your digital transformation 
                strategy and ensure that it is aligned with your business goals. VOYAGE's SEO services can help you track your KPIs effectively and provide a successful digital transformation strategy.
                </p>
                <div className="my-4">
                {/* height="200" */}
                   <img src={Businesswoman} alt=""  width="100%" />
                </div>

                <p>
                In conclusion, digital transformation is cruncial for businesses which desire to stay competitive in today's digital landscape. 
                By consider these steps, you can create a successful digital transformation strategy that aligns with your business goals, improves 
                operational efficiency, and enhances customer satisfaction. Remember, digital transformation is a continuous process – be prepared to adapt and evolve your strategy as your business needs change.
                </p>
                <div className="botom mt-4">
                    <div><img src={Logo} alt="" height="150" /></div>
                    <div>

                        <p>If you need help implementing your digital transformation strategy, contact VOYAGE by clicking here to <a href="" className="text-orange">contact us</a> or get started to learn more about their services. 
                            You can also click here to get a quote for your specific needs. 
                            </p>
                    </div>
                </div>
                {/* <Comments />                 */}
            </div>
        </div>
    );
}

export default Content1;