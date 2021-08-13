import React from "react";
import iroko from "../../assest/img/irokotv2.png";
import "./index.css";
import Button from "../button/button";


const Header = () => {
    return (
        <div>
          <nav className = "navbar navbar-light iroko-header justify-content-between">
           <div className="img-logo">
            <img src={iroko} alt="" className="img-fluid"/>
            </div>
            <form action="" className = "form-inline">
            <div className='btn-head'>
            <Button 
             text='LOGIN'
             type='submit'
             btnstyle={{height:'30px', padding: '0px 20px'}}
            />
            </div>
            </form>
          </nav>
        </div>
    )
}


export default Header
