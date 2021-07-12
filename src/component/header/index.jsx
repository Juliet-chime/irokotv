import React from "react";
import picture from "../../assest/img/bgimg.jpg";
import iroko from "../../assest/img/irokotv2.png";
import "./index.css";


const Header = () => {
    return (
        <div>
          <nav className = "navbar navbar-light bg-light justify-content-between">
            <a href="#" className = "navbar-brand"> <div className="img-logo">
            <img src={iroko} alt="" className="img-fluid"/>
                </div>
                </a>
            <form action="" className = "form-inline">
                <button className = "btn-nav" type ="submit">LOGIN</button>
            </form>
          </nav>
        </div>
    )
}


export default Header
