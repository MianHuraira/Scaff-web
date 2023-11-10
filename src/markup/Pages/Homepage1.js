/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Header from "./../Layout/Header1";
import Footer from "./../Layout/Footer1";
import HomeOwlSlider from "./../Element/HomeOwlSlider";
// import HomeOwlSlider2 from './../Element/HomeOwlSlider2';
import ImgCarouselContent from "./../Element/ImgCarouselContent";
import HomeTab from "./../Element/HomeTab";
import Counter from "./../Element/Counter";
import PortfolioCarousel from "./../Element/PortfolioCarousel";
import TestimonialCarousel from "./../Element/TestimonialCarousel";
import FormStyle from "./../Element/FormStyle";

//Images
import pic4 from "./../../images/about/work-smart.jpg";
import bgimg from "./../../images/background/bg1.jpg";
import bgimg2 from "./../../images/background/bg-map.jpg";
import bgimg3 from "./../../images/background/bg1.jpg";

class Homepage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="page-wraper">
        <Header />
        <div className="page-content bg-white">
          {/*  Slider Banner */}
          <div className="owl-slider-banner main-slider">
            <HomeOwlSlider />
            {/*  Service   */}
            <div className="service-box-slide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <ImgCarouselContent />
                  </div>
                </div>
              </div>
            </div>
            {/*  Service End  */}
          </div>
          {/*  Slider Banner */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full bg-white content-inner-1 about-us">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-7 col-md-8">
                    <div className="abuot-box row">
                      <div className="col-lg-12 m-b30 text-center ">
                        <h2 className="box-title m-tb0">
                          Work<span className="text-primary">Smarter</span>
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <ul>
                          <li className="m-b20">
                            Real time updates on each Job
                          </li>
                          <li className="m-b20">
                            Easy onsite Handover/Inspections with Phone or
                            tablet
                          </li>
                          <li className="m-b20">
                            Emailed directly to your Clients from your Device
                          </li>
                          <li className="m-b20">
                            Securely Stores your site photos and job data
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-4 about-img">
                    <img src={pic4} data-tilt alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- About Us End --> */}
            {/* <!-- Testimonials --> */}
            <div
              className="section-full content-inner"
              style={{
                backgroundImage: "url(" + bgimg2 + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container">
                <div className="section-head text-center">
                  <h2 className="box-title m-tb0 text-primary">
                    Look
                    <span className="text-gray-dark">
                      {" "}
                      at What Our Customers are saying about their Experiences.
                    </span>
                  </h2>
                  <p>
                    {" "}
                    A Safer environment starts here. See how you can improve
                    your relationship with major players.{" "}
                  </p>
                </div>
                <div className="section-content m-b30 ">
                  <TestimonialCarousel />
                </div>
              </div>
            </div>
            {/* <!-- Testimonials END --> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Homepage;
