import React from 'react'
import {
    Container,
    Row,
    Col
  } from 'reactstrap';
  import {
    Link
  } from 'react-scroll';

export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.loadCalendar = this.loadCalendar.bind(this)
    }

    componentDidMount() {
        this.loadCalendar()
    }

    loadCalendar() {
        GitHubCalendar(".calendar", "mason-keiser", {
            summary_text: null,
            responsive: true
        })
    }


    render() {
        return(
            <div className='cont' >
                <div className='aboutCont fade-in' id='about'>
                    <div className='top-row'>
                    <Row className='boutRow mt-1 mb-3'>
                        <Col md="5">
                        <div className='aboutImg' >
                            <img src="/images/me.jpg"
                            className="img-fluid fade-in slide-in-10"
                            id="aboutMe-img"
                            alt="Portrait photo of Mason Keiser"
                            />
                        </div>
                        </Col>
                        <Col md='6' className='cal' >
                            <div className='calendar'></div>
                        </Col>
                    </Row>
                    </div>
                    <div className="my-3 d-flex justify-content-center fade-in slide-in-10 pt-2 decoration-none border-black" style={{color: 'black'}}>
                        <a href="https://github.com/mason-keiser/" 
                            style={{textDecoration: 'none'}}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="decoration-none contact-github pointer mr-2"
                            aria-label="Github">
                            <div className="decoration-none border-div-small d-flex" id='icon'>
                                <i className=" decoration-none fab fa-github text-black  m-auto" />
                            </div>
                        </a>
                    <a href="https://www.linkedin.com/in/mason-keiser-55323bb9/"
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-none  contact-linkedin pointer mr-2"
                        aria-label="LinkedIn">
                        <div className="decoration-none border-div-small d-flex" id='icon'>
                            <i className="decoration-none fab fa-linkedin text-black small-font m-auto" />
                        </div>
                    </a>
                    <a href="tel:+17145048070" 
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-none contact-general pointer mr-2"
                        aria-label="Phone">
                        <div className="decoration-none border-div-small d-flex" id='icon'>
                            <i className="decoration-none fas fa-phone-alt text-black small-font m-auto" />
                        </div>
                    </a>
                    <a href="mailto:masonksr5@gmail.com" 
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-none default-color contact-general pointer mr-2"
                        aria-label="Email">
                        <div className="decoration-none border-div-small d-flex black" id='icon'>
                            <i className="decoration-none far text-black fa-envelope small-font m-auto" />
                        </div>
                    </a>
                    <a href="/assets/MK_Resume.pdf" 
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-none contact-general pointer"
                        aria-label="Resume Download"
                        download>
                        <div className=" decoration-none border-div-small d-flex" id='icon'>
                            <i className="decoration-none far fa-file-alt text-black small-font m-auto" />
                        </div>
                    </a>
                </div>
                <div className='aboutTitle'>
                    <h2 className=''>About Me</h2>
                </div>
                 <div className="slide-in-10 pb-5 stor">
                    <p>I&#39;m Mason Keiser, and I&#39;m a Software Engineer who has a passion for technology, coding, and the ocean.</p>
                    <p>I&#39;ve developed skills in languages such as JavaScript (ES5 + ES6), React.js, jQuery, Node.js, Express, HTML, Bootstrap and CSS. My skills are accustomed to using tools such as; Git/GitHub, Postman, npm, and Webpack. I&#39;ve also participated in team-based hackathons, as well as solo projects, to build full-stack web applications.</p>
                    <p>What got me interested in coding initially was the ability to create new and unique ways around everyday problems, but what keeps me going is my passion for making my ideas come to life through code.</p>
                  </div>
                  <div className='contactButton'>
                  <Link activeClass="active"
                        id='cbtn'
                        to="thanks"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="pointer nav-link">
                        Contact Me
                      </Link>
                  </div>
                </div>
            </div>
        )
    }
}