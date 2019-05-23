import React from 'react'

const Project = ({ projects }) => {
      return (
        <div>
          <center><h1>Project List</h1></center>
          {projects.map((project) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{project.name}</h5>  
                <p class="card-text">{project.description}</p>
                <a href="#" class="card-link">View Project</a>
              </div>
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="{project.progress}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
          ))}
        </div>
    )
};

export default Project;