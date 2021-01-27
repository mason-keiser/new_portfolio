import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Tools_Card from './tools_card';

function Tools_Grid(props) {
  return (
    <Row
      className=" fade-in row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center pt-5">
      {getTools(props.tools)}
    </Row>
  );
}

export default Tools_Grid;

function getTools(toolsArray) {
  let delay = 0;
  return toolsArray.map((tool, index) => {
    delay += 100;
    return (
      <Col key={index}
        className="mb-4 mt-4">
        {tool.name
          ? <Tools_Card tool={tool}
            delay={delay}
            />
          : null}
      </Col>
    );
  });
}