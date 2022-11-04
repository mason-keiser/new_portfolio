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
                    <a href="https://www.linkedin.com/in/masonkeiser-li"
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
                    <a href="/assets/Mason Keiser Resume.pdf" 
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
                    <p>My name is Mason Keiser, and I&#39;m a Software Developer who has a passion for technology, coding, and the ocean.</p>
                    <p>What got me interested in coding initially was the ability to create new and unique ways around everyday problems, but what keeps me going is my passion for creating efficient business solutions through code. </p>
                    <p>I have developed skills in languages such as, JavaScript (Es5 & Es6), jQuery, React.js, Node.js, Express.js, Python, HTML, Bootstrap, CSS, and PostgreSQL. The tools that I use to assist in the development process are Git/Github, Postman, npm, and Webpack. I&#39;ve also participated in team-based hackathons, as well as solo projects, to build full-stack web applications.</p>
                    <p>I&#39;ve been very fortunate to have gained experience working at the global company First American Title. My initial role at First American was within Compliance and Endpoint Security Operations and the Network and Cloud Security Operations. After my first Internship role ended, I transferred over to the Cloud Engineering Product Team within the Information Security sector where I worked closely with high level Python code, as well as the AWS cloud environment. </p>
                    <p>Having proven myself as a valuable asset to First American Title I was extended an offer for a full time position as an Associate Business Systems Analyst. Shortly after taking this role I have been able to drastically increase productivity and efficiency for my team's overall output.</p>
                    <p>I&#39;m an excellent communicator and team member who can thrive in any work environment. My goal is to gain experience and exposure to new and upcoming technologies to further benefit my skill set and continuously bring new value to my team! </p>
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