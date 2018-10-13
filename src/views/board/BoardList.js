import React, { Component } from 'react';
import SubTitle from 'components/subTitle';
import ArticleWrap from 'components/ArticleWrap';
import 'lib/css/board.css';

class BoardList extends Component {

	render() {
		return (
			<div>
				<SubTitle title="게시판 리스트" />
				<ArticleWrap contents={(
					<div className="list_box">
						<ListBox />
					</div>
				)} />
			</div>
		)
	}	
}

function ListBox() {
	return (
		<div className="list_table">
			<div className="list_table_cell contents_title">test</div>
			<div className="list_table_cell c_gray9 contents_date">zzzz</div>
		</div>
	)
}

export default BoardList;
