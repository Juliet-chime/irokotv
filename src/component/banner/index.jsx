import React from "react";
import picture from "../../assest/img/bgimg.jpg";
import iroko from "../../assest/img/irokotv2.png";
import irokobanner from "../../assest/img/banner-iroko.png";
import "./index.css";


const Banner = () => {
    return (
        <div>
         <div>
            <div className="banner-holder">
               <div className="banner-text">
                 <div className="banner-img">
                   <img src={irokobanner} alt="" />
                 </div>
                 <p>
                 Watch thousands of movies and series on all your devices, for only ₦10000.00.
                 </p>

                 <form action="">
                   <input type="email" placeholder="Email address" />
                   <button>Start Watching</button>
                 </form>
                 <h3>Cancel anytime</h3>
               </div>
            </div>
         </div>
        </div>
    )
}


export default Banner
