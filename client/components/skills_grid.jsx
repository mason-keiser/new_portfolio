import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Skills_Card from './skills_card';

function Skills_Grid(props) {
  return (
    <Row
      className=" fade-in row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center pt-5">
      {getSkills(props.skills)}
    </Row>
  );
}

export default Skills_Grid;

function getSkills(skillsArray) {
  let delay = 0;
  return skillsArray.map((skill, index) => {
    delay += 100;
    return (
      <Col key={index}
        className="mb-4 mt-4">
        {skill.name
          ? <Skills_Card skill={skill}
            delay={delay}
            />
          : null}
      </Col>
    );
  });
}