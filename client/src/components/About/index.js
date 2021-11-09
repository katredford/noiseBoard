import React from 'react';
import coverImage from "../../assets/cover/radialRainbow.jpg";

function About() {
    return (
        <section className=''>
            <h1 id ="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={ { width: "50%" } } alt="cover" />
        </section>
        
    );
}

export default About;