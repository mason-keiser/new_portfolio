import React from 'react';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';
import Tools_Grid from './tools_grid'
export default class Tools extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tools : [
                {
                    name: 'GitHub',
                    className: 'devicon-github-original'
                }, 
                {
                    name: 'AWS',
                    className: 'devicon-amazonwebservices-original'
                },
                {
                    name: 'npm',
                    className: 'devicon-npm-original-wordmark'
                }, 
                {
                    name: 'Webpack',
                    className: 'devicon-webpack-plain'
                },
                {
                    name: 'Babel',
                    className: 'devicon-babel-plain'
                },
                {
                    name: 'VS Code',
                    className: 'devicon-visualstudio-plain'
                },
                {
                    name: 'Ubuntu',
                    className: 'devicon-ubuntu-plain'
                },
                {
                    name: 'Docker',
                    className: 'devicon-docker-plain'
                },
                {
                    name: 'PuTTY',
                    className: 'devicon-putty-plain'
                },
                {
                    name: 'Windows',
                    className: 'devicon-windows8-original',
                    subname: "7 & 8"
                }, 
                {
                    name: 'Apple',
                    className: 'devicon-apple-original'
                }, 
            ]
        } 
    }

    render() {
        return (
            <div className='skillsCont pt-5' id='tools'>
                <div className=' fade-in projTitle  fade-in'>
                    <h1>Tools</h1>
                </div>
                <div className="skills-section mt-4 mb-4 fade-in" id="skills">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <Tools_Grid tools={this.state.tools}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}