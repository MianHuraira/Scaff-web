import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/scaff_cert.svg';

class Footer1 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase">
                    <div className="footer-top" style={{ background: "#232c3b" }}>
                        <div className="container" >
                            <div className="row d-flex justify-content-between">
                                <div className="col-12 col-lg-4 col-md-8 col-sm-8 footer-col-4">
                                    <Link to={'./'} className="dez-page scaff"><img src={logo} alt="" style={{ width: "150px" }} /></Link>
                                    <div className="widget widget_services border-0">
                                        <h6 className=" m-t30 ">For constructed scaffolding, written confirmation that the scaffold is complete is required:</h6>
                                        <ul>
                                            <li> before using the scaffold</li>
                                            <li> at least every 30 days</li>
                                            <li>following any alteration or addition</li>
                                            <li>following an incident involving the scaffold.</li>
                                        </ul>
                                        <h6 className="">Where an inspection indicates that the scaffold system creates a risk to the health and safety of persons, then necessary repairs must be carried out before work resumes.</h6>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-2 col-md-4 col-sm-4 footer-col-6">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">Pages</h5>
                                        <ul>
                                            <li><Link to={'./'}>Home</Link></li>
                                            <li><Link to={'/about-1'}>Pricing </Link></li>
                                            <li><Link to={'/contact'}>Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6 footer-col-6">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Documents</h5>
                                        <ul>
                                            <li><Link to={"#"}>Terms of Use</Link></li>
                                            <li><Link to={"#"}>Privacy policy </Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-6 ">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">Contact Us</h5>
                                        <ul>
                                            <li className='w-75'>Scaff-Cert Pty Ltd NSW Australia</li>
                                            <li><Link to={"#"}>Email: support@scaff-cert.com </Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom" style={{ background: "#232c3b" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-sm-6 text-center"> <span>© 2019 Scaff Cert. All Rights Reserved</span><span  style={{marginLeft: "10px"}}><Link to={"#"}>Privacy Policy </Link></span><span  style={{marginLeft: "10px"}}>|</span><span  style={{marginLeft: "10px"}}><Link to={"#"}>Terms of Use</Link></span> </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer1;