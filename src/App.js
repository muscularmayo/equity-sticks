import React, { Component } from 'react';
import EquityStick from './EquityStick.js';
import Tracker from './Tracker.js';
import RandomSelector from './RandomSelector.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      students: [],
      classes: [],
    }
    this.changeParentStateStudents = this.changeParentStateStudents.bind(this)
  }

  changeParentStateStudents (value) {
    const students = [...this.state.students]
    students.push(value)
    this.setState({ students: students })
  }

  componentDidMount () {

  }

  render () {
    let heading = ['Student', 'Absent', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    return(
      <div>
        <EquityStick changeParentStateStudents={this.changeParentStateStudents}/>
        <Tracker heading={heading} body={this.state.students}/>
        <RandomSelector students={this.state.students}/>
      </div>
    );
  }


}

export default App;
