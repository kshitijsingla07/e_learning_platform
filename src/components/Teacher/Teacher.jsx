import React from "react";
import instructor from "../../images/instructor.jpg";

const Teacher=()=>{

    const [dis,setDis]=React.useState([{display:"block"},{display:"none"},{display:"none"}]);
    function changeDis(e){
        let id=e.currentTarget.id[3];
        let property=dis.slice();
        if(property[id].display==="none"){
            property[id]={display:"block"};
        }
        else{
            property[id]={display:"none"};
        }
        setDis(property);
    }

    return (
        <div>
        <div class="frontImage">
        <div class="left">
            <div class="lHeading teacherHeading">Become an<br/>Instructor</div>
            <p class="lText teacherText">We provide tools and skills to help you distribute knowledge.Teachers from renowned universities teach millions of students here.</p>
            <a href="#"><button type="submit" class="forCourses">Get Started</button></a>
        </div>
        <div class="right">
            <div class="imagePart">
                <img class="boyLearning teacher" src={instructor} alt="front image"/>
            </div>
            <div class="colorPart"></div>
        </div>
    </div>

    <div class="steps">
        <h1 class="stepHeading">What you need to do</h1>
        <div class="stepContent">
            <div class="step s1">
                <button onClick={changeDis} class="stepBtn jsStep" id="clk0">Make whole course curriculum</button>
                <button onClick={changeDis} class="jsStep" id="clk0"><i class="fa fa-angle-up updown1"></i></button><br/>
                <div class="todo" id="todo0" style={dis[0]}>
                    <p>Select a skill which is your passion and expertise. Choose the topics related to that skill that you want to teach. The way of teaching and including assignments and tests is upto your creativity.</p>
                    <br/><br/>
                    <div class="help">
                        <h6 class="stepHelpHead">Our contibution</h6>
                        <p>We can assist you in making assignments and tests for your course. Our instructor dashboard will help you to keep things organized.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="step s2">
                <button onClick={changeDis} class="stepBtn jsStep" id="clk1">Record all lectures</button>
                <button onClick={changeDis} class="jsStep" id="clk1"><i class="fa fa-angle-down updown2"></i></button><br/>
                <div class="todo" id="todo1" style={dis[1]}>
                    <p>All you need is a high quality camera (smartphone or DSLR) and a good microphone. Record your lectures with appropriate and good content. You can also record pen-paper problem solving lectures as well as laptop screen sharing for coding courses.</p>
                    <br/><br/>
                    <div class="help">
                        <h6 class="stepHelpHead">Our contibution</h6>
                        <p>We will be here to provide continuous feedback on your recorded lectures to provide only quality content to users.</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="step s3">
                <button onClick={changeDis} class="stepBtn jsStep" id="clk2">Upload your course</button>
                <button onClick={changeDis} class="jsStep" id="clk2"><i class="fa fa-angle-down updown3"></i></button><br/>
                <div class="todo" id="todo2" style={dis[2]}>
                    <p>Now you are good to go. Launch your course at a reasonable price and gather your ratings and reviews. You course will be available to the students on our site.</p>
                    <br/><br/>
                    <div class="help">
                        <h6 class="stepHelpHead">Our contibution</h6>
                        <p>We will make a dashboard for you to manage and update your uploaded courses and see student's ratings and reviews.</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    </div>
    </div>
    );
}

export default Teacher;