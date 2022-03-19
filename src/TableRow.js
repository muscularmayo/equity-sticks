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
    this.handleCountChange = this.handleCountChange.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.handleAbsentChange = this.handleAbsentChange.bind(this);
  }

  handleCountChange (day, value) {
    // this.setState({[day]: Number(value)})
    // //total needs to reflect the new values also and self referencing object doesn't seem to work
    // this.updateTotal()

    this.setState({[day]: Number(value)}, function () {
      this.updateTotal()
    });
    //but what if it hasn't updated yet
  }

  updateTotal() {
    let total = Number(this.state.monday) + Number(this.state.tuesday) + Number(this.state.wednesday) + Number(this.state.thursday) + Number(this.state.friday)
    this.setState({total: total})
    //this is fine
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
          <Count update={this.handleCountChange} day="monday"/>
        </td>
        <td>
          <Count update={this.handleCountChange} day="tuesday"/>
        </td>
        <td>
          <Count update={this.handleCountChange} day="wednesday"/>
        </td>
        <td>
          <Count update={this.handleCountChange} day="thursday"/>
        </td>
        <td>
          <Count update={this.handleCountChange} day="friday"/>
        </td>
        <td>
          <Total value={this.state.total}/>
        </td>
      </tr>
    )
  }
}

export default TableRow;