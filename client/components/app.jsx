import React from 'react'
import About from './about';
import Header from './header';
import Home from './home';

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
        </div>
      );
    }
  }
  export default App;
  
