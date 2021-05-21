import React from 'react'

function ProjectSummary({project}) {
    return (
        <div>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>posted by sank</p>
                    <p className="grey-text">21st may, 2am</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;
