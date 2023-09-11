import React from "react";
import { Container} from "reactstrap";
import aboutImg from "../../images/about-us.png";
import CountUp from "react-countup";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section className="aboutInfo">
      <Container>
        <div className="cont">
          <div>
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </div>

          <div>
            <div className="about__content">
              <h2>About Us</h2><br/>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p><br/>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Students Enrolled</p>
                  </div>
                  <br/>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Students Around World</p>
                  </div>
                </div><br/>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div><br/>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;