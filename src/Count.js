import React, {Component} from 'react';
import './count.css';

class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this.setState({
      count: this.props.value
    })

  }

  handleChange (e) {
    this.setState({count: e.target.value})
    this.props.update(this.props.day, e.target.value)
  }

  render() {
    return (
      <div className='count-container'>
          <input
            type="number"
            value={this.props.value}
            onChange={this.handleChange}
            className='count'
            min={0}
            max={99}
          />
    </div>
    )
  }
}

export default Count;