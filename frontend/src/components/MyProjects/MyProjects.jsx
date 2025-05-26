import React from 'react';
import './MyProjects.css';
import myproject_data from "./myprojectdata";
import arrow_icon from "../../assets/arrow_icon.svg"

const MyProjects = () => {
  return (
    <div className='myproject' id='projects'>
        <div className='myproject-title'>
            <h1>Latest Projects</h1>
        </div>
        <div className='myproject-container'>
            {myproject_data.map((project, index) => {
                return (
                  <a href={project.link}
                  key={index}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-card'>
                    <img src={project.p_img} alt={project.title} />
                    <h3>{project.title}</h3>
                  </a>
                )
            })}
        </div>
        {/* <div className='myproject-showmore'>
          <p>Show more</p>
          <img src={arrow_icon} alt="" />
        </div> */}
    </div>
  )
}

export default MyProjects