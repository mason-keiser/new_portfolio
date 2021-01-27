import React from 'react';
import {
  Card,
  CardBody,
  CardFooter
} from 'reactstrap';

export default function ProjectCard(props) {
 
  
  return (
    <Card id='projCard' className=" fade-in rounded border slide-in-10 mt-5 mb-5 ml-3 mr-3"
      style={{ animationDelay: props.delay + 'ms' }}>
        <a className="ribbon ribbon-top-right" href={props.project.github}><span >View Code</span></a>
      <CardBody
        className="p-0 proj">
        <div className='img-holder'>
            <a href={props.project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer decoration-noneposition-relative"
            id='project'>
                <img src={props.project.image}
                className="img-fluid border-rounded proj-img"
                alt={props.project.alt}
                id='proj-Img' />
            </a>
        </div>
        <div href={props.project.live} className='p-3 bo black '>
        <a href={props.project.live} className=' fas fa-heart arrow'></a>
            <a href={props.project.live} className=" appTit mt-3 font-weight-bold">
                {props.project.name}
            </a>
            <h6 id='sub' className='mt-3 mb-2'>{props.project.subname}</h6>
            <div className="des d-flex align-content-start flex-wrap w-100 border-dark mt-3">
                {(props.project.description)}
                {props.project.technologies}
            </div>
        </div>
 
      </CardBody>
     
    </Card>
  );
}