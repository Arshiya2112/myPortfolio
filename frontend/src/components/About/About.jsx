import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-title'>
            <h1>About Me</h1>
        </div>
        <div className='about-sections'>
            <div className='about-left'></div>
            <div className='about-right'>
              <div className='obout-para'>
                <p>I am a passionate software developer and MERN stack enthusiast with a strong foundation in computer science and a knack for problem-solving. My academic journey has equipped me with the technical knowledge and analytical mindset to tackle challenging software development problems. As a MERN stack developer, I am proficient in building responsive, scalable, and user-friendly web applications.</p>
                <p>Driven by my curiosity and passion for innovation, I aspire to contribute to impactful projects in a collaborative environment.</p>
              </div>
              <div className='about-skills'>
                <div className='about-skill'><p>C++</p>
                <hr style={{width:"60%"}}/></div>

                <div className='about-skill'><p>HTML & CSS</p>
                <hr style={{width:"80%"}}/></div>

                <div className='about-skill'><p>JavaScript</p>
                <hr style={{width:"60%"}}/></div>

                <div className='about-skill'><p>React</p>
                <hr style={{width:"70%"}}/></div>

                <div className='about-skill'><p>MERN Stack</p>
                <hr style={{width:"60%"}}/></div>
              </div>
            </div>
        </div>
        {/* <div className='about-achievements'>
          <div className='about-achievement'>
            <h1>7+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
        </div> */}
    </div>
  )
}

export default About