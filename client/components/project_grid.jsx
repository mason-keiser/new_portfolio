import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import ProjectCard from './project_card';

function Grid(props) {
  return (
    <Row
      className="row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
      {getProjects(props.projects)}
    </Row>
  );
}

export default Grid;

function getProjects(projectsArray) {
  let delay = 0;
  return projectsArray.map((project, index) => {
    delay += 100;
    return (
      <Col key={index}
        className="mb-2" id='fold'>
        {project.description
          ? <ProjectCard project={project}
            delay={delay}
            />
          : null}
      </Col>
    );
  });
}
