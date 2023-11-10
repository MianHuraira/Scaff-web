import React, { Component } from 'react';
import Header from '../../Layout/Header1';
import Footer from '../../Layout/Footer1';
import PageTitle from '../../Layout/PageTitle';
import AccordionBlog from '../../Element/AccordionBlog';
import VideoPopup from '../../Element/VideoPopup';

import bnr2 from './../../../images/banner/bnr2.jpg';
import pic10 from './../../../images/about/pic10.jpg';

class ShortAccordions extends Component {

    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
						<PageTitle motherMenu = 'Accordions' activeMenu= 'Accordions' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        <div className="section-full overlay-white-middle content-inner">
                            <div className="sort-title-bx text-left" data-name="Element Style 1">TUTORIAL<i className="fa fa-angle-double-right"></i></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <h2 className='text-primary text-left p-b30' style={{borderBottom:"5px solid blue"}}>Create new job</h2>
                                        <div className="faq-video">
                                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/XRnV1pQAQgg" title="Scaff-Cert, Complete an inspection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <h2 className='text-primary text-left p-b30' style={{borderBottom:"5px solid blue"}}>Complete an inspection</h2>
                                        <div className="faq-video">
                                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/MhO5IFDCXG0" title="Scaff-Cert, Create new job" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShortAccordions;