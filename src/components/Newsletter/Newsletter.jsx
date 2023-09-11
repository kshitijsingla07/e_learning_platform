import React from "react";
import "./newsletter.css";
import { Container} from "reactstrap";

const Newsletter = () => {

  const [useremail,setMail]=React.useState({
      email:"",
  })
  let n,v;
  const handleInfo=(e)=>{
      n=e.target.name;
      v=e.target.value;
      setMail({...useremail,[n]:v});
  }

  const subs=async(e)=>{
        e.preventDefault();
        const {email}=useremail;
        const res=await fetch("/news",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email})
        });
        var data=await res.json();
        if(res.status===422 || !res){
            alert(data.error);
        }else{
            alert(data.message);
        }
  }

  return (
    <section className="NewsSubs">
      <Container className="newsletter">
          <div className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input type="email" name="email" value={useremail.email} placeholder="Email" onChange={handleInfo} />
              <button className="btn" onClick={subs}>Subscribe</button>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;