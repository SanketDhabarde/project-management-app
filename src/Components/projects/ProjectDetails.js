import React from 'react'
import { useParams } from 'react-router';

function ProjectDetails() {
  const { id } = useParams();
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">New Projet - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti blanditiis, libero explicabo, sapiente ex earum maiores dolore, incidunt nulla at officiis ut dignissimos dolor. Placeat non fugiat recusandae doloribus numquam.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by sank</div>
                    <div>21st may, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
