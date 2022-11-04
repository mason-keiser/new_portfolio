import React from 'react';
import StarfieldAnimation from 'react-starfield-animation';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.titleObj = [
            {
                "roleName": "Business Systems Analyst",
                "className": "animateText"
            }, 
            {
                "roleName": "Web Developer",
                "className": "animateTe"
            }, 
            {
                "roleName": "Software Engineer",
                "className": "animateT"
            }
        ];
        this.textAnimation = this.textAnimation.bind(this);
    }

    textAnimation() {
        let h4 = document.getElementById('textTrans');
        
        for (let i = 0; i < this.titleObj.length; i++) {
            setTimeout(() => {
                if (i < 1) {
                    h4.textContent = this.titleObj[i].roleName;
                    h4.classList.remove('animateT');
                    void h4.offsetWidth;
                    h4.classList.add(this.titleObj[i].className);
                } else {
                    h4.textContent = this.titleObj[i].roleName;
                    h4.classList.remove(this.titleObj[i-1].className);
                    void h4.offsetWidth;
                    h4.classList.add(this.titleObj[i].className);
                }
            },i * 6000)
        }
    } 

    componentDidMount() {
        this.textAnimation();
    }

    render() {
        return (
            <div className='home-bg' id='home'>
                <StarfieldAnimation className='starfield'
                    style={{
                        backgroundColor: 'black',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        margin: '0'
                    }}
                />
                <div className='nameContainer'>
                    <h1>Mason Keiser</h1>
                    <h4 className='animateT' id = 'textTrans'>Software Engineer</h4>
                    <div className="homeIconContainer my-3 d-flex justify-content-center pt-2 decoration-none border-black" style={{color: 'black'}}>
                        <a href="https://github.com/mason-keiser/" 
                            style={{textDecoration: 'none'}}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="decoration-none contact-github pointer mr-2"
                            aria-label="Github">
                            <div className="decoration-none border-div-small d-flex" id='icon4'>
                                <i className=" decoration-none fab fa-github text-white  m-auto" />
                            </div>
                        </a>
                    <a href="https://www.linkedin.com/in/masonkeiser-li"
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-none  contact-linkedin pointer mr-2"
                        aria-label="LinkedIn">
                        <div className="decoration-none border-div-small d-flex" id='icon4'>
                            <i className="decoration-none fab fa-linkedin text-white small-font m-auto" />
                        </div>
                    </a>
                    <a href="tel:+17145048070" 
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-none contact-general pointer mr-2"
                        aria-label="Phone">
                        <div className="decoration-none border-div-small d-flex" id='icon4'>
                            <i className="decoration-none fas fa-phone-alt text-white small-font m-auto" />
                        </div>
                    </a>
                    <a href="mailto:masonksr5@gmail.com" 
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-none default-color contact-general pointer mr-2"
                        aria-label="Email">
                        <div className="decoration-none border-div-small d-flex black" id='icon4'>
                            <i className="decoration-none far text-white fa-envelope small-font m-auto" />
                        </div>
                    </a>
                    <a href="/assets/Mason Keiser Resume.pdf" 
                        style={{textDecoration: 'none'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-none contact-general pointer"
                        aria-label="Resume Download"
                        download>
                        <div className=" decoration-none border-div-small d-flex" id='icon4'>
                            <i className="decoration-none far fa-file-alt text-white small-font m-auto" />
                        </div>
                    </a>
                </div>
                </div>
            </div>
        )
    }
}