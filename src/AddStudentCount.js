import React, {Component} from 'react';

class addStudentCount extends Component {
  constructor(props) {
    super(props)

    this.addCount = this.addCount.bind(this)
  }

  addCount () {
    if(this.props.day === 'Saturday' || this.props.day === 'Sunday' || this.props.name === '') {
      return;
    }
    let currentDay = this.props.day.toLowerCase();
    let currentDayValue = Number(this.props.locateStudentValueForCurrentDay(this.props.name))
    currentDayValue++;
    console.log(currentDayValue, this.props.name, currentDay)
    this.props.changeStudentCount(currentDayValue, this.props.name, currentDay)
  }

  render() {
    return (
      <button onClick={this.addCount}>
        +
      </button>
    )


  }
}

export default addStudentCount;