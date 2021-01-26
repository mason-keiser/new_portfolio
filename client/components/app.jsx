import React from 'react'
import About from './about';
import Header from './header';
import Home from './home';
import Projects from './projects';
import Skills from './skills';

class App extends React.Component {
    constructor() {
      super();
      this.fade =this.fade.bind(this)
    }

    componentDidMount() {
        setInterval(() => {
            this.fade()
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
  
    render() {
      return (
        <div>
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
        </div>
      );
    }
  }
  export default App;
  
