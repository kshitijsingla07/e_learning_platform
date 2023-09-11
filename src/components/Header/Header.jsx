import React from "react";
import iconImage from "../../images/icon.png";
import "../../index.css";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
        <nav className="navbar">
            <div className="left">
                <img src={iconImage} alt="WebsiteLogo" width="55px"/>
                <h1 class="heading"><Link to={"/"}>Learn At Home</Link></h1>
            </div>
            <div className="center">
                <div className="dropdown">
                    <button type="submit" className="categories">Categories</button>
                    <div className="categContent">
                        <Link to={"/courses"} className="categLinks">Web Development</Link><hr/>
                        <Link to={"/courses"} className="categLinks">App Development</Link><hr/>
                        <Link to={"/courses"} className="categLinks">Finance/Accounting</Link><hr/>
                        <Link to={"/courses"} className="categLinks">IT and Software</Link><hr/>
                        <Link to={"/courses"} className="categLinks">Design</Link><hr/>
                        <Link to={"/courses"} className="categLinks">Marketing</Link><hr/>
                        <Link to={"/courses"} className="categLinks">Business</Link><hr/>
                        <Link to={"/courses"} className="categLinks">Data Science</Link><hr/>
                        <Link to={"/courses"} className="categLinks">Health and Fitness</Link><hr/>
                        <Link to={"/courses"} className="categLinks">Music</Link><hr/>
                    </div>
                </div>
                <div className="searchBar">
                    <div className="searchType">
                        <input className="search" type="text" name="search"
                        placeholder="Search courses ..."/>
                    </div>
                    <div className="searchIcon">
                        <Link to={"/courses"}><button type="submit" class="button"><i class="fa fa-search"></i></button></Link>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="log">
                    <Link to={"stulogin"}><button type="submit" class="register">Log In</button></Link>
                    <Link to={"stusignup"}><button type="submit" class="register">Sign Up</button></Link>
                </div>
                <button type="submit" class="forInst"><Link to={"teacher"}>Join to teach</Link></button>
            </div>
        </nav>
    </header>
  );
};

export default Header;