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
        </div>
      );
    }
  }
  export default App;
  
