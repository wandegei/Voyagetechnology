import React from "react";
import Service from "../../images/coding.png"
import Design from "../../images/icons/design.svg"
import Computer from "../../images/icons/computer.svg"
import Phone from "../../images/icons/phone.svg"

const ServiceDrop = () => {
  return (
    <div>
      <div className="container bg-light header-service ">
        <div className="d-flex">
          <div className="sect">
            <div className="image">
              <img src={Service} alt="" />
            </div>
          </div>
          <div className="sect">
            <div className="pt-2">
              <div className="icon"><img src={Phone} alt="" /></div>
              <div><h4>Mobile App Development</h4></div>
              <div className="text">VOYAGE specializes in building modern mobile apps for smartphones and tablets. With the rise of mobile devices, mobile app development is crucial for businesses to reach their audience. Our dedicated team of develpers</div>
            </div>
            <div className="pt-2">
              <div className="icon"><img src={Design} alt="" /></div>
              <div><h4>UX/UX Design</h4></div>
              <div className="text">At VOYAGE, we specialize in crafting stunning user interfaces and user experiences for software applications. Our focus is on creating visually appealing, intuitive, and efficient interfaces that drive user engagement and satisfaction</div>
            </div>
          </div>

          <div className="sect">
            <div className="pt-2">
              <div className="icon"><img src={Computer} alt="" /></div>
              <div><h4>Web Application Development</h4></div>
              <div className="text">As the world becomes increasingly digital, a great website is essential to reach a global audience. That's where VOYAGE comes in. We are dedicated to delivering innovative and effective web-based solutions designed to meet each business's specific needs.</div>
            </div>
            <div className="pt-2">
              <div className="icon"><img src={Computer} alt="" /></div>
              <div><h4>Web & Mobile App Management</h4></div>
              <div className="text">Managing software applications is crucial for businesses to remain relevant and secure. VOYAGE provides ongoing maintenance, support, and optimization services, including updates and security measures.</div>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
};

export default ServiceDrop;
