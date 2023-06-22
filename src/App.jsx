import { useEffect, useState } from "react";
import "./App.css";

import "./assets/css/animate.css";
import "./assets/css/hover-min.css";
import "./assets/css/datepicker.css";

import "./assets/css/owl.theme.default.min.css";

import "./assets/css/bootstrap.min.css";
import "./assets/css/bootsnav.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

import imgsrc from "./assets/images/packages/p1.jpg";
import s1 from "./assets/images/service/s1.jpg";
import s2 from "./assets/images/service/s2.png";
import s3 from "./assets/images/service/s3.png";
import g1 from "./assets/images/gallary/g1.jpg";
import g2 from "./assets/images/gallary/g2.jpg";
import g3 from "./assets/images/gallary/g3.jpg";
import g4 from "./assets/images/gallary/g4.jpg";
import g5 from "./assets/images/gallary/g5.jpg";
import g6 from "./assets/images/gallary/g6.jpg";
// import { packages } from "./component/Example";
import Package from "./component/Package";
import Payment from "./component/Payment";
import { getPackages } from "./service/user.service.jsx";

function App() {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const _package = await getPackages();
      setPackages(_package);
    }
    fetchData();
  }, []);

  return (
    <>
      {" "}
      <main>
        <header className="top-area">
          <div
            className="header-area"
            style={{
              position: "fixed!important",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <div className="logo">
                    <a href="index.html">
                      {" "}
                      tour<span>Nest</span>{" "}
                    </a>
                  </div>
                </div>
                <div className="col-sm-10">
                  <div className="main-menu">
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                      >
                        <i className="fa fa-bars"></i>
                      </button>
                    </div>
                    <div className="collapse navbar-collapse">
                      <ul className="nav navbar-nav navbar-right">
                        <li className="smooth-menu">
                          <a href="#home">home</a>
                        </li>
                        <li className="smooth-menu">
                          <a href="#gallery">Destination</a>
                        </li>
                        <li className="smooth-menu">
                          <a href="#pack">Packages </a>
                        </li>
                        <li className="smooth-menu">
                          <a href="#spo">Special Offers</a>
                        </li>
                        <li className="smooth-menu">
                          <a href="#blog">blog</a>
                        </li>
                        <li className="smooth-menu">
                          <a href="#subs">subscription</a>
                        </li>
                        <li>
                          <button className="book-btn">book now</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-border"></div>
            </div>
          </div>
        </header>
        <section id="home" className="about-us">
          <div className="container">
            <div className="about-us-content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="single-about-us">
                    <div className="about-us-txt">
                      <h2>Explore the Beauty of the Beautiful World</h2>
                      <div className="about-btn">
                        <button className="about-view">explore now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-0">
                  <div className="single-about-us"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="travel-box">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="single-travel-boxes"
                  style={{
                    borderRadius: "1em",
                  }}
                >
                  <div id="desc-tabs" className="desc-tabs">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active">
                        <a
                          href="#tours"
                          aria-controls="tours"
                          role="tab"
                          data-toggle="tab"
                          style={{
                            borderRadius: "0.5em 0 0 0 ",
                            margin: "0",
                          }}
                        >
                          <i className="fa fa-tree"></i>
                          tours
                        </a>
                      </li>

                      <li
                        role="presentation"
                        style={{
                          bordeRadius: "0 0 0 0! important",
                          margin: "0",
                          backgroundColor: "#4361ee",
                        }}
                      >
                        <a
                          href="#hotels"
                          aria-controls="hotels"
                          role="tab"
                          data-toggle="tab"
                          style={{
                            bordeRadius: "0 0 0 0! important",
                            margin: "0",
                          }}
                        >
                          <i className="fa fa-building"></i>
                          hotels
                        </a>
                      </li>

                      <li
                        role="presentation"
                        style={{
                          bordeRadius: "0 0 0 0! important",
                          margin: "0",
                          backgroundColor: "#4361ee",
                        }}
                      >
                        <a
                          href="#flights"
                          aria-controls="flights"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i className="fa fa-plane"></i>
                          flights
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane active fade in"
                        id="tours"
                      >
                        <div className="tab-para">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="single-tab-select-box">
                                <h2>destination</h2>

                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">
                                      enter your destination country
                                    </option>

                                    <option value="turkey">turkey</option>

                                    <option value="russia">russia</option>
                                    <option value="egept">egypt</option>
                                  </select>
                                </div>

                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">
                                      enter your destination location
                                    </option>

                                    <option value="istambul">istambul</option>

                                    <option value="mosko">mosko</option>
                                    <option value="cairo">cairo</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>check in</h2>
                                <div className="travel-check-icon">
                                  <form action="#">
                                    <input
                                      type="text"
                                      name="check_in"
                                      className="form-control"
                                      data-toggle="datepicker"
                                      placeholder="12 -01 - 2017 "
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>check out</h2>
                                <div className="travel-check-icon">
                                  <form action="#">
                                    <input
                                      type="text"
                                      name="check_out"
                                      className="form-control"
                                      data-toggle="datepicker"
                                      placeholder="22 -01 - 2017 "
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-1 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>duration</h2>
                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">5</option>

                                    <option value="10">10</option>

                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-1 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>members</h2>
                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">1</option>

                                    <option value="2">2</option>

                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-sm-5">
                              <div className="travel-budget">
                                <div className="row">
                                  <div className="co-md-9 col-sm-8">
                                    <div className="travel-filter">
                                      <div className="info_widget">
                                        <div className="price_filter">
                                          <div id="slider-range"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clo-sm-7">
                              <div className="about-btn travel-mrt-0 pull-right">
                                <button
                                  className="about-view travel-btn"
                                  style={{
                                    backgroundColor: "#4361ee",
                                    fontWeight: 500,
                                    fontSize: "1.1em",
                                  }}
                                >
                                  SEARCH
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        role="tabpanel"
                        className="tab-pane fade in"
                        id="hotels"
                      >
                        <div className="tab-para">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="single-tab-select-box">
                                <h2>destination</h2>

                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">
                                      enter your destination country
                                    </option>

                                    <option value="turkey">turkey</option>

                                    <option value="russia">russia</option>
                                    <option value="egept">egypt</option>
                                  </select>
                                </div>

                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">
                                      enter your destination location
                                    </option>

                                    <option value="istambul">istambul</option>

                                    <option value="mosko">mosko</option>
                                    <option value="cairo">cairo</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>check in</h2>
                                <div className="travel-check-icon">
                                  <form action="#">
                                    <input
                                      type="text"
                                      name="check_in"
                                      className="form-control"
                                      data-toggle="datepicker"
                                      placeholder="12 -01 - 2017 "
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>check out</h2>
                                <div className="travel-check-icon">
                                  <form action="#">
                                    <input
                                      type="text"
                                      name="check_out"
                                      className="form-control"
                                      data-toggle="datepicker"
                                      placeholder="22 -01 - 2017 "
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-1 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>duration</h2>
                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">5</option>

                                    <option value="10">10</option>

                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-1 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>members</h2>
                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">1</option>

                                    <option value="2">2</option>

                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-sm-5"></div>
                            <div className="clo-sm-7">
                              <div className="about-btn travel-mrt-0 pull-right">
                                <button className="about-view travel-btn">
                                  search
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        role="tabpanel"
                        className="tab-pane fade in"
                        id="flights"
                      >
                        <div className="tab-para">
                          <div className="trip-circle">
                            <div className="single-trip-circle">
                              <input type="radio" id="radio01" name="radio" />
                              <span className="round-boarder">
                                <span className="round-boarder1"></span>{" "}
                              </span>
                              round trip
                            </div>
                            <div className="single-trip-circle">
                              <input type="radio" id="radio02" name="radio" />
                              <span className="round-boarder">
                                <span className="round-boarder1"></span>{" "}
                              </span>
                              on way
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="single-tab-select-box">
                                <h2>from</h2>

                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">
                                      enter your location
                                    </option>

                                    <option value="turkey">turkey</option>

                                    <option value="russia">russia</option>
                                    <option value="egept">egypt</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>departure</h2>
                                <div className="travel-check-icon">
                                  <form action="#">
                                    <input
                                      type="text"
                                      name="departure"
                                      className="form-control"
                                      data-toggle="datepicker"
                                      placeholder="12 -01 - 2017 "
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>return</h2>
                                <div className="travel-check-icon">
                                  <form action="#">
                                    <input
                                      type="text"
                                      name="return"
                                      className="form-control"
                                      data-toggle="datepicker"
                                      placeholder="22 -01 - 2017 "
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-1 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>adults</h2>
                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">5</option>

                                    <option value="10">10</option>

                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-1 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>childs</h2>
                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">1</option>

                                    <option value="2">2</option>

                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="single-tab-select-box">
                                <h2>to</h2>

                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">
                                      enter your destination location
                                    </option>

                                    <option value="istambul">istambul</option>

                                    <option value="mosko">mosko</option>
                                    <option value="cairo">cairo</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>class</h2>
                                <div className="travel-select-icon">
                                  <select className="form-control">
                                    <option value="default">enter class</option>

                                    <option value="A">A</option>

                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="clo-sm-5">
                              <div className="about-btn pull-right">
                                <button className="about-view travel-btn">
                                  search
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section id="service" class="service">
          <div class="container">
            <div class="service-counter text-center">
              <div class="col-md-4 col-sm-4">
                <div class="single-service-box">
                  <div class="service-img">
                    <img src={s1} alt="service-icon" />
                  </div>
                  <div class="service-content">
                    <h2>
                      <a href="#"> Choose amazing tour packages </a>
                    </h2>
                    <p>
                      Must use our tour Planner for breathtaking tour packages!
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4">
                <div class="single-service-box">
                  <div class="service-img">
                    <img src={s2} alt="service-icon" />
                  </div>
                  <div class="service-content">
                    <h2>
                      <a href="#"> book top class hotel </a>
                    </h2>
                    <p>
                      This amazing site helps you book the best hotels all
                      around the world!
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4">
                <div class="single-service-box">
                  <div class="statistics-img">
                    <img src={s3} alt="service-icon" />
                  </div>
                  <div class="service-content">
                    <h2>
                      <a href="#"> online flight booking </a>
                    </h2>
                    <p>Book your flight instantly using TourNest!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" class="gallery">
          <div class="container">
            <div class="gallery-details">
              <div class="gallary-header text-center">
                <h2>top destination</h2>
                <p>Where do you wanna go? How much you wanna explore?</p>
              </div>
              <div
                class="gallery-box"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div class="gallery-content">
                  <div class="filtr-container">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="filtr-item">
                          <img src={g1} alt="portfolio image" />
                          <div class="item-title">
                            <a href="#"> china </a>
                            <p>
                              <span>20 tours</span>
                              <span>15 places</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="filtr-item">
                          <img src={g2} alt="portfolio image" />
                          <div class="item-title">
                            <a href="#"> venuzuala </a>
                            <p>
                              <span>12 tours</span>
                              <span>9 places</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="filtr-item">
                          <img src={g3} alt="portfolio image" />
                          <div class="item-title">
                            <a href="#"> brazil </a>
                            <p>
                              <span>25 tours</span>
                              <span>10 places</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="filtr-item">
                          <img src={g4} alt="portfolio image" />
                          <div class="item-title">
                            <a href="#"> australia </a>
                            <p>
                              <span>18 tours</span>
                              <span>9 places</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="filtr-item">
                          <img src={g5} alt="portfolio image" />
                          <div class="item-title">
                            <a href="#"> netharlands </a>
                            <p>
                              <span>14 tours</span>
                              <span>12 places</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-8">
                        <div class="filtr-item">
                          <img src={g6} alt="portfolio image" />
                          <div class="item-title">
                            <a href="#"> turkey </a>
                            <p>
                              <span>14 tours</span>
                              <span>6 places</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pack" className="packages">
          <div
            className=""
            style={{
              margin: "1em",
            }}
          >
            <div
              className="gallary-header text-center"
              style={{
                marginTop: "0!important",
              }}
            >
              <h2>Special packages</h2>
              <p>There are many places to visit in the world, but we have</p>
            </div>
            <div className="packages-content">
              <div
                className="row"
                style={{
                  width: "100%",
                }}
              >
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  {packages &&
                    packages.map((item) => {
                      return (
                        <Package
                          key={item.id}
                          imgsrc={item.imgsrc}
                          title={item.title}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer-copyright">
          <div class="container">
            <div class="footer-content">
              <div class="row">
                <div class="col-sm-3">
                  <div class="single-footer-item">
                    <div class="footer-logo">
                      <a href="index.html">
                        {" "}
                        tour<span>Nest</span>{" "}
                      </a>
                      <p>best travel agency</p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="single-footer-item">
                    <h2>link</h2>
                    <div class="single-footer-txt">
                      <p>
                        <a href="#">home</a>
                      </p>
                      <p>
                        <a href="#">destination</a>
                      </p>
                      <p>
                        <a href="#">spacial packages</a>
                      </p>
                      <p>
                        <a href="#">special offers</a>
                      </p>
                      <p>
                        <a href="#">blog</a>
                      </p>
                      <p>
                        <a href="#">contacts</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="single-footer-item">
                    <h2>popular destination</h2>
                    <div class="single-footer-txt">
                      <p>
                        <a href="#">china</a>
                      </p>
                      <p>
                        <a href="#">venezuela</a>
                      </p>
                      <p>
                        <a href="#">brazil</a>
                      </p>
                      <p>
                        <a href="#">australia</a>
                      </p>
                      <p>
                        <a href="#">london</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="single-footer-item text-center">
                    <h2 class="text-left">contacts</h2>
                    <div class="single-footer-txt text-left">
                      <p>+1 (300) 1234 6543</p>
                      <p class="foot-email">
                        <a href="#">info@tnest.com</a>
                      </p>
                      <p>North Warnner Park 336/A</p>
                      <p>Newyork, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="foot-icons">
              <ul class="footer-social-links list-inline list-unstyled">
                <li>
                  <a href="#" target="_blank" class="foot-icon-bg-1">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" class="foot-icon-bg-2">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" class="foot-icon-bg-3">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <p>
                &copy; 2017 <a href="https://www.themesine.com">ThemeSINE</a>.
                All Right Reserved
              </p>
            </div>
            <div id="scroll-Top">
              <i
                class="fa fa-angle-double-up return-to-top"
                id="scroll-top"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Back to Top"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
