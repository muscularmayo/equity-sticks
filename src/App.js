import React, { Component } from 'react';
import EquityStick from './EquityStick.js';
import Tracker from './Tracker.js';
import './app.css';

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
    if(localStorage.length !== 0) {
      let students = JSON.parse(localStorage.students);
      this.setState({students: students})
    } else {
      localStorage.students = '[]'
    }
  }

  render () {
    let heading = ['Student', 'Absent', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Total']
    return(
      <div>
        <EquityStick changeParentStateStudents={this.changeParentStateStudents}/>
        <Tracker className='heading' heading={heading} body={this.state.students}/>
      </div>
    );
  }


}

export default App;
