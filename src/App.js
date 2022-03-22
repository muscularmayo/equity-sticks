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
      presentStudents: [],
      studentCounts: []
    }
    this.changeParentStateStudents = this.changeParentStateStudents.bind(this)
    this.changePresentStudents = this.changePresentStudents.bind(this)
    this.addStudentCounts = this.addStudentCounts.bind(this)
    this.changeStudentCounts = this.changeStudentCounts.bind(this)
    this.resetStudentCounts = this.resetStudentCounts.bind(this)
    this.handleAbsentChange = this.handleAbsentChange.bind(this)
  }

  changeParentStateStudents (value) {
    const students = [...this.state.students]
    students.push(value)
    this.setState({
      students: students,
      presentStudents: students
     })
  }

  changeStudentCounts (value, name, day) {
    let newStudentCountsState = [...this.state.studentCounts]
    for (let i=0; i<newStudentCountsState.length; i++) {
      if (newStudentCountsState[i].name === name) {
        let currentStudentCount = newStudentCountsState[i]
        currentStudentCount[day] = value
        currentStudentCount.total = Number(currentStudentCount.monday) + Number(currentStudentCount.tuesday) + Number(currentStudentCount.wednesday) + Number(currentStudentCount.thursday) + Number(currentStudentCount.friday)
      }
    }
    this.setState({
      studentCounts: newStudentCountsState
    }, function () {
      localStorage.studentCounts = JSON.stringify(newStudentCountsState)
    })
  }

  resetStudentCounts (arr) {
    this.setState({
      studentCounts: arr
    }, function () {
      localStorage.studentCounts = JSON.stringify(arr)
      window.location.reload();
    })
  }

  changePresentStudents () {
    //arr.splice(this.props.index, 0, name); for adding back into the system

  }

  handleAbsentChange (name) {
    let newStudentCountsState = [...this.state.studentCounts]
    for (let i=0; i<newStudentCountsState.length; i++) {
      if (newStudentCountsState[i].name === name) {
        newStudentCountsState[i].absent = !newStudentCountsState[i].absent;
      }
    }
    this.setState({
      studentCounts: newStudentCountsState
    }, function () {
      localStorage.studentCounts = JSON.stringify(newStudentCountsState)
    })
  }


  addStudentCounts (name) {
    let newStudent = {
      name: name,
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      absent: false,
      total: 0,
      notes: '',
    }
    let newStudentCountsState = [...this.state.studentCounts]
    newStudentCountsState.push(newStudent)
    this.setState({
      studentCounts: newStudentCountsState
    })
    localStorage.studentCounts = JSON.stringify(newStudentCountsState)
  }

  componentDidMount () {
    if(localStorage.length !== 0) {
      let students = JSON.parse(localStorage.students);
      let studentCounts = JSON.parse(localStorage.studentCounts)
      studentCounts.forEach((each) => {
        each.absent = false;
      })
      localStorage.studentCounts = JSON.stringify(studentCounts)
      this.setState({
        students: students,
        presentStudents: students,
        studentCounts: studentCounts
      })
    } else {
      localStorage.students = '[]'
      localStorage.studentCounts = '[]'
    }
  }

  render () {
    let heading = ['Student', 'Absent', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Total']
    return(
      <div>
        <EquityStick addStudentCounts={this.addStudentCounts} students={this.state.students} changeParentStateStudents={this.changeParentStateStudents}/>
        <Tracker handleAbsentChange={this.handleAbsentChange} resetStudentCounts={this.resetStudentCounts} studentCounts={this.state.studentCounts} changeStudentCounts={this.changeStudentCounts} changePresentStudents={this.changePresentStudents} presentStudents={this.state.presentStudents} heading={heading} body={this.state.students}/>
      </div>
    );
  }


}

export default App;
