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
            if (currentScrollPos >= 200) {
                document.getElementById("navbar").style.background = "white";
                let navItems = document.querySelectorAll('.nav-item');
                for (let i = 0; i < navItems.length; i++) {
                    navItems[i].firstChild.style.color = '#24B67E'
                    navItems[i].firstChild.classList.add('green')
                    navItems[i].firstChild.id = ''
                }
                let nav = document.querySelector('nav');
                    nav.classList.remove('navbar-dark');
                    nav.classList.add('navbar-light')
                document.querySelector('.header-logo').style.color = '#24B67E'
                document.getElementById("btn").style.display = 'flex';
            } else if (prevScrollpos < 500 || prevScrollpos <= 0) {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("navbar").style.backgroundColor = "transparent";
                let navItems = document.querySelectorAll('.nav-item');
                for (let i = 0; i < navItems.length; i++) {
                    navItems[i].firstChild.style.color = 'white'
                    navItems[i].firstChild.classList.remove('green')
                    navItems[i].firstChild.id = 'item'
                }
                document.querySelector('.header-logo').style.color = 'white'
                let nav = document.querySelector('nav');
                    nav.classList.remove('navbar-light');
                    nav.classList.add('navbar-dark')
                
            } if (prevScrollpos < 200) {
                document.getElementById("btn").style.display = 'none';
            }
            prevScrollpos = currentScrollPos;
        }  
        
            return (
                <Container fluid={true} className="py-3 shadow-md sticky-top" id="navbar">
                <Navbar color="faded" light
                  expand="md"
                  className=" py-0 mx-auto nav navbar-dark" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <NavbarBrand onClick={() => {
                    this.props.setView('main', {})
                    
                  }}
                    className="pointer decoration-none  justify-content-center">
                  <h1 className='header-logo img-fluid'> Mason Keiser</h1>
                  </NavbarBrand>
                  <NavbarToggler onClick={this.handleToggle} navbar="true" className='border-0 white' id='navToggle'/>
                <Collapse isOpen={this.state.isOpen} id='w' navbar>
                  <Nav className="mx-auto justify-content-center " navbar>
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
                        About
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
                    <NavItem className="ml-md-5 mr-md-3">
                      <a 
                        id='item'
                        href="/assets/Mason_Keiser_Resume.pdf"
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                        Resume
                      </a>
                    </NavItem> 
                  </Nav>
                </Collapse>
              </Navbar>
              <div id='btn' className='toTopBtn' onClick={() => scroll.scrollToTop()}>▲</div>
            </Container>
        )
    }
}