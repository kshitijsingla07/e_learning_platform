import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Layout";
import { MailContext } from "../../App";

const LoginStudent=()=>{
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

    let blk={display:"block"};
    let non={display:"none"};

    const [disp,setDisp]=React.useState(non);

    const {state,dispatch}=useContext(UserContext);
    const {s,dis}=useContext(MailContext);

    const [logCred,setLogCred]=React.useState({
        email:"",password:""
    })
    let n,v;
    const handleInfo=(e)=>{
        n=e.target.name;
        v=e.target.value;
        setLogCred({...logCred,[n]:v});
    }

    const logData=async(e)=>{
        e.preventDefault();
        const {email,password}=logCred;
        const res=await fetch("/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        });
        const data=await res.json()
        if(res.status===500 || res.status===422 || !res){
            setDisp(blk);
            alert(data.error);  
        }
        else{
            dispatch({type:"USER",payload:true})
            dis({type:"MAIL",payload:email})
            navigate("/mycourse",{replace:true})
        }
    }


    return (
        <div class="regForm">
        <i class="fa fa-user userIcon"></i>
        <p class="heading">Student Log In</p>
        <form method="post">
            <input type="email" name="email" id="email" placeholder="Email" onChange={handleInfo} value={logCred.email} required/><br/>
            <input type={type} name="password" id="password" onChange={handleInfo} placeholder="Password" value={logCred.password} required/>
            <i class={icon} id="togglePassword" onClick={change} style={{marginLeft: "-20px",cursor: "pointer",position: "relative",left: "-30px"}}></i>
            <br/>
            <p className="wrongCred" style={disp}>Wrong email or password</p>
            <button type="submit" class="signBtn" onClick={logData}>Log in</button>
            <p class="terms">By signing in, you agree to <a href="#">terms and conditions</a></p>
        </form>
    </div>
    );
}

export default LoginStudent