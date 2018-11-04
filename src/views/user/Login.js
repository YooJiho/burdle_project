import React, { Component } from 'react';
import request from 'superagent';
import SubTitle from 'components/subTitle';
import CheckBox from 'components/checkBox';
import ArticleWrap from 'components/ArticleWrap';
import 'lib/css/user.css';
import { Link } from 'react-router-dom';

class Login extends Component {
	state = {
		email : "",
		password : ""
	}
	
	handleChange(e){
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	onClickButton(e){

		request.post('http://106.254.149.216:8090/login')
		.accept('application/json')
		.send({userId : this.state.email, password:this.state.password})
		.end((err, res) => {
			this.loadedJSON(err, res)
		})
	}

	loadedJSON(err, res){
		if(err){
			console.log("JSON 못읽음")
			return
		}

		this.setState({
			items : res.body
		})
		console.log("넘어온 데이터 >>")
		console.log(res.body)
	}
	
	render() {
		return (
			<div>
				<SubTitle title="로그인" />
				<ArticleWrap contents={(
					<LoginView onChange={e => this.handleChange(e)} onClick={e => this.onClickButton(e)}/>
				)} />
			</div>
		)
	}	
}

function LoginView({onClick, onChange}) {
	return (
		<div id="login">
			<div className="common_input_box margin_b_10">
				<input type="text" name="email" className="common_text" placeholder="아이디를 입력하세요." onChange={onChange}/>
			</div>
			<div className="common_input_box margin_b_10">
				<input type="password" name="password" className="common_text" placeholder="비밀번호를 입력하세요." onChange={onChange}/>
			</div>
			<CheckBox id="saveId" checkName="아이디저장"/>
			<input type="button" value="로그인" className="common_btn default margin_t_10 margin_b_10" onClick={onClick}/>
			<Link to="/user/join" className="common_btn gray9 d_b center">회원가입하기</Link>
		</div>
	)	
}

export default Login;
