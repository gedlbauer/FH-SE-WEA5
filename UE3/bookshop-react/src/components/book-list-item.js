import { Fragment } from "react";
import { baseUrl } from "./book-api";

export default function BookListItem(props) {
    return (
        <Fragment>
            <img className="ui tiny image" src={`${baseUrl}/${props.book.picture}`} alt="book cover" />
            <div className='content'>
                <div className='header'>{props.book.title}</div>
                <div className='description'>{props.book.author}</div>
                <div className='extra'>Year: {props.book.year}</div>
            </div>
        </Fragment>
    );
}