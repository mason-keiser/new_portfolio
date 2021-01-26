import React from 'react';
import {
  Card,
  CardBody,
  CardFooter
} from 'reactstrap';

export default function ProjectCard(props) {
 
  
  return (
    <Card id='projCard' className=" fade-in h-100 rounded border slide-in-10 mt-5 mb-5 ml-3 mr-3"
      style={{ animationDelay: props.delay + 'ms' }}>
        <a className="ribbon ribbon-top-right" href={props.project.github}><span >Github </span></a>
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
        <div href={props.project.live} className='p-3 black '>
        <a href={props.project.live} className='arrow'> ▶</a>
            <a href={props.project.live} className=" appTit mt-3 font-weight-bold">
                {props.project.name}
            </a>
            <h6 id='sub' className='mt-3 mb-2'>{props.project.subname}</h6>
            <div className="d-flex align-content-start flex-wrap w-100 border-dark mt-3">
                {(props.project.description)}
                {props.project.technologies}
            </div>
        </div>
 
      </CardBody>
     
    </Card>
  );
}