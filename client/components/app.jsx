import React from 'react'
import About from './about';
import Header from './header';
import Home from './home';
import Projects from './projects';
import Segwey from './segwey';
import Skills from './skills';
import Tools from './tools'

class App extends React.Component {
    constructor() {
      super();
      this.fade =this.fade.bind(this)
      this.borderB = this.borderB.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            this.fade()
            this.borderB()
        },2000)
        
    }

    fade() {
        const appearOptions = {
           
            rootMargin: '0px 0px -100px 0px'
        }
        const faders = document.querySelectorAll('.fade-in')
        const appearOnScroll = new IntersectionObserver
        (function(
            entries,
            appearOnScroll
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    entry.target.classList.remove('appear')
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            })
        },appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader)
        })
    }

    borderB() {
        const navItems =document.querySelectorAll('#item');
        const gNavitems = document.querySelectorAll('#g')
        console.log(navItems, gNavitems)
    }
  
    render() {
      return (
        <div>
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Segwey/>
            <Tools/>
        </div>
      );
    }
  }
  export default App;
  
