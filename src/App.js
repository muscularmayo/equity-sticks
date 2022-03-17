import React, { Component } from 'react';
import EquityStick from './EquityStick.js';
import Tracker from './Tracker.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      students: [],
      heading: ['Student', 'Absent', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
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
    return(
      <div>
        <EquityStick changeParentStateStudents={this.changeParentStateStudents}/>
        <Tracker heading={this.state.heading} body={this.state.students}/>
      </div>
    );
  }


}

export default App;
