import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { DetailView } from 'views';

class ProductContainer extends Component {
	render() {
		
		return (
			<div>
				<Route exact path="/product/detail_view/:id" component={ DetailView } />
			</div>
				
		);
	}
}

export default ProductContainer;