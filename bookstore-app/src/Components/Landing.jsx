import React from 'react';

// ==============
// Assets Imports
// ==============
import {default as Library} from "../Assets/Library.jpg";
import {default as Slider} from "../Assets/Slider-Desktop.svg";

function Landing() {
    return (
        <section className="landing">
            <div className="landing-card">
            <img src={Library} alt="library" id="Img" />
            </div>

            <p>"Reading is Fun"</p>

            <img src={Slider} alt="Slider" className="slider" />

            <h1 className="heading" id="Home">Read Your Next Favourite Book</h1>

            <section className="landing-paragraph">
                <p>Find out Books that you'll love, be part of XTBookStore Where new books are added frequently.</p>
            </section>
        </section>
    )
}

export default Landing;