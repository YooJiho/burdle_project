import React, { Component } from 'react';
import 'lib/css/header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		
		return (
			<header id="header">
				<FixHeader />
			</header>
		)
	}
}

function FixHeader() {
	
	return (
		<div className="fix_header">
			<HeaderLeft />
			<AppLogo />
			<HeaderRight />
		</div>
	)
}

function AppLogo() {

	return (
		<h1 className="app_logo">
			<Link to="/">
				Burdle
			</Link>
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

export default Header;