import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MailContext } from "../../App";
import CourseCard from "../CourseCard";
import course1 from "../../images/course1.jpg";
import course2 from "../../images/course2.jpg";
import course3 from "../../images/course3.jpg";
import course4 from "../../images/course4.jpg";
import course5 from "../../images/course5.jpg";

const MyCourses=()=>{

    let propNotCurrBtn={backgroundColor:"rgb(232, 232, 232)",color:"grey",borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderbottom:"3px solid black"}
    let propCurrBtn={backgroundColor:"white",color:"black",borderTop:"0.5px solid black",borderLeft:"0.5px solid black",borderRight:"0.5px solid black",borderBottom:"0px",}
    let propNotCurr={display:"none"}
    let propCurr={display:"flex"}

    const [curr,setCurr]=React.useState("on");
    const [propOBtn,setPropOBtn]=React.useState(propCurrBtn);
    const [propCBtn,setPropCBtn]=React.useState(propNotCurrBtn);
    const [propO,setPropO]=React.useState(propCurr);
    const [propC,setPropC]=React.useState(propNotCurr);

    const change=(e)=>{
        var id=e.currentTarget.id;
        if(id!=curr){
            if(id==="com"){
                setPropCBtn(propCurrBtn);
                setPropOBtn(propNotCurrBtn);
                setPropC(propCurr);
                setPropO(propNotCurr);
                setCurr("com");
            }else if(id==="on"){
                setPropOBtn(propCurrBtn);
                setPropCBtn(propNotCurrBtn);
                setPropO(propCurr);
                setPropC(propNotCurr);
                setCurr("on");
            }
        }
    }

    const {s,dis}=useContext(MailContext);

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
    const [courseOnData,setOnData]=React.useState([]);
    const [courseComData,setComData]=React.useState([]);
    const getCourse=async ()=>{
        const resOn=await fetch("/courseOn",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({s})
        });
        var dataOn=await resOn.json();
        const resCom=await fetch("/courseCom",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({s})
        });
        var dataCom=await resCom.json();
        setOnData(dataOn);
        setComData(dataCom);
    }
    useEffect(()=>{
        getCourse();
    },[])

    return (
        <div>
        <div class="mycourses">
        <h1>Your courses</h1>
        <div class="bought">
            <div class="ongoingBtn">
                <button class="viewstu" id="on" onClick={change} style={propOBtn}><h2>Ongoing</h2></button>
            </div>
            <div class="completedBtn">
                <button class="viewstu" id="com" onClick={change} style={propCBtn}><h2>Completed</h2></button>
            </div>
        </div>
        <div class="ongoingList" style={propO}>
            {courseOnData && courseOnData.length && courseOnData.map((course)=>{
                let i=0;
                while(i<courseData.length && courseData[i].num!==course) i++;
                return (
                    <CourseCard key={course} img={courseData[i] && courseData[i].img?courseData[i].img:null} cname={courseData[i] && courseData[i].cname?courseData[i].cname:null} iname={courseData[i] && courseData[i].iname?courseData[i].iname:null} rating={courseData[i] && courseData[i].rating?courseData[i].rating:null} certificate={false} inCart={false}/>
                );
            })}
        </div>
        <div class="completedList" style={propC}>
            {courseComData && courseComData.length && courseComData.map((course)=>{
                let i=0;
                while(i<courseData.length && courseData[i].num!==course) i++;
                return (
                    <CourseCard key={course} img={courseData[i] && courseData[i].img?courseData[i].img:null} cname={courseData[i] && courseData[i].cname?courseData[i].cname:null} iname={courseData[i] && courseData[i].iname?courseData[i].iname:null} rating={courseData[i] && courseData[i].rating?courseData[i].rating:null} certificate={true} inCart={false} />
                );
            })}
        </div>
    </div>
    <div class="buyLink">
        <Link to={"/courses"}><button class="buyBtn">Buy courses</button></Link>
    </div>
    </div>
    );
}

export default MyCourses;