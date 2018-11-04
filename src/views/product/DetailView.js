import React, { Component } from 'react';
import SubTitle from 'components/subTitle';
import request from 'superagent';

class DetailView extends Component {
    
  
    componentWillMount(){
        const bookId = this.props.match.params.id;
        
        request.post('http://106.254.149.216:8080/kr/bookDetail.do')
            .accept('application/json')
            .send({id : bookId})
            .end((err, res) => {
               console.log("err")
            }
        );
    }
  
	render() {
		return (
		    
		    <div>
			    <SubTitle title="상품상세"/>
			</div>
		)
	}	
}

export default DetailView;
