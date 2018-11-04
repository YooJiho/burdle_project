import React, { Component } from 'react';
import request from 'superagent';

class Sample extends Component{
	
	componentWillMount(){
	
		console.log("componentWill componentWillmount")
		
		request.post('http://106.254.149.216:8080/kr/Test.do')
        .accept('application/json')
        .send({title : '좋은것'})
        .end((err, res) => {
           console.log("err")
        })
	}

	
	 render(){
	     return (
			<div>
			    샘플테스트
			</div>
	      )
	 }
}

export default Sample;
