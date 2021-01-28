import React from 'react';
import {
  Col,
  Card,
  CardBody
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';




export default class Segwey_Card extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
  return (
    <Col 
      className="mr-5 ml-5 mobile-card m-auto p-0"  style={{background:'transparent'}}>
      <Card data-tilt className=' js-tilt h-100 skills-card border-0 slide-in-10 p-0'  style={{background:'transparent'}}>
        <CardBody className='m-auto' style={{flex: 'none'}} id='inner'>
        <div className='d-flex flex-column justify-content-center'>
          <LazyLoad
            className='m-auto'
            debounce={false}
            height={96}
            offsetVertical={350}>
            <div className="decoration-none border-div-small d-flex" id='icon3'>
                <i id='skillIcon2' alt="Icon"
                className='fas fa-check'/>
            </div>
          </LazyLoad>
          <div className="my-3">
            <h4 className="text-center" style={{color: 'white'}}>{this.props.desc.adj}</h4>
          </div>
        </div>
        </CardBody>
      </Card>
    </Col>
    )
  }
}