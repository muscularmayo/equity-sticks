import React, {Component} from 'react';
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
        <h3 id="random">
          {this.state.randomStudent}
        </h3>
      </div>
    )


  }
}

export default RandomSelector;