import React from "react";
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="foot">
        <div className="text">
            <p className="footText">Our goal is to provide a comfortable learning environment from your PC<br/> and make learning accessible to anyone who is keen to learn.</p>
        </div>
        <div className="list">
            <Link to={"courses"} className="footList">Courses</Link>
            <Link to={"teacher"} className="footList">Be a teacher</Link>
            <Link to={"news"} className="footList">News</Link>
            <Link to={"about"} className="footList">About Us</Link>
        </div>
        <div className="join">
            &copy; 2023 LearnAtHome<br/>
            <a href="https://www.facebook.com/" target="_blank" className="fa fa-facebook"></a>
            <a href="https://in.linkedin.com/" target="_blank" className="fa fa-linkedin"></a>
            <a href="https://twitter.com/i/flow/login" target="_blank" className="fa fa-twitter"></a>
            <a href="https://www.youtube.com/" target="_blank" className="fa fa-youtube"></a>
            <a href="https://www.instagram.com/" target="_blank" className="fa fa-instagram"></a><br/><br/>
            +91 9872975751
        </div>
    </footer>
  );
};

export default Footer;