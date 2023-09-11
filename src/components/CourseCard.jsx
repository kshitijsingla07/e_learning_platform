import React, { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { MailContext } from "../App";

const CourseCard=(props)=>{

    const {s,dis}=useContext(MailContext);
    const navigate=useNavigate();
    const rat=(n)=>{
        var st="";
        for(let i=0;i<n;i++) st=st+"⭐";
        return st;
    }
    const buyThis=async (e)=>{
        e.preventDefault();
        var id=e.target.id;
        const res=await fetch("/addCart",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({s,id})
        })
        var data=await res.json();
        alert(data.message);
    }
    const del=async(e)=>{
        if(!window.confirm("Are you sure you want to remove from cart ?")) return;
        e.preventDefault();
        var id=e.target.id;
        const res=await fetch("/delCart",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({s,id})
        })
        var data=await res.json();
        navigate("/mycourse",{replace:true})
    }
    return (
        <div class="courseContent">
            <img src={props.img} alt="course1"/>
            <p class="courseName"><Link to={"/courses"}>{props.cname}</Link></p>
            <p class="instName">{props.iname}</p>
            {props.certificate?(<button class="certificate">View certificate</button>):(props.inCart?(<div class="forDel">
                    <button class="buyCartCourse">Buy Now</button>
                    <button class="delCourseBtn"><i class="fa fa-trash-o" style={{fontSize: "30px"}} id={props.num} onClick={del}></i></button>
                </div>):(<div class="rating">{rat(props.rating)}</div>))}
            {props.loggedIn?(<button class="buyCartCourse" id={props.num} style={{width:"100%",marginTop:"-10px"}} onClick={buyThis}>Add to Cart</button>):null}
        </div>
    );
}

export default CourseCard;