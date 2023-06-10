import { useState } from "react";
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
import { packages } from "./component/Example";
import Package from "./component/Package";
import Payment from "./component/Payment";

function App() {
  return (
    <>
      {" "}
      <main>
        <header className="top-area">
          <div className="header-area">
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
        <section className="travel-box">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="single-travel-boxes">
                  <div id="desc-tabs" className="desc-tabs">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active">
                        <a
                          href="#tours"
                          aria-controls="tours"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i className="fa fa-tree"></i>
                          tours
                        </a>
                      </li>

                      <li role="presentation">
                        <a
                          href="#hotels"
                          aria-controls="hotels"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i className="fa fa-building"></i>
                          hotels
                        </a>
                      </li>

                      <li role="presentation">
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
                                  <div className="col-md-3 col-sm-4">
                                    <h3>budget :</h3>
                                  </div>
                                  <div className="co-md-9 col-sm-8">
                                    <div className="travel-filter">
                                      <div className="info_widget">
                                        <div className="price_filter">
                                          <div id="slider-range"></div>

                                          <div className="price_slider_amount">
                                            <input
                                              type="text"
                                              id="amount"
                                              name="price"
                                              placeholder="Add Your Price"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
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
        </section>
        <section id="pack" className="packages">
          <div className="container">
            <div className="gallary-header text-center">
              <h2>special packages</h2>
              <p>
                Duis aute irure dolor in velit esse cillum dolore eu fugiat
                nulla.
              </p>
            </div>
            <div className="packages-content">
              <div className="row">
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {packages &&
                    packages.map((item) => {
                      return <Package key={item.id} {...item} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
