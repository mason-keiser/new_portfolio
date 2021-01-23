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
            <div style={{height: '100vh', width: '100vw', position: 'relative'}}>new comp</div>
        </div>
      );
    }
  }
  export default App;
  
