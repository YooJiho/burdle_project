import React, { Component } from 'react';
import SubTitle from 'components/subTitle';
import ArticleWrap from 'components/ArticleWrap';
import 'lib/css/user.css';

class Join extends Component {

	render() {
		return (
			<div>
				<SubTitle title="회원가입" />
				<ArticleWrap contents={(
					<JoinView />
				)} />
			</div>
		)
	}	
}

function JoinView() {
	return (
		<div id="join">
			<input type="text" name="email" className="common_text margin_b_10" placeholder="아이디" />
			<input type="password" name="password" className="common_text" placeholder="비밀번호" />
			<input type="password" name="password_check" className="common_text" placeholder="비밀번호 확인" />
		</div>
	)
}

export default Join;
