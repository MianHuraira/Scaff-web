import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Slider from "react-slick";


const contentBlog = [
	{ icons: <i className="flaticon-notebook" />, title: 'Validation', para: 'Mobile App or Website', },
	{ icons: <i className="flaticon-file" />, title: 'Launching', para: 'Helping you with the Initial', },
	{ icons: <i className="flaticon-devices" />, title: 'Development', para: 'Mobile App or Website', },
	{ icons: <i className="flaticon-rocket-ship" />, title: 'Launching', para: 'Helping you identify the', },
	{ icons: <i className="flaticon-file" />, title: 'Development', para: 'Helping you with the Initial', },

]

class ImgCarouselContent extends Component {
	render() {
		var settings = {
			arrows: false,
			slidesToShow: 4,
			speed: 3000,
			navSpeed: 3000,
			infinite: true,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		return (
			<>
				<Slider className="img-carousel-content owl-carousel text-center text-white owl-none ">
					<div className="item p-3">
						<div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
							<div className='row'> 
										<div className='col-8'>
								<div className="icon-content">
									<h5 className="dlab-tilte">
										Manage Your Scaffold ON/SITE inspections with your device?
									</h5>
									<p>All sites always certified SCAFF-CERT makes it easy to comply with AS/NZS Regulation.</p>
								</div>
							</div>
								<div className='col-4'>
								<Link to={'./pricing'}><button className='site-button' style={{margin:"10px 0"}}>Create Account</button></Link>	
								</div>
								</div>
						</div>
					</div>

				</Slider>
			</>
		)
	}

}

export default ImgCarouselContent;