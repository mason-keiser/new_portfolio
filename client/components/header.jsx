import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
  import {
    Link,
    animateScroll as scroll
  } from 'react-scroll';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
          };
        this.handleToggle = this.handleToggle.bind(this)
        this.navbarIcon = this.navbarIcon.bind(this);
    }

    componentDidUpdate() {
      this.navbarIcon()
    }
    componentDidMount() {
      this.navbarIcon()
    }

    handleToggle() {
        if (window.innerWidth < 768) {
          this.setState({ isOpen: !this.state.isOpen });
        }
      }

    navbarIcon() {
      let span = document.getElementById('navToggle').children;
      let spanObj = span[0].classList;
   
      if (this.state.isOpen == true) {
        span[0].innerText = 'X'
        spanObj.replace('navbar-toggler-icon', 'btn-close')
      } if (this.state.isOpen == false) {
        span[0].innerText = null
        spanObj.replace('btn-close', 'navbar-toggler-icon')
      }
    }

    render() {
        let offset = -86;
        if (window.innerWidth < 768) {
            offset = -286;
        }
    
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos < currentScrollPos) {
                document.getElementById("navbar").style.background = "white";
                document.getElementById("item").style.color = '#24B67E'
                document.querySelector('.header-logo').style.color = '#24B67E'
            } else {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("navbar").style.backgroundColor = "transparent";
                document.getElementById("item").style.color = 'white'
                document.querySelector('.header-logo').style.color = 'white'
            }
            prevScrollpos = currentScrollPos;
        }
           
        
            return (
                <Container fluid={true} className="py-3 shadow-md sticky-top" id="navbar">
                <Navbar color="faded" light
                  expand="md"
                  className=" py-0 nav navbar-dark">
                    <NavbarBrand onClick={() => {
                    this.props.setView('main', {})
                    
                  }}
                    className="pointer decoration-none">
                  <h1 className='header-logo  img-fluid'> Mason Keiser</h1>
                  </NavbarBrand>
                  <NavbarToggler onClick={this.handleToggle} navbar="true" className='border-0 white' id='navToggle'/>
                <Collapse isOpen={this.state.isOpen} id='w' navbar>
                  <Nav className="ml-auto " navbar>
                  <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to=""
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggleå}>
                        Home
                      </Link>
                    </NavItem>
                  <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to=""
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggleå}>
                        About Me
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to=""
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggleå}>
                          Projects
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to=""
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                        Skills
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to=""
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                        Tools
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to=""
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                        Resume
                      </Link>
                    </NavItem> 
                  </Nav>
                </Collapse>
              </Navbar>
            </Container>
        )
    }
}