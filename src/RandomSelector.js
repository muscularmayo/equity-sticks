import React, {Component} from 'react';
import AddStudentCount from './AddStudentCount.js'
import './randomselector.css'

class RandomSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomStudent: '',
      lowestCount: 100,
      isShown: false,
    }
    this.randomize = this.randomize.bind(this)
    this.getAvailableStudentsArray = this.getAvailableStudentsArray.bind(this)
    this.isShown = this.isShown.bind(this)
  }

  getAvailableStudentsArray () {
    let lowestCount = this.state.lowestCount;
    let availableStudentsArray = [];
    this.props.studentCounts.forEach((each) => {
      if (each.total < lowestCount && each.absent === false) {
        lowestCount = each.total;
      }
    })

    this.props.studentCounts.forEach((each) => {
      if (each.total === lowestCount && each.absent === false) {
        availableStudentsArray.push(each)
      }
    })

    return availableStudentsArray;
  }

  isShown (bool) {
    this.setState({
      isShown: bool
    })
  }


  randomize () {
    //this.props.presentStudents
    //randomly select one of them
    //return?
    //var randomStudent = this.props.availableStudents[Math.floor(Math.random()*this.props.availableStudents.length)];
    let availableStudents = this.getAvailableStudentsArray();
    let randomStudent;
    if (availableStudents.length === 0) {
      randomStudent = 'error'
    } else {
      randomStudent = availableStudents[Math.floor(Math.random()*availableStudents.length)].name
    }

    this.setState({
      randomStudent: randomStudent
    })

    this.props.setCurrentStudent(randomStudent)
  }

  render() {
    return (
      <div>
        <button onClick={this.randomize}
                onMouseEnter={() => this.isShown(true)}
                onMouseLeave={() => this.isShown(false)}
                >
          Randomly Select
        </button>
        {this.state.isShown && (
          <div id="hover">
          Randomly selects the lowest count student that is not absent
          </div>
        )}
        <div>
          <span id="random">
            {this.state.randomStudent}
          </span>
          <AddStudentCount locateStudentValueForCurrentDay={this.props.locateStudentValueForCurrentDay} day={this.props.currentDay} name={this.state.randomStudent} changeStudentCount={this.props.changeStudentCount} />
        </div>
      </div>
    )


  }
}

export default RandomSelector;