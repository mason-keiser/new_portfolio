import React from 'react';
import {
  Col,
  Card,
  CardBody
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';




export default class Tools_Card extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const tert = (this.props.tool.subname) ? 
    <h5 className='m-auto'>{this.props.tool.subname}</h5> : 
    <h5 className='m-auto line'></h5>
  return (
    <Col 
      className="mr-5 ml-5 mobile-card m-auto skillC p-0" id='skillC'>
      <Card data-tilt className=' js-tilt h-100 skills-card border-0 slide-in-10 p-0' id='skillCard'>
        <CardBody className='m-auto' style={{flex: 'none'}} id='inner'>
        <div className='d-flex flex-column justify-content-center'>
          <LazyLoad
            className='m-auto'
            debounce={false}
            height={96}
            offsetVertical={350}>
            <div className="decoration-none border-div-small d-flex" id='icon2'>
                <i id='skillIcon' alt="Icon"
                className={ `${this.props.tool.className}` }/>
            </div>
          </LazyLoad>
          <div className="my-3">
            <h4 className="text-center">{this.props.tool.name}</h4>
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
}