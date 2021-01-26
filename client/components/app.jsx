import React from 'react'
import About from './about';
import Header from './header';
import Home from './home';
import Projects from './projects';

class App extends React.Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div>
            <Header/>
            <Home/>
            <About/>
            <Projects/>
        </div>
      );
    }
  }
  export default App;
  
