import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeTest() {
  return (
    <>
      <>
        {/* Header Section Start */}
        <header id="hero-area" data-stellar-background-ratio="0.5">
          {/* Navbar Start */}
          <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <a href="index.html" className="navbar-brand">
                  <img className="img-fulid" src="img/logo.png" alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#main-navbar"
                  aria-controls="main-navbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="lnr lnr-menu" />
                </button>
              </div>
              <div className="collapse navbar-collapse" id="main-navbar">
                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#hero-area">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#portfolios">
                      Works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <NavLink  to="/auth/register" className="nav-link page-scroll" href="#contact">
                      Signup
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {/* Mobile Menu Start */}
            <ul className="mobile-menu">
              <li>
                <a className="page-scroll" href="#hero-area">
                  Home
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#portfolios">
                  Works
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            {/* Mobile Menu End */}
          </nav>
          {/* Navbar End */}
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-10">
                <div className="contents text-center">
                  <h1
                    className="wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="0.3s"
                  >
                    Mate - Free Parallax Website Template
                  </h1>
                  <p
                    className="lead  wow fadeIn"
                    data-wow-duration="1000ms"
                    data-wow-delay="400ms"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                  <a
                    href="#"
                    className="btn btn-common wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="400ms"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header Section End */}
        {/* Services Section Start */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-header">
              <h2
                className="section-title wow fadeIn"
                data-wow-duration="1000ms"
                data-wow-delay="0.3s"
              >
                Our Services
              </h2>
              <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
              <p
                className="section-subtitle wow fadeIn"
                data-wow-duration="1000ms"
                data-wow-delay="0.3s"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
                dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                  <div className="icon">
                    <i className="lnr lnr-pencil" />
                  </div>
                  <h4>Content Writing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="item-boxes wow fadeInDown" data-wow-delay="0.8s">
                  <div className="icon">
                    <i className="lnr lnr-code" />
                  </div>
                  <h4>Web Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                  <div className="icon">
                    <i className="lnr lnr-mustache" />
                  </div>
                  <h4>Business Consultancy</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section End */}
        {/* Features Section Start */}
        <section
          id="features"
          className="section"
          data-stellar-background-ratio="0.2"
        >
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Some Features</h2>
              <hr className="lines" />
              <p className="section-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
                dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-12 col-xs-12">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-xs-12 box-item">
                      <span className="icon">
                        <i className="lnr lnr-rocket" />
                      </span>
                      <div className="text">
                        <h4>Bootstrap 4 Based</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12 box-item">
                      <span className="icon">
                        <i className="lnr lnr-laptop-phone" />
                      </span>
                      <div className="text">
                        <h4>Fully Responsive</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12 box-item">
                      <span className="icon">
                        <i className="lnr lnr-layers" />
                      </span>
                      <div className="text">
                        <h4>Parallax Background</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12 box-item">
                      <span className="icon">
                        <i className="lnr lnr-cog" />
                      </span>
                      <div className="text">
                        <h4>Easy to Customize</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xs-12">
                <div className="show-box">
                  <img className="img-fulid" src="img/features/feature.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section End */}
        {/* Portfolio Section */}
        <section id="portfolios" className="section">
          {/* Container Starts */}
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Portfolio</h2>
              <hr className="lines" />
              <p className="section-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
                dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* Portfolio Controller/Buttons */}
                <div className="controls text-center">
                  <a className="filter active btn btn-common" data-filter="all">
                    All
                  </a>
                  <a className="filter btn btn-common" data-filter=".design">
                    Design
                  </a>
                  <a className="filter btn btn-common" data-filter=".development">
                    Development
                  </a>
                  <a className="filter btn btn-common" data-filter=".print">
                    Print
                  </a>
                </div>
                {/* Portfolio Controller/Buttons Ends*/}
              </div>
              {/* Portfolio Recent Projects */}
              <div id="portfolio" className="row">
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="img/portfolio/img1.jpg" alt="" />
                      <a className="overlay lightbox" href="img/portfolio/img1.jpg">
                        <i className="lnr lnr-eye item-icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="img/portfolio/img2.jpg" alt="" />
                      <a className="overlay lightbox" href="img/portfolio/img2.jpg">
                        <i className="lnr lnr-eye item-icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="img/portfolio/img3.jpg" alt="" />
                      <a className="overlay lightbox" href="img/portfolio/img3.jpg">
                        <i className="lnr lnr-eye item-icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="img/portfolio/img4.jpg" alt="" />
                      <a className="overlay lightbox" href="img/portfolio/img4.jpg">
                        <i className="lnr lnr-eye item-icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="img/portfolio/img5.jpg" alt="" />
                      <a className="overlay lightbox" href="img/portfolio/img5.jpg">
                        <i className="lnr lnr-eye item-icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="img/portfolio/img6.jpg" alt="" />
                      <a className="overlay lightbox" href="img/portfolio/img6.jpg">
                        <i className="lnr lnr-eye item-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container Ends */}
        </section>
        {/* Portfolio Section Ends */}
        {/* Start Video promo Section */}
        <section className="video-promo section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="video-promo-content text-center">
                  <h2
                    className="wow zoomIn"
                    data-wow-duration="1000ms"
                    data-wow-delay="100ms"
                  >
                    Watch Our Intro video
                  </h2>
                  <p
                    className="wow zoomIn"
                    data-wow-duration="1000ms"
                    data-wow-delay="100ms"
                  >
                    Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
                    condimentum. Vestibulum congue posuere lacus, id tincidunt nisi
                    porta sit amet. Suspendisse et sapien varius, pellentesque dui
                    non, semper orci.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=IXoMDwh4Cq8"
                    className="video-popup wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="0.3s"
                  >
                    <i className="lnr lnr-film-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Video Promo Section */}
        {/* Start Pricing Table Section */}
        <div id="pricing" className="section pricing-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Pricing Table</h2>
              <hr className="lines" />
              <p className="section-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
                dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <div className="row pricing-tables">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="pricing-table">
                  <div className="pricing-details">
                    <h2>Free</h2>
                    <span>$00</span>
                    <ul>
                      <li>Consectetur adipiscing</li>
                      <li>Nunc luctus nulla et tellus</li>
                      <li>Suspendisse quis metus</li>
                      <li>Vestibul varius fermentum erat</li>
                    </ul>
                  </div>
                  <div className="plan-button">
                    <a href="#" className="btn btn-common">
                      Get Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="pricing-table">
                  <div className="pricing-details">
                    <h2>Popular</h2>
                    <span>$3.99</span>
                    <ul>
                      <li>Consectetur adipiscing</li>
                      <li>Nunc luctus nulla et tellus</li>
                      <li>Suspendisse quis metus</li>
                      <li>Vestibul varius fermentum erat</li>
                    </ul>
                  </div>
                  <div className="plan-button">
                    <a href="#" className="btn btn-common">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="pricing-table">
                  <div className="pricing-details">
                    <h2>Premium</h2>
                    <span>$9.50</span>
                    <ul>
                      <li>Consectetur adipiscing</li>
                      <li>Nunc luctus nulla et tellus</li>
                      <li>Suspendisse quis metus</li>
                      <li>Vestibul varius fermentum erat</li>
                    </ul>
                  </div>
                  <div className="plan-button">
                    <a href="#" className="btn btn-common">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Pricing Table Section */}
        {/* Counter Section Start */}
        <div className="counters section" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="facts-item">
                  <div className="icon">
                    <i className="lnr lnr-clock" />
                  </div>
                  <div className="fact-count">
                    <h3>
                      <span className="counter">1589</span>
                    </h3>
                    <h4>Working Hours</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="facts-item">
                  <div className="icon">
                    <i className="lnr lnr-briefcase" />
                  </div>
                  <div className="fact-count">
                    <h3>
                      <span className="counter">699</span>
                    </h3>
                    <h4>Completed Projects</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="facts-item">
                  <div className="icon">
                    <i className="lnr lnr-user" />
                  </div>
                  <div className="fact-count">
                    <h3>
                      <span className="counter">203</span>
                    </h3>
                    <h4>No. of Clients</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <div className="facts-item">
                  <div className="icon">
                    <i className="lnr lnr-heart" />
                  </div>
                  <div className="fact-count">
                    <h3>
                      <span className="counter">1689</span>
                    </h3>
                    <h4>Peoples Love</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Counter Section End */}
        {/* Team section Start */}
        <section id="team" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Team</h2>
              <hr className="lines" />
              <p className="section-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
                dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="single-team">
                  <img src="img/team/team1.jpg" alt="" />
                  <div className="team-details">
                    <div className="team-inner">
                      <h4 className="team-title">Jhon Doe</h4>
                      <p>Chief Technical Officer</p>
                      <ul className="social-list">
                        <li className="facebook">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="google-plus">
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li className="linkedin">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="single-team">
                  <img src="img/team/team2.jpg" alt="" />
                  <div className="team-details">
                    <div className="team-inner">
                      <h4 className="team-title">Paul Kowalsy</h4>
                      <p>CEO &amp; Co-Founder</p>
                      <ul className="social-list">
                        <li className="facebook">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="google-plus">
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li className="linkedin">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="single-team">
                  <img src="img/team/team3.jpg" alt="" />
                  <div className="team-details">
                    <div className="team-inner">
                      <h4 className="team-title">Emilly Williams</h4>
                      <p>Business Manager</p>
                      <ul className="social-list">
                        <li className="facebook">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="google-plus">
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li className="linkedin">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="single-team">
                  <img className="img-fulid" src="img/team/team4.jpg" alt="" />
                  <div className="team-details">
                    <div className="team-inner">
                      <h4 className="team-title">Patricia Green</h4>
                      <p>Graphic Designer</p>
                      <ul className="social-list">
                        <li className="facebook">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="google-plus">
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li className="linkedin">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team section End */}
        {/* testimonial Section Start */}
        <div id="testimonial" className="section" data-stellar-background-ratio="0.1">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-12">
                <div className="touch-slider owl-carousel owl-theme">
                  <div className="testimonial-item">
                    <img
                      src="img/testimonial/customer1.jpg"
                      alt="Client Testimonoal"
                    />
                    <div className="testimonial-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. send
                        do <br /> adipisicing ciusmod tempor incididunt ut labore et
                      </p>
                      <h3>Jone Deam</h3>
                      <span>Fondor of Jalmori</span>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="img/testimonial/customer2.jpg"
                      alt="Client Testimonoal"
                    />
                    <div className="testimonial-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. send
                        do <br /> adipisicing ciusmod tempor incididunt ut labore et
                      </p>
                      <h3>Oidila Matik</h3>
                      <span>President Lexo Inc</span>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="img/testimonial/customer3.jpg"
                      alt="Client Testimonoal"
                    />
                    <div className="testimonial-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. send
                        do <br /> adipisicing ciusmod tempor incididunt ut labore et
                      </p>
                      <h3>Alex Dattilo</h3>
                      <span>CEO Optima Inc</span>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <img
                      src="img/testimonial/customer4.jpg"
                      alt="Client Testimonoal"
                    />
                    <div className="testimonial-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. send
                        do <br /> adipisicing ciusmod tempor incididunt ut labore et
                      </p>
                      <h3>Paul Kowalsy</h3>
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial Section Start */}
        {/* Blog Section */}
        <section id="blog" className="section">
          {/* Container Starts */}
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Recent Blog</h2>
              <hr className="lines" />
              <p className="section-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
                dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item">
                {/* Blog Item Starts */}
                <div className="blog-item-wrapper">
                  <div className="blog-item-img">
                    <a href="single-post.html">
                      <img src="img/blog/img1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-item-text">
                    <div className="meta-tags">
                      <span className="date">
                        <i className="lnr  lnr-clock" />2 Days Ago
                      </span>
                      <span className="comments">
                        <a href="#">
                          <i className="lnr lnr-bubble" /> 24 Comments
                        </a>
                      </span>
                    </div>
                    <h3>
                      <a href="single-post.html">How often should you tweet?</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </p>
                    <a href="single-post.html" className="btn-rm">
                      Read More <i className="lnr lnr-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Blog Item Wrapper Ends*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item">
                {/* Blog Item Starts */}
                <div className="blog-item-wrapper">
                  <div className="blog-item-img">
                    <a href="single-post.html">
                      <img src="img/blog/img2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-item-text">
                    <div className="meta-tags">
                      <span className="date">
                        <i className="lnr  lnr-clock" />2 Days Ago
                      </span>
                      <span className="comments">
                        <a href="#">
                          <i className="lnr lnr-bubble" /> 24 Comments
                        </a>
                      </span>
                    </div>
                    <h3>
                      <a href="single-post.html">Content is still king</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </p>
                    <a href="single-post.html" className="btn-rm">
                      Read More <i className="lnr lnr-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Blog Item Wrapper Ends*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item">
                {/* Blog Item Starts */}
                <div className="blog-item-wrapper">
                  <div className="blog-item-img">
                    <a href="single-post.html">
                      <img src="img/blog/img3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-item-text">
                    <div className="meta-tags">
                      <span className="date">
                        <i className="lnr  lnr-clock" />2 Days Ago
                      </span>
                      <span className="comments">
                        <a href="#">
                          <i className="lnr lnr-bubble" /> 24 Comments
                        </a>
                      </span>
                    </div>
                    <h3>
                      <a href="single-post.html">Social media at work</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </p>
                    <a href="single-post.html" className="btn-rm">
                      Read More <i className="lnr lnr-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* Blog Item Wrapper Ends*/}
              </div>
            </div>
          </div>
        </section>
        {/* blog Section End */}
        {/* Contact Section Start */}
        <section
          id="contact"
          className="section"
          data-stellar-background-ratio="-0.2"
        >
          <div className="contact-form">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <div className="contact-us">
                    <h3>Contact With us</h3>
                    <div className="contact-address">
                      <p>Centerville Road, DE 19808, US </p>
                      <p className="phone">
                        Phone: <span>(+94 123 456 789)</span>
                      </p>
                      <p className="email">
                        E-mail: <span>(contact@mate.com)</span>
                      </p>
                    </div>
                    <div className="social-icons">
                      <ul>
                        <li className="facebook">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="google-plus">
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li className="linkedin">
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="dribbble">
                          <a href="#">
                            <i className="fa fa-dribbble" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <div className="contact-block">
                    <form id="contactForm">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Your Name"
                              required=""
                              data-error="Please enter your name"
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Your Email"
                              id="email"
                              className="form-control"
                              name="name"
                              required=""
                              data-error="Please enter your email"
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              id="message"
                              placeholder="Your Message"
                              rows={8}
                              data-error="Write your message"
                              required=""
                              defaultValue={""}
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="submit-button text-center">
                            <button
                              className="btn btn-common"
                              id="submit"
                              type="submit"
                            >
                              Send Message
                            </button>
                            <div id="msgSubmit" className="h3 text-center hidden" />
                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section End */}
        {/* Footer Section Start */}
        <footer>
          <div className="container">
            <div className="row">
              {/* Footer Links */}
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul className="footer-links">
                  <li>
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="copyright">
                  <p>
                    All copyrights reserved © 2018 - Designed &amp; Developed by{" "}
                    <a rel="nofollow" href="https://uideck.com">
                      UIdeck
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Section End */}
        {/* Go To Top Link */}
        <a href="#" className="back-to-top">
          <i className="lnr lnr-arrow-up" />
        </a>

      </>

    </>
  )
}

export default HomeTest