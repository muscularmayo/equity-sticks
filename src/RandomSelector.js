import React, {Component} from 'react';

class RandomSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      random: ''
    }
  }

  randomize () {
    //this.props.students
    //randomly select one of them
    //return?
  }

  render() {
    return (
      <div>
        <button onClick={this.randomize}>
          Randomly Select
        </button>
        <div>
          {this.state.random}
        </div>
      </div>
    )


  }
}

export default RandomSelector;