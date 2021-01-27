import React from 'react';
import {
  Col,
  Card,
  CardBody
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';

export default function Skills_Card(props) {
    const tert = (props.skill.subname) ? 
        <h5 className='m-auto'>{props.skill.subname}</h5> : 
        <h5 className='m-auto line'></h5>
  return (
    <Col 
      className="mr-5 ml-5 mobile-card m-auto skillC p-0">
      <Card className='h-100 skills-card border-0 slide-in-10 p-0' id='skillCard'>
        <CardBody className='m-auto'>
        <div className='d-flex flex-column justify-content-center'>
          <LazyLoad
            className='m-auto'
            debounce={false}
            height={96}
            offsetVertical={350}>
            <div className="decoration-none border-div-small d-flex" id='icon2'>
                <i id='skillIcon' alt="Icon"
                className={ `${props.skill.className}` }/>
            </div>
          </LazyLoad>
          <div className="my-3">
            <h4 className="text-center">{props.skill.name}</h4>
          </div>
          <div className='m-auto'>
            {tert}
          </div>
        </div>
        </CardBody>
      </Card>
    </Col>
    )
}