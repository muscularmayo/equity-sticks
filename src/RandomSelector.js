import React, {Component} from 'react';

class RandomSelector extends Component {

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

        </div>
      </div>
    )


  }
}

export default RandomSelector;