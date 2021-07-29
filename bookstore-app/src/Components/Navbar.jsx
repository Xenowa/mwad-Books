import React from 'react';

function Navbar() {
    return (
        <section className="navbar fixed-top container">
            <h1><span>XT</span>BookStore</h1>
            <ul className="navbar-items">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Books">Books</a></li>
                <li><a href="#Add">Add Book</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </section>
    )
}

export default Navbar;
