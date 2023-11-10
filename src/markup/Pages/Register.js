import React, { Component } from 'react';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import PageTitle from './../Layout/PageTitle';
import { OrderDetail } from './Login';
import bnr from './../../images/banner/bnr6.jpg';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
class Register extends Component {
    render() {
        const options = [
            { value: 'Pakistan', label: 'Pakistan' },
            { value: 'India', label: 'India' },
            { value: 'Nepal', label: 'Nepal' }
        ]
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='Register' activeMenu='Register' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner shop-account">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 className="font-weight-700 m-t0 m-b30">Create an account</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 m-b30">
                                    <div className="p-a30 border-1  max-w500 m-auto">
                                        <div className="tab-content">
                                            <form id="login" className="tab-pane active">
                                                <h4 className="font-weight-700"><span className='text-primary'>Register</span> Form</h4>
                                                <div className="form-group">
                                                    <label className="font-weight-700">Name *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="Name" type="text" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-weight-700">E-MAIL *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-weight-700">Number *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="Number" type="number" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-weight-700">Username *</label>
                                                    <input name="dzName" required="" className="form-control" placeholder="Username" type="text" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-weight-700">PASSWORD *</label>
                                                    <input name="dzName" required="" className="form-control " placeholder="Password" type="password" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-weight-700">Confirm PASSWORD *</label>
                                                    <input name="dzName" required="" className="form-control " placeholder="Confirm Password" type="password" />
                                                </div>
                                                <p>Select your time zone</p>
                                                <Select options={options} className='selectTimeZone' />
                                                <h6 className='mt-2'>Package Price : $399.00</h6>
                                                <div className='react_captcha mb-4 mt-3'>
                                                    <Form className='pt-3'>
                                                        {['checkbox'].map((type) => (
                                                            <div key={`inline-${type}`} className="mb-3">
                                                                <Form.Check
                                                                    inline
                                                                    label="I am not a Robot"
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-1`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                </div>
                                                <div className="text-left">
                                                    <button className="site-button button-lg radius-no outline outline-2">CREATE</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <OrderDetail />

                </div>

                <Footer />
            </>
        )
    }
}
export default Register;