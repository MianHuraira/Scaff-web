import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "../../css/style.css";

class HeaderMenu extends Component{
	render(){
		return(
			<>
				<ul className="nav navbar-nav">
					<li className="active"><Link to={'./'} className="dez-page">Home</Link>
					
					</li>
						<li><Link to={'/pricing'}>Pricing</Link></li>
						<li><Link to={'/contact'}>Contact Us</Link></li>
						<li><Link to={'/tutorials'}>tutorials</Link></li>
						<li><Link to={'/'}>Remote Support</Link></li>
				</ul>
			</>
		)
	}
}
export default HeaderMenu;