import React, {Component} from 'react';

class ResetCount extends Component {
  constructor(props) {
    super(props)

    this.resetCount = this.resetCount.bind(this)
  }

  resetCount () {
    let resetStudentCountState = [...this.props.studentCounts]
    resetStudentCountState.forEach((student) => {
      student.monday = 0;
      student.tuesday = 0;
      student.wednesday = 0;
      student.thursday = 0;
      student.friday = 0;
      student.total = 0;
    })

    this.props.resetStudentCounts(resetStudentCountState)


  }

  render() {
    return (
      <button onClick={this.resetCount}>
        Reset Student Counts
      </button>
    )


  }
}

export default ResetCount;