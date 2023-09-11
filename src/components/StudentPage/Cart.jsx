import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MailContext } from "../../App";
import CourseCard from "../CourseCard";
import course1 from "../../images/course1.jpg";
import course2 from "../../images/course2.jpg";
import course3 from "../../images/course3.jpg";
import course4 from "../../images/course4.jpg";
import course5 from "../../images/course5.jpg";

const Cart=()=>{

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

     const [cartData,setCartData]=React.useState([]);
     const getCourse=async ()=>{
        const resOn=await fetch("/cart",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({s})
        });
        var dataCart=await resOn.json();
        setCartData(dataCart);
    }
    useEffect(()=>{
        getCourse();
    },[])

    return (
        <div class="myCartCourses">
        <i class="fa fa-shopping-cart" style={{fontSize: "100px",color: "#01427a"}}></i>
        <div class="ongoingList cartList">
            {cartData && cartData.length && cartData.map((course)=>{
                let i=0;
                while(i<courseData.length && courseData[i].num!==course) i++;
                if(i==courseData.length) return;
                return (
                    <CourseCard num={course} key={course} img={courseData[i] && courseData[i].img?courseData[i].img:null} cname={courseData[i] && courseData[i].cname?courseData[i].cname:null} iname={courseData[i] && courseData[i].iname?courseData[i].iname:null} rating={courseData[i] && courseData[i].rating?courseData[i].rating:null} certificate={false} inCart={true} />
                );
            })}
        </div>
    </div>
    );
}

export default Cart;