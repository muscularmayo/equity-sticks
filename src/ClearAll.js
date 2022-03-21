import React, {Component} from 'react';

class ClearAll extends Component {
  constructor(props) {
    super(props)

    this.clearAll = this.clearAll.bind(this)
  }

  clearAll () {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <button onClick={this.clearAll}>
        Clear All Students
      </button>
    )


  }
}

export default ClearAll;