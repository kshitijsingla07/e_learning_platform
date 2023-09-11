import React, { Fragment, useEffect } from "react";
import frontStudy from "../../images/frontStudy.jpg";
import person from "../../images/person.jpg";
import course1 from "../../images/course1.jpg";
import course2 from "../../images/course2.jpg";
import course3 from "../../images/course3.jpg";
import course4 from "../../images/course4.jpg";
import course5 from "../../images/course5.jpg";
import CourseCard from "../CourseCard";
import { Link } from "react-router-dom";

const Home=()=>{

    const [propertyForP,setStateP]=React.useState([{display:"block"},{display:"block"},{display:"block"},{display:"block"}]);
    const [propertyForImg,setStateI]=React.useState([{display:"none"},{display:"none"},{display:"none"},{display:"none"}]);
                                    
    function hoverOn(e){
        let id=e.currentTarget.id;
        let propertiesP=propertyForP.slice();
        let propertiesI=propertyForImg.slice();
        propertiesP[id]={display:"none"};
        propertiesI[id]={display:"block"};
        setStateP(propertiesP);
        setStateI(propertiesI);
    }
    function hoverOff(e){
        let id=e.currentTarget.id;
        let propertiesP=propertyForP.slice();
        let propertiesI=propertyForImg.slice();
        propertiesP[id]={display:"block"};
        propertiesI[id]={display:"none"};
        setStateP(propertiesP);
        setStateI(propertiesI);
    }

    const [courseData,setData]=React.useState([]);
    useEffect(() => {
        fetch('/courses')
           .then((res) => res.json())
           .then((data) => {
              setData(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    return(
        <Fragment>
            <div class="frontImage">
        <div class="left">
            <div class="lHeading">Learn Anytime<br/>Anywhere</div>
            <p class="lText">Learn skills for your present and future with a lot of high quality courses and get certificates and badges</p>
            <Link to={"/courses"}><button type="submit" class="forCourses">Explore courses</button></Link>
        </div>
        <div class="right">
            <div class="imagePart">
                <img class="boyLearning" src={frontStudy} alt="front image"/>
            </div>
            <div class="colorPart"></div>
        </div>
    </div>
    <div class="reviews">
        <h1>WHAT LEARNERS THINK OF LearnAtHome</h1>
        <div class="persons">
            <div class="revContent" id="0" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                <i class="fa fa-quote-left"></i>
                <p style={propertyForP[0]}>I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified</p>
                <br/><hr/><br/>
                <h4>Akshay</h4>
                <a href="https://in.linkedin.com/" target="_blank">Linkedin Profile</a><br/>
                <img src={person} style={propertyForImg[0]} class="personImage" alt="person image" width="95%"/>
            </div>
            <div class="revContent" id="1" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                <i class="fa fa-quote-left"></i>
                <p style={propertyForP[1]}>The program totally changed my life. I have this career in front of me. That's really powerful.</p>
                <br/><hr/><br/>
                <h4>Rahul</h4>
                <a href="https://in.linkedin.com/" target="_blank">Linkedin Profile</a><br/>
                <img src={person} style={propertyForImg[1]} class="personImage" alt="person image" width="95%"/>
            </div>
            <div class="revContent" id="2" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                <i class="fa fa-quote-left"></i>
                <p style={propertyForP[2]}>I'm finally able to truly differentiate my classroom. This has been priceless for my students' engagement.</p>
                <br/><hr/><br/>
                <h4>Manish</h4>
                <a href="https://in.linkedin.com/" target="_blank">Linkedin Profile</a><br/>
                <img src={person} style={propertyForImg[2]} class="personImage" alt="person image" width="95%"/>
            </div>
            <div class="revContent" id="3" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                <i class="fa fa-quote-left"></i>
                <p style={propertyForP[3]}>I highly recommend this course for all budding data scientists, even people with no prior knowledge.</p>
                <br/><hr/><br/>
                <h4>Rehan</h4>
                <a href="https://in.linkedin.com/" target="_blank">Linkedin Profile</a><br/>
                <img src={person} style={propertyForImg[3]} class="personImage" alt="person image" width="95%"/>
            </div>
        </div>
    </div>
    <div class="topCourses">
        <h1>TOP RATED COURSES</h1>
        <div class="courses">
            {courseData.map((course)=>{
                return (
                    <CourseCard key={course.num} img={course.img} cname={course.cname} iname={course.iname} rating={course.rating} certificate={false} inCart={false}/>
                );
            })}

        </div>
        <Link to={"/courses"}><button type="submit" class="forCourses explore">Explore courses</button></Link>
    </div>
        </Fragment>
    )
}
export default Home;