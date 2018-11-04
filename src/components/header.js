import React, { Component } from 'react';
import 'lib/css/header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		
		return (
			<header id="header">
				<HeaderTop />
				<HeaderSearch />
				<HeaderNavigator />
			</header>
		)
	}
}

function HeaderTop() {
	
	return (
		<div className="top_header">
			<HeaderLeft />
			<AppLogo />
			<HeaderRight />
		</div>
	)
}

function AppLogo() {

	return (
		<h1 className="app_logo">
			<Link to="/">Burdle</Link>
		</h1>
	)

}

function HeaderLeft() {
	return false;
}

function HeaderRight() {
	return (
		<div className="right_area">
			<Link to="/user/login" className="icon_area">
				<i className="far fa-user"></i>
			</Link>
		</div>
	)
}

function HeaderSearch() {
	return (
		<div className="top_search">
			<div className="common_input_box">
				<input type="text" name="search_item" className="common_text" />
				<button type="submit" className="common_btn transparent">
					<i className="fas fa-search"></i>
				</button>
			</div>
		</div>
	)
}

function HeaderNavigator() {
	return (
		<div className="top_navigator">
			<ul>
				<li>
					<Link to="" className="anchor_menu on">Menu1</Link>
				</li>
				<li>
					<Link to="" className="anchor_menu">Menu1</Link>
				</li>
				<li>
					<Link to="" className="anchor_menu">Menu1</Link>
				</li>
			</ul>
		</div>
	)
}


export default Header;