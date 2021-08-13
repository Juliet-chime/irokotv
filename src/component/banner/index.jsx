import React from "react";
import irokobanner from "../../assest/img/banner-iroko.png";
import "./index.css";
import Button from "../button/button";
import Header from "../header";
import pictureperfect from "../../assest/img/pictureperfect.png";
import moviescreen from "../../assest/img/moviescreen.png";
import movielist from "../../assest/img/movielist.png";
import bigscreen from "../../assest/img/big-screen.png";
import mediumscreen from "../../assest/img/medium-screen.png";
import mobile from "../../assest/img/mobile.png";
import Accordion from "../accordion/accordion";

const Page = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="banner-holder container-fluid">
          <div className="banner-text">
            <div className="banner-img">
              <img src={irokobanner} alt="" />
            </div>
            <p>
              Watch thousands of movies and series on all your devices, for only
              ₦10000.00.
            </p>

            <form action="">
              <input type="email" placeholder="Email address" />
              <button>
                <Button
                  text="START WATCHING"
                  type="submit"
                  btnstyle={{
                    width: "100%",
                    height: "57px",
                    padding: "0px 20px",
                    backgroundColor: "#be1946",
                  }}
                />
              </button>
            </form>
            <h3>Cancel anytime</h3>
          </div>
        </div>
      </section>
      <section>
        <div className="Binge-series container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="Binge-series1">
                <h1>Binge-Worthy Series</h1>
                <p>
                  From scandalous Lagos dramas, to village and crime stories,
                  we’ve got the best African stories to keep you hooked.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="Binge-seriesimg">
                <img src={pictureperfect} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="Binge-hit container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="Binge-seriesimg">
                <img src={moviescreen} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className=" Binge-series1">
                <h1>Hit Movies</h1>
                <p>
                  A massive movie library complete with Nollywood blockbusters
                  and originals you won't find anywhere else
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="toptalent-holder container-fluid">
          <div className="banner-text">
            <h1 className="toptalent">Top Talent</h1>
            <p className="toptalent2">
              Discover movies and series starring your favorite Nollywood
              personalities.
            </p>

            <form action="">
              <input type="email" placeholder="Email address" />
              <button>
                <Button
                  text="START WATCHING"
                  type="submit"
                  btnstyle={{
                    width: "100%",
                    height: "57px",
                    padding: "0px 20px",
                    backgroundColor: "#be1946",
                  }}
                />
              </button>
            </form>
            <h3>Cancel anytime</h3>
          </div>
        </div>
      </section>
      <section>
        <div className="Binge-hit container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="Binge-series1">
                <h1>Watch Offline</h1>
                <p>
                  Download your favorite titles so you’ll always have something
                  to watch without using all your data.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="watchoffline">
                <img src={movielist} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid mobile-platform">
          <div className="row">
            <div className="col device">
              <h1>All Your Devices</h1>
              <p>
                Watch wherever you are on an ever-expanding list of platforms
                including Web, iOS, Android, and Apple TV.
              </p>
            </div>
          </div>

          <div className="d-flex flex-row mb-3 device-img">
            <div className="col-md-4 col-sm-12">
              <div className="device-mobile">
                <img src={bigscreen} alt="" />
                <h5>TV</h5>
                <p>Chromecast</p>
                <p>AppleTV</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 align-self-center">
              <div className="device-mobile">
                <img src={mediumscreen} alt="" />
                <h5>Computer</h5>
                <p>Chrome OS</p>
                <p>Mac OS</p>
                <p>Window PC</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 align-self-center">
              <div className="mobile">
                <img src={mobile} alt="" />
                <h5>Mobile &amp; Tablet</h5>
                <p>Android</p>
                <p>iPhone</p>
                <p>iPad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="movieimage container-fluid">
          <div className="banner-text">
            <p className="movieimage-text">
              Watch thousands of movies and series on all your devices, for only
              ₦10000.00.
            </p>

            <form action="">
              <input type="email" placeholder="Email address" />
              <button>
                <Button
                  text="START WATCHING"
                  type="submit"
                  btnstyle={{
                    width: "100%",
                    height: "57px",
                    padding: "0px 20px",
                    backgroundColor: "#be1946",
                  }}
                />
              </button>
            </form>
            <h3>Cancel anytime</h3>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid frequently-asked-question">
          <div className="row">
            <div className="col-md-12">
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
          <Accordion />
        </div>
      </section>
      <section className="footer">
        <div className="row container-fluid">
          <div className="col-md-8 col-sm-12 footer-about">
            <div className="row">
              <ul class="nav nav-pills">
                <li class="nav-item home">
                    HOME
                </li>
                <li class="nav-item">
                    ABOUT US
                </li>
                <li class="nav-item">
                    FAQ
                </li>
                <li class="nav-item">
                    CONTACT US
                </li>
                <li class="nav-item">
                    ANDROID APP
                </li>
                <li class="nav-item">
                    IPHONE APP
                </li>
              </ul>
            </div>
            <div className="row">
              <ul class="nav nav-pills">
                <li class="nav-item home">
                    TERMS OF USE
                </li>
                <li class="nav-item">
                    PRIVACY POLICY
                </li>
              </ul>
            </div>
            <div className="row">
              <p>© IROKOTV 2021</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 footer-social">
            <div className="row">
              <ul class="nav nav-pills">
                <li>
                    <i class="fa fa-instagram"></i>
                </li>
                <li>
                    <i class="fa fa-facebook"></i>
                </li>
                <li>
                    <i class="fa fa-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
