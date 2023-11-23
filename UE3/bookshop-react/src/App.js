import React from 'react';
import './App.css';
import BookDetails from './components/book-details';
import BookList from './components/book-list';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';

function App(){
  return(
    <Router>
      <div className='ui container'>
        <div className='ui two item tabs menu'>
          <Link className='item' to='/'>Home</Link>
          <Link className='item' to='/books'>Bücher</Link>
        </div>
        <Routes>
          <Route path='/books/:bookId' element={<BookDetails/>}/>
          <Route path='/books' element={<BookList/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}
// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedBook: undefined
//     };
//   }

//   showDetails(book) {
//     this.setState({
//       selectedBook: book
//     });
//   }

//   showList(book){
//     this.setState({
//       selectedBook: undefined
//     })
//   }

//   render() {
//     let content;
//     if (!this.state.selectedBook) {
//       content = <BookList onBookClick={this.showDetails.bind(this)} />;
//     } else {
//       content = <BookDetails book={this.state.selectedBook} onBackClick={this.showList.bind(this)}/>;
//     }
//     return (
//       <div className='ui container'>
//         {content}
//       </div>
//     );
//   }
// }

export default App;
