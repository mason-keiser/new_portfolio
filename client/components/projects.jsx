import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Grid from './project_grid'

export default class Projects extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            projects: [
                {
                  id: 1,
                  image: '/images/myhea.png',
                  alt: 'Home page image',
                  name: 'My Health',
                  subname: 'Full Stack Web Application',
                  technologies: 'Developed using React.js, Node.js, PostgreSQL, Bootstrap, HTML, and CSS.',
                  description: 'A full stack application for medical patients to keep track of their pain, symptoms and medications on a daily basis. ',
                  github: 'https://github.com/mason-keiser/my-health',
                  live: 'https://mh.masonkeiser.com'
              },
              {
                  id: 2,
                  image: '/images/bw.png',
                  alt: 'Home page image',
                  name: 'Beach Weather',
                  subname: 'Web Application',
                  technologies: 'Developed using; React.js, Bootstrap, HTML, CSS, GoogleMaps API, and OpenWeatherMaps API.',
                  description: 'An application for users to find the nearest beach in SoCal and that will display the weather at the beach selected by the user. ',
                  github: 'https://github.com/mason-keiser/beach-finder',
                  live: 'https://bw.masonkeiser.com/'
              },
              {
                id: 4,
                image: '/images/code-notes.png',
                alt: 'Home page image',
                name: 'Code Notes',
                subname: 'Full Stack Desktop Web Application',
                technologies: 'Developed using; React.js, Node.js, PostgreSQL, Bootstrap, HTML, and CSS.',
                description: 'A full stack web application for students who want to organize there Zoom recordings, class notes, and assignments in one place with their class/cohort-mate. ',
                github: 'https://github.com/mason-keiser/class-notes',
                live: 'https://code-notes.masonkeiser.com/'
            },
              {
                  id: 3,
                  image: '/images/nomad.png',
                  alt: 'Home page image',
                  name: 'Nomadic Living',
                  subname: 'Full Stack Web Application',
                  technologies: 'Developed using; React.js, Node.js, PostgreSQL, Bootstrap, HTML, and CSS.',
                  description: 'A full-stack CRUD Application aimed to simulate an online shopping experience. ',
                  github: 'https://github.com/mason-keiser/wicked-sales-js',
                  live: 'https://wicked-sales.masonkeiser.com/'
              },
              {
                id: 5,
                image: '/images/screen.png',
                alt: 'Home page image',
                name: 'Daily Planner',
                subname: 'Full Stack Web Application',
                technologies: 'Developed using; React.js, Node.js, PostgreSQL, Bootstrap, HTML, and CSS.',
                description: 'A full stack CRUD web application that was designed to keep track and organize daily tasks. ',
                github: 'https://github.com/mason-keiser/task-tracker',
                live: 'https://planner.masonkeiser.com'
            }
          ]
        }
    }

    render() {
        return (
            <div className='projCont' id='projects'>
                <div className='projTitle fade-in'>
                    <h1>Projects</h1>
                </div>
                <div className="projects-section mt-4 mb-4 fade-in" id="projects">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <Grid projects={this.state.projects}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}