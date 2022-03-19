import React, {Component} from 'react';
import Absent from './Absent.js';
import Count from './Count.js';
import Total from './Total.js';

class TableRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      absent: false,
      total: 0,
    }
  }

  handleCountChange (day, value) {
    //let state = {...this.state}
    // this.setState({[day]: value})
    //total needs to reflect
  }

  handleAbsentChange () {
    //let state = {...this.state}
    //this.setState({absent: !this.state.absent})
  }

  //need to add props for value for all these since we're lifting state up
  //value will correspond to state here, and the props will update everytime we run one of these and change state

  render() {
    let name = this.props.name;
    return (
      <tr>
        <td>
          {name}
        </td>
        <td>
          <Absent index={this.props.index}/>
        </td>
        <td>
          <Count day="monday"/>
        </td>
        <td>
          <Count day="tuesday"/>
        </td>
        <td>
          <Count day="wednesday"/>
        </td>
        <td>
          <Count day="thursday"/>
        </td>
        <td>
          <Count day="friday"/>
        </td>
        <td>
          <Total />
        </td>
      </tr>
    )
  }
}

export default TableRow;