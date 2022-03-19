import React, {Component} from 'react';
import './count.css';

class Total extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0,
  //   }

  // }



  render() {
    return (
      <div>
        {this.props.value}
      </div>
    )
  }
}

export default Total;