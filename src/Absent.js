import React, {Component} from 'react';

class Absent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    this.setState({checked: !this.state.checked})
    //this.props.handleAbsentChange()
  }

  render() {
    return (
      <div>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
    </div>
    )
  }
}

export default Absent;