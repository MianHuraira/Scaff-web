import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import {OrderDetail} from './../Login';
import bnr from './../../../images/banner/bnr8.jpg';
import logo from '../../../images/scaff_cert.svg';

class ShopLogin extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu ='Login' activeMenu='Login'  />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner shop-account">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                <Link to={'./'} className="dez-page scaff"><img src={logo} alt="" width="180px" className='m-b20' /></Link>
                                </div>
                            </div>
                            <div className="row dzseth">
                                <div className="col-md-6 m-md-auto col-sm-12 m-b30">
                                    <div className="p-a30 border-1 seth">
                                        <div className="tab-content nav">
                                            <form id="login" className="tab-pane active col-12 p-a0 ">
                                                <h4 className="font-weight-700 m-b30">Login to your account</h4>
                                                <div className="form-group">
                                                    <label className="font-weight-700 ">E-MAIL *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-weight-700">PASSWORD *</label>
                                                    <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
                                                </div>
                                                <div className="text-left">
                                                    <button className="site-button m-r5 button-lg radius-no">login</button>
                                                    <a data-toggle="tab" href="#forgot-password" className="m-l5"><i className="fa fa-unlock-alt"></i> Forgot Password</a>
                                                </div>
                                                <p className="font-weight-700">Create an Account?</p>
                                                <div className="text-left">
                                                    <Link to={"/pricing"} className="site-button outline gray button-lg radius-no" data-toggle="tab" >Signup</Link>
                                                </div>
                                            </form>
                                            <form id="forgot-password" className="tab-pane fade  col-12 p-a0">
                                                <h4 className="font-weight-700">FORGET PASSWORD ?</h4>
                                                <p className="font-weight-600">We will send you an email to reset your password. </p>
                                                <div className="form-group">
                                                    <label className="font-weight-700">E-MAIL *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                                </div>
                                                <div className="text-left">
                                                    <Link to={"#"} className="site-button outline gray button-lg radius-no" data-toggle="tab" >Back</Link>
                                                    <button className="site-button pull-right button-lg radius-no">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
					
                    <OrderDetail />
                    
					{/* <!-- contact area  END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ShopLogin;