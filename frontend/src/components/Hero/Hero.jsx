import React from 'react';
import './Hero.css'
import profile_image from "../../assets/profileimg.jpeg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_image} alt="" />
        <h1><span>I am Arshiya Srivastava</span>, full-stack developer based in India.</h1>
        <p>With a passion for building innovative and user-friendly web applications, experience in the MERN stack and in programming, I’m committed to creating impactful solutions.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href="/ArshiyaSrivastava.pdf" target="_blank" rel="noopener noreferrer" className='hero-resume'>View Resume</a>
        </div>
    </div>
  )
}

export default Hero