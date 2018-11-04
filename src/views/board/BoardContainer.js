import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BoardView, BoardList } from 'views';

class BoardContainer extends Component {
	render() {
		return (
			<div>
				<Route exact path="/board/board_view" component={BoardView} />
				<Route exact path="/board/board_list" component={BoardList} />
			</div>
				
		);
	}
}

export default BoardContainer;