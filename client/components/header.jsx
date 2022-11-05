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
        this.navbarIcon = this.navbarIcon.bind(this);
        this.closeExt = this.closeExt.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
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
        span[0].innerText = ''
        span[0].className = 'fa fa-times' 
        spanObj.replace('navbar-toggler-icon', 'btn-close')
        document.getElementById("navbar").style.background = "white";
        
        let navItems = document.querySelectorAll('.nav-item');
        for (let i = 0; i < navItems.length; i++) {
          navItems[i].firstChild.style.color = '#24b67e'
          navItems[i].firstChild.classList.add('green')
         navItems[i].firstChild.id = ''
        }
        document.getElementById("navbar").style.transition = '400ms ease-in'
        let nav = document.querySelector('nav');
          nav.classList.remove('navbar-dark');
          nav.classList.add('navbar-light')
        document.querySelector('.header-logo').style.color = '#24b67e'
        document.getElementById("btn").style.display = 'flex';
      } if (this.state.isOpen == false) {
        span[0].className ='fa fa-bars'
        span[0].style.fontSize = '1.5rem'
        spanObj.replace('btn-close', 'navbar-toggler-icon')
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        
        let navItems = document.querySelectorAll('.nav-item');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].firstChild.style.color = 'white'
            navItems[i].firstChild.classList.remove('green')
            navItems[i].firstChild.id = 'item'
        }
        document.getElementById("navbar").style.transition = '400ms ease-in'
        document.querySelector('.header-logo').style.color = 'white'
        let nav = document.querySelector('nav');
            nav.classList.remove('navbar-light');
            nav.classList.add('navbar-dark')
        
      }
    }

    closeExt() {
      if (window.innerWidth < 768) {
        this.handleToggle()
      }
    }

    render() {
        let offset = -86;
        if (window.innerWidth < 768) {
            offset = -286;
        }
  
        window.onscroll = function() {
            if (document.getElementById("navbar")) {
              let navItems = document.querySelectorAll('.nav-item')
              if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
                document.getElementById("navbar").style.backgroundColor = "white"
                document.getElementById("navbar").classList.add('navbar-light')
                document.getElementById("navbar").classList.remove('navbar-dark')
                document.querySelector('.header-logo').style.color = "#24b67e"
                document.getElementById("btn").style.display = 'flex'
                if (window.innerWidth < 768) {
                  document.getElementById("navToggle").firstChild.style.color = "#24b67e"
                }
                for (let i = 0; i < navItems.length; i++) {
                  navItems[i].classList.add('green');
                  navItems[i].firstChild.classList.add('green')
                  navItems[i].firstChild.id = "g"
                  navItems[i].firstChild.style.color = "#24b67e"
                }
              } else {
                document.getElementById("navbar").style.backgroundColor = "transparent"
                document.getElementById("navbar").classList.remove('navbar-light')
                document.getElementById("navbar").classList.add('navbar-dark')
                document.querySelector('.header-logo').style.color = "white"
                document.getElementById("btn").style.display = 'none'
                if (window.innerWidth < 768) {
                  document.getElementById("navToggle").firstChild.style.color = "white"
                }
                for (let i = 0; i < navItems.length; i++) {
                  navItems[i].classList.remove('green');
                  navItems[i].firstChild.classList.remove('green')
                  navItems[i].firstChild.id = "item"
                  navItems[i].firstChild.style.color = "white"
                }
              }
            }
        }
    
            return (
                <Container fluid={true} className="py-3 shadow-lg sticky-top" id="navbar">
                <Navbar color="faded" light
                  expand="md"
                  className=" py-0 mx-auto nav navbar-dark" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div onClick={() => scroll.scrollToTop()}
                    className="navLogo">
                  <h5 className='headerText mb-0'>MK</h5>
                  <h2 className="header-logo">Mason Keiser</h2>
                  </div>
                  <NavbarToggler onClick={this.handleToggle} navbar="true" className='border-0 white' id='navToggle'/>
                <Collapse isOpen={this.state.isOpen} id='w' navbar>
                  <Nav className="mx-auto justify-content-center " navbar>
                  <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                        Home
                      </Link>
                    </NavItem>
                  <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle }>
                        About
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                          Projects
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to="skills"
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
                        to="tools"
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
                        href="/assets/Mason Keiser Resume.pdf"
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
              <div id='btn' className='toTopBtn fas fa-angle-up' onClick={() => scroll.scrollToTop()}></div>
            </Container>
        )
    }
}