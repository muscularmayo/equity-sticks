import React, {Component} from 'react';
import './randomselector.css'

class RandomSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomStudent: ''
    }
    this.randomize = this.randomize.bind(this)
  }

  randomize () {
    //this.props.presentStudents
    //randomly select one of them
    //return?
    var randomStudent = this.props.availableStudents[Math.floor(Math.random()*this.props.availableStudents.length)];
    this.setState({
      randomStudent: randomStudent
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.randomize}>
          Randomly Select
        </button>
        <h3 id="random">
          {this.state.randomStudent}
        </h3>
      </div>
    )


  }
}

export default RandomSelector;