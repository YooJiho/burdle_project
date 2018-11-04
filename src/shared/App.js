import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, User, Board, Product, Sample } from 'views';
import 'lib/css/common.css';
import Header from 'components/header';
import Footer from 'components/footer';

class App extends Component {
	render() {
		return (
			<div id="AppBurdle">
				<Header />
				<div id="container">
					<Route exact path="/" component={ Main } />
					
					<Route exact path="/sample" component={ Sample } />
					
					<Route path="/user" component={ User } />
					<Route path="/board" component={ Board } />
					<Route path="/product" component={ Product } />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;