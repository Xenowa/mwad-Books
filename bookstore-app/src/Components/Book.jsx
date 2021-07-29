import React from 'react';
import {Card} from "react-bootstrap";

const Book = (props) => {
    return (
        <React.Fragment>
            {props.bookData.map((singleBook) =>{
                const {Author,BookName,ISBN,Price} = singleBook;
                return(
                    <Card className="book" key={ISBN}>
                        <Card.Header as="h2">{BookName}</Card.Header>
                        <Card.Body as="div" className="descriptions py-5">
                            <Card.Title className="font-weight-normal">
                                -{Author}-
                            </Card.Title> 
                            <Card.Text>
                              Price:{Price}
                            </Card.Text>
                            <Card.Text>
                              ISBN:{ISBN}
                            </Card.Text>
                        </Card.Body>
                    </Card>)
                })
            }
        </React.Fragment>
    )
}

export default Book;
