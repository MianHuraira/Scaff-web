import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../../Layout/Header1';
import Footer from '../../Layout/Footer1';
import PageTitle from '../../Layout/PageTitle';
import SectionCounter from '../../Element/SectionCounter';
import TestimonialCarousel from '../../Element/TestimonialCarousel';
import FormStyle from '../../Element/FormStyle';
//Images
import about9 from './../../../images/about/pic9.jpg';
import bg2 from './../../../images/background/bg-map.jpg';
import services1 from './../../../images/our-services/pic1.jpg';
import services2 from './../../../images/our-services/pic2.jpg';
import bg1 from './../../../images/background/bg1.jpg';
import Form from 'react-bootstrap/Form';
import bnr from './../../../images/banner/bnr2.jpg';
import { Link } from 'react-router-dom';

class Aboutus1 extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    <div className="content-block">
                        <div className="section-full content-inner-2">
                        </div>
                        {/* <!-- Pricing Table --> */}
                        <div className="section-full content-inner-2 bg-white m-b20">
                            <div className="container">
                                <div className="row">
                                    <div className="section-head col-lg-12 text-center">
                                        <h5 className="title-head">Pricing Tables</h5>
                                    </div>
                                </div>
                                <div className="row p-lr15">
                                    <div className="col-lg-4 col-md-4 m-b20 p-a0">
                                        <div className="pricingtable-wrapper style3">
                                            <div className="pricingtable-inner">
                                                <div className="pricingtable-head bg-gray">
                                                    <div className="pricingtable-title">
                                                        <h2>Basic</h2>
                                                    </div>
                                                    <div className="pricingtable-price text-primary">
                                                        <span className="pricingtable-bx"><span></span>$399.00 Yr / $39.00 Mth</span>
                                                    </div>
                                                    <p className="pricingtable-content">Basic Mode will suit most small to medium company's working with scaffold in the Construction industry, For more Information Please use our contact page.</p>
                                                </div>
                                                <ul className="pricingtable-features">
                                                    <li>Number of active jobs<span>20</span></li>
                                                    <li>Unlimited Inspection<span>yes</span></li>
                                                    <li>Quick status Overview<span>Yes</span></li>
                                                    <li>Reps Dashboard<span>yes</span></li>
                                                    <li>Inventory Dashboard<span>yes</span></li>
                                                    <li>RInspections dashboard<span>yes</span></li>
                                                    <li>1 free remote training session<span>yes</span></li>
                                                    <li>Unlimited email Support<span>yes</span></li>
                                                    <li>Yearly subscription<span>$399.00</span></li>
                                                    <li>Monthly subscription<span>$39.00</span></li>
                                                    <li><br></br><span></span></li>

                                                </ul>
                                                <div className="pricingtable-footer">
                                                    <Form>
                                                        {['radio'].map((type) => (
                                                            <div key={`inline-${type}`} className="mb-3">
                                                                <Form.Check
                                                                    inline
                                                                    label="Yearly"
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-1`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="Monthly"
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-2`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>

                                                    <Link to={'./Register'}><button className='site-button button-lg'>Get Started Now</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-b20 p-a0">
                                        <div className="pricingtable-wrapper style3">
                                            <div className="pricingtable-inner">
                                                <div className="pricingtable-head bg-primary text-white">
                                                    <div className="pricingtable-title">
                                                        <h2>Business</h2>
                                                    </div>
                                                    <div className="pricingtable-price">
                                                        <span className="pricingtable-bx"><span></span>$690.00 Yr / $69.00 Mth</span>
                                                    </div>
                                                    <p className="pricingtable-content">Business mode will suit large scaffolding businesses and Construction Companies, For more Information Please use our contact page.</p>
                                                </div>
                                                <ul className="pricingtable-features">
                                                    <li>Number of active jobs<span>50</span></li>
                                                    <li>Unlimited Inspection<span>Yes</span></li>
                                                    <li>Quick status Overview<span>yes</span></li>
                                                    <li>Branches<span>yes</span></li>
                                                    <li>Reps Dashboard<span>yes</span></li>
                                                    <li>Inventory Dashboard <span>yes</span></li>
                                                    <li>Inspections dashboard<span>yes</span></li>
                                                    <li>1 free remote training session<span>yes</span></li>
                                                    <li>Unlimited email support<span>yes</span></li>
                                                    <li>Yearly subscription<span> $690.00</span></li>
                                                    <li>Monthly subscription<span> $69.00</span></li>
                                                </ul>
                                                <div className="pricingtable-footer">
                                                    <Form>
                                                        {['radio'].map((type) => (
                                                            <div key={`inline-${type}`} className="mb-3">
                                                                <Form.Check
                                                                    inline
                                                                    label="Yearly"
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-3`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="Monthly"
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-4`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                    <Link to={"/register"}><button className='site-button button-lg'>Get Started Now</button></Link>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-b20 p-a0">
                                        <div className="pricingtable-wrapper style3" >
                                            <div className="pricingtable-inner">
                                                <div className="pricingtable-head bg-gray">
                                                    <div className="pricingtable-title">
                                                        <h2>Corperate</h2>
                                                    </div>
                                                    <div className="pricingtable-price text-primary">
                                                        <span className="pricingtable-bx"><span></span>$1730.00 Yr / $173.00 Mth</span>
                                                    </div>
                                                    <p className="pricingtable-content">Corporate Mode will suit most multi-branch company's working with scaffold in the Construction industry. For more Information Please use our contact page.</p>
                                                </div>
                                                <ul className="pricingtable-features">
                                                    <li>Number of active jobs<span>150</span></li>
                                                    <li>Unlimited Inspection<span>yes</span></li>
                                                    <li>Quick status Overview <span>yes</span></li>
                                                    <li>Multiple Branches<span>yes</span></li>
                                                    <li>Reps Dashboard <span>yes</span></li>
                                                    <li>Inventory Dashboard<span>yes</span></li>
                                                    <li>Inspections dashboard<span>yes</span></li>
                                                    <li>1 free remote training session<span>yes</span></li>
                                                    <li>Unlimited email support<span>yes</span></li>
                                                    <li>Yearly subscription <span>$1730.00</span></li>
                                                    <li>Monthly subscription <span>$173.00</span></li>
                                                </ul>
                                                <div className="pricingtable-footer">
                                                    <Form>
                                                        {['radio'].map((type) => (
                                                            <div key={`inline-${type}`} className="mb-3">
                                                                <Form.Check
                                                                    inline
                                                                    label="Yearly"
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-5`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="Monthly"
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-6`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                    <Link to={'./Register'}><button className='site-button button-lg'>Get Started Now</button></Link>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-b20 p-a0">
                                        <div className="pricingtable-wrapper style3">
                                            <div className="pricingtable-inner">
                                                <div className="pricingtable-head bg-primary text-white">
                                                    <div className="pricingtable-title">
                                                        <h2>Ultimate</h2>
                                                    </div>
                                                    <div className="pricingtable-price">
                                                        <span className="pricingtable-bx"><span></span>$4990.00 Yr / $499.00 Mth</span>
                                                    </div>
                                                    <p className="pricingtable-content">Ultimate Mode will suit most multi-branch company's working with scaffold in the Construction industry with larger job quantity's. For more Information Please use our contact page.</p>
                                                </div>
                                                <ul className="pricingtable-features">
                                                    <li>umber of active jobs<span>1000</span></li>
                                                    <li>Unlimited Inspection<span>Yes</span></li>
                                                    <li>Quick status Overview<span>yes</span></li>
                                                    <li>Multiple Branches<span>yes</span></li>
                                                    <li>Reps Dashboard<span>yes</span></li>
                                                    <li>Inventory Dashboard <span>yes</span></li>
                                                    <li>Inspections dashboard<span>yes</span></li>
                                                    <li>1 free remote training session<span>yes</span></li>
                                                    <li>Unlimited email support<span>yes</span></li>
                                                    <li>Yearly subscription<span> $2790.00</span></li>
                                                    <li>Monthly subscription<span> $279.00</span></li>
                                                </ul>
                                                <div className="pricingtable-footer">
                                                    <Form>
                                                        {['radio'].map((type) => (
                                                            <div key={`inline-${type}`} className="mb-3">
                                                                <Form.Check
                                                                    inline
                                                                    label="Yearly"
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-7`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="Monthly"
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-8`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                    <Link to={'./Register'}><button className='site-button button-lg'>Get Started Now</button></Link>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Pricing Table END --> */}


                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + bg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Our Testimonials<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
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
            </>
        )
    }
}
function VisionBlog() {
    return (
        <>
            <div className="section-ful our-about-info content-inner-1 " style={{ backgroundImage: "url(" + bg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="container">
                    <div className="section-head text-center">
                        <h2 className="box-title m-tb0">Mission And Vision<span className="bg-primary"></span></h2>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                    </div>
                    <div className=" row dzseth  m-b30">
                        <div className="col-lg-6 col-md-12 m-b30 about-img ">
                            <img src={services1} data-tilt alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h3 className="box-title">Mision<span className="bg-primary"></span></h3>
                                <p className="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <p className="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <p className="font-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row dzseth column-reverse">
                        <div className="col-lg-6 col-md-12 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h3 className="box-title">Vision<span className="bg-primary"></span></h3>
                                <p className="font-16">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 	make a type specimen book.
                                </p>
                                <p className="font-16">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <p className="font-16">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the	 industry's standard dummy text ever since the.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 about-img ">
                            <img src={services2} data-tilt alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { VisionBlog };
export default Aboutus1;