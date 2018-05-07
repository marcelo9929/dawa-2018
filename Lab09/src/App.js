import React, { Component } from 'react';

import Contador from './components/Calculadora/Calculadora';

class App extends Component {
  render() {
    return (<div>
      <Contador valor={6}/>
      <hr/>
      </div>
    );
  }
}

export default App;
