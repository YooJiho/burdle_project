import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookList extends Component {
	state = {
		books : [
			{
				book_id : "25863",
				book_image : "https://misc.ridibooks.com/cover/3545000001/large",
				book_title : "하버드 협상강의",
				book_author : "하버드 공개강의 연구회"
			},
			{
				book_id : "36251",
				book_image : "https://misc.ridibooks.com/cover/2155010707/large",
				book_title : "내가 주식을 사는 이유",
				book_author : "오정훈"
			},
			{
				book_id : "13518",
				book_image : "https://misc.ridibooks.com/cover/2017000125/large",
				book_title : "유럽 맥주 여행",
				book_author : "백경학"
			},
			{
				book_id : "12356",
				book_image : "https://misc.ridibooks.com/cover/2127000037/large",
				book_title : "오해하지 않는 연습 오해받지 않을 권리",
				book_author : "김보광"
			}
		]
	}
	
	_renderBook = () => {
		const books = this.state.books.map((book) => {
			return <ProductBox 
				bookImage={book.book_image}
				bookTitle={book.book_title}
				bookAuthor={book.book_author}
				bookId={book.book_id}
				key={book.book_id}
			/>
		});
		console.log(books);
		return books;
	}
	
	render() {
		return (
			<div className="product_list">
				<AreaTitle titleName="타이틀 영역" />
				<div className="product_box_wrap">
					<ul className="after_clear">
						{this._renderBook()}
					</ul>
				</div>
			</div>
		)
	}
}

function AreaTitle({titleName}) {
	
	return (
		<div className="area_title">
			<Link to="" className="fr">전체보기 &gt;</Link>
			<h2 className="title_name">{titleName}</h2>
		</div>
	);
}

function ProductBox({bookImage, bookTitle, bookAuthor, bookId}) {
	return (
		<li>
			<Link to={`/product/detail_view/${bookId}`} className="d_b">
				<div className="product_image">
					<img src={bookImage} alt="book" />
				</div>
				<div className="product_name">{bookTitle}</div>
				<div className="product_author">{bookAuthor}</div>
			</Link>
		</li>
	);
}

export default BookList;