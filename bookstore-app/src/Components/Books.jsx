import React,{Component} from 'react';
import Book from './Book';
import firebase from "../Config/configurations";
import { Spinner } from 'react-bootstrap';

const db = firebase.firestore();
const booksRef = db.collection("Books");

class Books extends Component{
    state = {
        books:[],
    };

    componentDidMount(){
        booksRef.get().then(
            (Book) =>{
                Book.forEach((value) =>{
                    this.setState({
                        books: [...this.state.books, value.data()],
                    })
                });
            }
        );
    }
    render(){
        return (
            <section>
                <h1 className="heading" id="Books">Available Books</h1>
    
                {this.state.books.length === 0? (
                    <div className="loading">
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="danger" />
                        <h2>Loading...</h2>
                    </div>
                ) : (
                <div className="books-grid">
                    <Book bookData={this.state.books} />
                </div>
                )
                }
            </section>
        )
    }
}

export default Books;