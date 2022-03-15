import React, { Component } from 'react';
import EquitySticks from './EquitySticks.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      students: [],
    }
  }
  render () {
    return(
      <div>
        <EquitySticks />
      </div>
    );
  }


}

export default App;
