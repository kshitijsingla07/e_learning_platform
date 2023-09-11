import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Layout";
import { MailContext } from "../../App";

const SignupStudent=()=>{
    const navigate=useNavigate();
    const [type,setType]=React.useState("password");
    const [icon,setIcon]=React.useState("fa fa-eye-slash");
    function change(){
        if(type==="password"){
            setType("text");
            setIcon("fa fa-eye");
        }else{
            setType("password");
            setIcon("fa fa-eye-slash");
        }
    }

    const {state,dispatch}=useContext(UserContext);
    const {s,dis}=useContext(MailContext);

    const [user,setUser]=React.useState({
        name:"",contact:"",address:"",email:"",password:""
    })
    let n,v;
    const handleInfo=(e)=>{
        n=e.target.name;
        v=e.target.value;
        setUser({...user,[n]:v});
    }

    const postData=async(e)=>{
        e.preventDefault();
        const {name,contact,address,email,password}=user;
        const res=await fetch("/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,contact,address,email,password})
        });
        var data=await res.json();
        if(res.status===500 || res.status===422 || !res){
            alert(data.error);
        }else{
            dispatch({type:"USER",payload:true})
            dis({type:"MAIL",payload:email})
            navigate("/mycourse",{replace:true})
        }
    }

    return (
        <div class="regForm">
        <p class="heading">Student Sign Up</p>
        <form method="POST">
            <input type="text" name="name" id="name" value={user.name} placeholder="Full Name" onChange={handleInfo} required/><br/>
            <input type="text" name="contact" id="contact" value={user.contact} minLength="10" maxLength="10" placeholder="Contact number" onChange={handleInfo} required/><br/>
            <textarea name="address" id="address" cols="30" rows="3" value={user.address} placeholder="Address" onChange={handleInfo}></textarea><br/>
            <input type="email" name="email" id="email" placeholder="Email" value={user.email} onChange={handleInfo} required/><br/>
            <input type={type} name="password" id="password" value={user.password} placeholder="Password" onChange={handleInfo} required/>
            <i class={icon} id="togglePassword" onClick={change} style={{marginLeft: "-20px",cursor: "pointer",position: "relative",left: "-30px"}}></i>
            <br/>
            <button type="submit" class="signBtn" onClick={postData}>Sign Up</button>
            <p class="terms">By signing up, you agree to <a href="#">terms and conditions</a></p>
        </form>
    </div>
    );
}

export default SignupStudent;