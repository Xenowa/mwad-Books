import {React,useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import firebase from "../Config/configurations";

function Add() {
  // =====================
  // Firestore Collections
  // =====================
  const db = firebase.firestore();
  const booksRef = db.collection("Books");

  // ============
  // Input States
  // ============
  const [bookName,setBookName] = useState("");
  const [authorName,setauthorName] = useState("");
  const [price,setPrice] = useState("");
  const [isbn,setIsbn] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  // ===============
  // Hard Coded Data
  // ===============
  const USERNAME = "usradmin";
  const PASSWORD = "pwdadmin";

  // ===============
  // Submit Function
  // ===============
  const handleSubmit = (e) =>{
    e.preventDefault();
  
    if((username === USERNAME) && (password === PASSWORD)){
      booksRef.add(
        {
          Author: authorName,
          BookName: bookName,
          ISBN: isbn,
          Price: price
        });
      alert("Your Form Has Been Submitted");
      setBookName("");
      setauthorName("");
      setPrice("");
      setIsbn("");
    }else{
      alert("invalid Username or Password");
    }
  }

    return (
        <section>
            <h1 className="heading" id="Add">Add Book</h1>
            <Form className="form-area">
                <Form.Group>
                <Form.Control type="text" placeholder="Enter Book Name" onChange={(e) => setBookName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                <Form.Control type="text" placeholder="Enter Author Name" onChange={(e) => setauthorName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                <Form.Control type="text" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>
                <Form.Group>
                <Form.Control type="text" placeholder="Enter ISBN" onChange={(e) => setIsbn(e.target.value)} />
                </Form.Group>
                <Form.Group>
                <Form.Control type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                {(bookName && authorName && price && isbn)&&
                <Button type="submit" variant="neon" onClick={(e) => handleSubmit(e)}>
                  Submit
                </Button>
                }
            </Form>
        </section>
    )
}

export default Add;
