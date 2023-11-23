import React from "react";
import { Navigate } from "react-router-dom";
import { getBooks } from "./book-api";
import BookListItem from "./book-list-item";

class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        getBooks().then(x => this.setState({
            books: x.books
        }));
    }

    onBookClick(book) {
        this.setState({
            detailBookId: book.id
        });
    }

    render() {
        const books = this.state.books;

        if(this.state.detailBookId){
            return <Navigate to={`/books/${this.state.detailBookId}`}/>;
        }

        return (
            <div className='ui middle aligned selection divided list'>
                {
                    books.map(book => (
                        <div className='item' key={book.id} onClick={() => this.onBookClick(book)}>
                            <BookListItem book={book} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default BookList;