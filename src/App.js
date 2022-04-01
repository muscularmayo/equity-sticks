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
      studentCounts: [],
      currentDay: '',
    }
    this.changeParentStateStudents = this.changeParentStateStudents.bind(this)
    this.addStudentCounts = this.addStudentCounts.bind(this)
    this.changeStudentCounts = this.changeStudentCounts.bind(this)
    this.resetStudentCounts = this.resetStudentCounts.bind(this)
    this.handleAbsentChange = this.handleAbsentChange.bind(this)
    this.locateStudentValueForCurrentDay = this.locateStudentValueForCurrentDay.bind(this)
  }

  locateStudentValueForCurrentDay (name) {
    let todayCount;
    let currentDay = this.state.currentDay.toLowerCase();
    if(this.state.currentDay === 'Saturday' || this.state.currentDay === 'Sunday') {
      console.log(this.state.currentDay)
      return;
    }

    for(let i = 0; i < this.state.studentCounts.length; i++) {
      if(this.state.studentCounts[i].name === name) {
        todayCount = this.state.studentCounts[i][currentDay]
      }
    }
    console.log(todayCount)
    return Number(todayCount);
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
    // if we change to answered/not answered - we will have to change this here, answered/not answered and just count that
  }

  resetStudentCounts (arr) {
    this.setState({
      studentCounts: arr
    }, function () {
      localStorage.studentCounts = JSON.stringify(arr)
      window.location.reload();
    })
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
    //this will be changed to name,answered,notAnswered,total,notes, and we can add note stuff
    let newStudentCountsState = [...this.state.studentCounts]
    newStudentCountsState.push(newStudent)
    this.setState({
      studentCounts: newStudentCountsState
    })
    localStorage.studentCounts = JSON.stringify(newStudentCountsState)
  }

  /* addNotes(name, notes) {
    map through the current count, find the one that matches the name we want, and then copy and replace it with our notes
    copy the whole array of studentCount, then work from there.
  }
  */

  componentDidMount () {
    const d = new Date();
    let day = d.getDay()
    if (day === 0) {
      day = 'Sunday'
    } else if (day === 1) {
      day = 'Monday'
    } else if (day === 2) {
      day = 'Tuesday'
    } else if (day === 3) {
      day = 'Wednesday'
    } else if (day === 4) {
      day = 'Thursday'
    } else if (day === 5) {
      day = 'Friday'
    } else if (day === 6) {
      day = 'Saturday'
    }

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
        studentCounts: studentCounts,
        currentDay: day,
      })
    } else {
      localStorage.students = '[]'
      localStorage.studentCounts = '[]'
    }
  }

  render () {
    let heading = ['Student', 'Absent', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Total']
    //heading would presumably be student, absent, answered, not answered, total
    return(
      <div>
        <EquityStick addStudentCounts={this.addStudentCounts} students={this.state.students} changeParentStateStudents={this.changeParentStateStudents}/>
        <Tracker locateStudentValueForCurrentDay={this.locateStudentValueForCurrentDay} currentDay={this.state.currentDay} handleAbsentChange={this.handleAbsentChange} resetStudentCounts={this.resetStudentCounts} studentCounts={this.state.studentCounts} changeStudentCounts={this.changeStudentCounts} changePresentStudents={this.changePresentStudents} presentStudents={this.state.presentStudents} heading={heading} body={this.state.students}/>
      </div>
    );
  }


}

export default App;
