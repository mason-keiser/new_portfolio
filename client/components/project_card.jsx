import React from 'react';
import {
  Card,
  CardBody,
  CardFooter
} from 'reactstrap';

export default function ProjectCard(props) {
 
  
  return (
    <Card id='projCard' className="h-100 rounded border slide-in-10 mt-5 mb-5"
      style={{ animationDelay: props.delay + 'ms' }}>
      <CardBody
        className="p-0 h-25">
        <a href={props.project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer decoration-none h-50 position-relative"
          id='project'>
          <img src={props.project.image}
            className="img-fluid h-50border-rounded proj-img"
            alt={props.project.alt}
            id='proj-Img' />
        </a>
        <div className='p-3 '>
            <h5 className=" mt-3 font-weight-bold">
                {props.project.name}
            </h5>
            <h6 id='sub' className='mt-3 mb-2'>{props.project.subname}</h6>
            <div className="d-flex align-content-start flex-wrap w-100 border-dark mt-3">
                {(props.project.description)}
            </div>
        </div>
      </CardBody>
     
    </Card>
  );
}