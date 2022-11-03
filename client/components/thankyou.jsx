import React from 'react'
import StarfieldAnimation from 'react-starfield-animation';

export default class ThankYou extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='thankYouCont' id='thanks'>
                
                <div className='thanksCont'>
                    <div className=' fade-in projTitle  fade-in'>
                        <h1>Thank You</h1>
                    </div>
                    <div className='centRow'>
                        <div className=' fade-in d-flex flex-column align-content-center' id='lincs'>
                            <h6>Orange County CA, 92675</h6>
                            <a href="mailto:masonksr5@gmail.com"  rel="noopener noreferrer">masonksr5@gmail.com</a>
                            <a className='m-1 num' href="tel:+17145048070">+1 (714) 504 - 8070</a>
                        </div>
                        <div className="my-3 mb-2 d-flex justify-content-center fade-in slide-in-10 pt-2 border-black" style={{color: 'black'}}>
                            <a href="https://github.com/mason-keiser/" 
                                target="_blank"
                                style={{textDecoration: 'none'}}
                                rel="noopener noreferrer"
                                className="decoration-none contact-github pointer mr-2"
                                aria-label="Github">
                                <div className="decoration-none border-div-small d-flex" id='icon'>
                                    <i className="fab fa-github text-black  m-auto" />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/masonkeiser-li" 
                                target="_blank"
                                style={{textDecoration: 'none'}}
                                rel="noopener noreferrer"
                                className="decoration-none  contact-linkedin pointer mr-2"
                                aria-label="LinkedIn">
                                <div className="decoration-none border-div-small d-flex" id='icon'>
                                    <i className="fab fa-linkedin text-black small-font m-auto" />
                                </div>
                            </a>
                            <a href="tel:+17145048070" 
                                target="_blank"
                                style={{textDecoration: 'none'}}
                                rel="noopener noreferrer"
                                className="decoration-none contact-general pointer mr-2"
                                aria-label="Phone">
                                <div className="decoration-none border-div-small d-flex" id='icon'>
                                    <i className="fas fa-phone-alt text-black small-font m-auto" />
                                </div>
                            </a>
                            <a href="mailto:masonksr5@gmail.com" 
                                target="_blank"
                                style={{textDecoration: 'none'}}
                                rel="noopener noreferrer"
                                className="decoration-none default-color contact-general pointer mr-2"
                                aria-label="Email">
                                <div className="decoration-none border-div-small d-flex black" id='icon'>
                                    <i className="far text-black fa-envelope small-font m-auto" />
                                </div>
                            </a>
                            <a href="/assets/MasonKeiserResume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration: 'none'}}
                                className="decoration-none contact-general pointer"
                                aria-label="Resume Download"
                                download>
                                <div className=" decoration-none border-div-small d-flex" id='icon'>
                                    <i className="far fa-file-alt text-black small-font m-auto" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <h6 style={{textAlign: 'center'}}>Mason Keiser ©</h6>
                </div>
            </div>
        )
    }
}