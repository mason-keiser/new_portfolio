import React from 'react';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';
import Skill_Grid from './skills_grid'
export default class Skills extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skills : [
                {
                    name: 'HTML',
                    className: 'devicon-html5-plain'
                }, 
                {
                    name: 'CSS',
                    className: 'devicon-css3-plain-wordmark'
                },
                {
                    name: 'React.js',
                    className: 'devicon-react-original-wordmark'
                }, 
                {
                    name: 'Node.js',
                    className: 'devicon-nodejs-plain'
                },
                {
                    name: 'JavaScript',
                    className: 'devicon-javascript-plain',
                    subname: 'Es5 & Es6'
                },
                {
                    name: 'Python',
                    className: 'devicon-python-plain',
                },
                {
                    name: 'C++',
                    className: 'devicon-cplusplus-plain',
                },
                {
                    name: 'PostgreSQL',
                    className: 'devicon-postgresql-plain'
                },
                {
                    name: 'Bootstrap',
                    className: 'devicon-bootstrap-plain',
                    subname: '3 & 4'
                },
                {
                    name: 'Git',
                    className: 'devicon-git-plain'
                },
                {
                    name: 'Express',
                    className: 'devicon-express-original'
                }
            ]
        } 
    }

    render() {
        return (
            <div className='skillsCont' id='skills'>
                <div className=' fade-in projTitle  fade-in'>
                    <h1>Skills</h1>
                </div>
                <div className="skills-section mt-4 mb-4 fade-in" id="skills">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <Skill_Grid skills={this.state.skills}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}