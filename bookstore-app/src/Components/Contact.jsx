import React from 'react';
import {FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";

function Contact() {
    return (
        <section>
            <h1 className="heading" id="Contact">Contact Info</h1>

            <section className="contact-info">
                <article>
                    <h2>Work With Us</h2>
                    <ul>
                        <li>Authors</li>
                        <li>Advertise</li>
                        <li>API</li>
                    </ul>
                </article>
                <article>
                    <h2>Follow Us On</h2>
                        <FaFacebook size="40" className="mx-2" />
                        <FaInstagram size="40" className="mx-2" />
                        <FaTwitter size="40" className="mx-2" />
                </article>
                <article>
                    <h2>Contact Us On</h2>
                    <p>0123456789</p>
                </article>
                <article>
                    <h2>Email</h2>
                    <p>XTBooks@gmail.com</p>
                </article>
            </section>
        </section>
    )
}

export default Contact;