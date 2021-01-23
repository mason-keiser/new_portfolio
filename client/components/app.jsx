import React from 'react'
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
            <div style={{ background: '#F5F5F5', height: '100vh', width: '100vw'}}>About Me</div>
        </div>
      );
    }
  }
  export default App;
  
