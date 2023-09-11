import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import courseDes from "../../images/courseDes.jpg";
import course1 from "../../images/course1.jpg";
import course2 from "../../images/course2.jpg";
import course3 from "../../images/course3.jpg";
import course4 from "../../images/course4.jpg";
import course5 from "../../images/course5.jpg";
import CourseCard from "../CourseCard";
import { UserContext } from "../../pages/Layout";


const Courses=()=>{

    const {state,dispatch}=useContext(UserContext);

    let propW=[{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},];
    let propP=[{backgroundColor:"#e14177",color:"white"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},{backgroundColor:"#dff7ff",color:"black"},];
    let idNum=["Web Development","Data Science","App Development","Design","Accounts and Finance","Marketting","Business","Music","Health and Fitness","IT and Software"];
    

    const [heading,setHead]=React.useState("Web Development");
    const [key,setKey]=React.useState("web");
    const [prop,setProp]=React.useState(propP)
    function change(e){
        var id=e.currentTarget.id;
        let i=0;
        while(i<10){
            if(idNum[i]===id) break;
            i=i+1;
        }
        setHead(id);
        let k=id.split(" ")[0].toLowerCase();
        setKey(k);
        propP=propW;
        propP[i]={backgroundColor:"#e14177",color:"white"};
        setProp(propP);
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


     const buyThis=(e)=>{
        
     }

    return (
        <div>
        <div class="allCourses">
        <h1>Start learning now</h1>
        <div class="categ">
            <div class="line">
                <div class="singleCateg" id="Web Development" style={prop[0]} onClick={change}>
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Web Development</p>
                        <p class="numCourses">4 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="Data Science" style={prop[1]} onClick={change}>
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Data Science</p>
                        <p class="numCourses">1 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="App Development" style={prop[2]} onClick={change}>
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">App Development</p>
                        <p class="numCourses">1 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="Design" style={prop[3]} onClick={change}>
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Design</p>
                        <p class="numCourses">0 courses</p>
                    </div>
                </div>
            </div>
            <div class="line">
                <div class="singleCateg" id="Accounts and Finance" style={prop[4]} onClick={change}>
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Accounts and Finance</p>
                        <p class="numCourses">0 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="Marketting" style={prop[5]} onClick={change}>
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Marketting</p>
                        <p class="numCourses">0 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="Business" style={prop[6]} onClick={change}>
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Business</p>
                        <p class="numCourses">0 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="Music" style={prop[7]} onClick={change}>
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Music</p>
                        <p class="numCourses">0 courses</p>
                    </div>
                </div>
            </div>
            <div class="line">
                <div class="singleCateg" id="Health and Fitness" style={prop[8]} onClick={change}>
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">Health and Fitness</p>
                        <p class="numCourses">0 courses</p>
                    </div>
                </div>
                <div class="singleCateg" id="IT and Software" style={prop[9]} onClick={change}>
                    <button class="arrow"><img class="categDes" src={courseDes} alt="ThisIsCourseDes"/></button>
                    <div class="categText">
                        <p class="categName">IT and Software</p>
                        <p class="numCourses">0 courses</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="hr"><hr/></div>

    <div class="courseInfo">
        <h2 class="selectedCategHead">{heading}</h2>
        <div class="courses">
            <div class="coursesVisible" style={{}}>
                {courseData.map((course)=>{
                    if(course.key===key){
                        return (
                            <CourseCard className="specificCourses" num={course.num} key={course.num} img={course.img} cname={course.cname} iname={course.iname} rating={course.rating} certificate={false} inCart={false} loggedIn={state} />
                        );
                    }
                })}
            </div>
        </div>
    </div>
    </div>
    );
}

export default Courses;