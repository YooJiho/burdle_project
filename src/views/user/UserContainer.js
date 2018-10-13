import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Login, Join } from 'views';

class UserContainer extends Component {
	render() {
		return (
			<div>
				<Route exact path="/user/login" component={Login} />
				<Route exact path="/user/join" component={Join} />
			</div>
				
		);
	}
}

export default UserContainer;