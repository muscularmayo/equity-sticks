import React, {Component} from 'react';

class EquityStick extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
    this.changeStudentsState = this.changeStudentsState.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  changeStudentsState (event) {
    if(this.props.students.includes(this.state.value)) {
      alert('please enter a unique name')
      event.preventDefault();
      return;
    } else {
      this.props.changeParentStateStudents(this.state.value)
      this.props.addStudentCounts(this.state.value)

      let currentStudentsState = JSON.parse(localStorage.students)
      currentStudentsState.push(this.state.value)
      localStorage.students = JSON.stringify(currentStudentsState);

      this.setState({value: ''})
      event.preventDefault();
    }
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }



  render () {
    return (
    <form onSubmit={this.changeStudentsState}>
      <label>
      Student:
      <input type="text" value={this.state.value} onChange={this.handleChange}></input>
      </label>
      <button type="submit">Submit</button>
    </form>
    )
  };
}

export default EquityStick;
