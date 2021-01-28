import React from 'react'
import StarfieldAnimation from 'react-starfield-animation';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';
import Segwey_Card from './segwey_card'

export default class Segwey extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptions: [
                {
                    adj: 'Hard Worker'
                },
                {
                    adj: 'Motivated'
                },
                {
                    adj: 'Dependable'
                },
                {
                    adj: 'Team Player'
                }
            ]
        }
    }

    render() {
        let delay  = 0;
        let star = (window.screen.width < 340) ?
             '140vh'
            : 'inherit'

        return (
            <div className='segweyCont'>
                 <StarfieldAnimation className='starfield2'
                style={{
                backgroundColor: 'black',
                position: 'absolute',
                width: '100%',
                height: 'inherit',
                margin: '0'
                }}/>
                <div className="segwey-section mb-4 fade-in" id="projects" style={{height: '100%'}}>
                    <Container className='d-flex justify-content-center align-content-center align-items-center' style={{height: '100%'}}>
                        <Row>
                            <Col xs="12">
                                <Row className=" fade-in row-cols-1 row-cols-md-4 row-cols-lg-4 justify-content-center pt-5">
                                    {
                                        this.state.descriptions.map((desc, index) => {
                                            delay += 100;
                                            return (
                                              <Col key={index}
                                                className="mb-2" id='fold'>
                                                {desc.adj
                                                  ? <Segwey_Card desc={desc}
                                                    delay={delay}
                                                    />
                                                  : null}
                                              </Col>
                                            );
                                          })
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}