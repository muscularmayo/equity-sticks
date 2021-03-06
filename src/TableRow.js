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
      total: 0,
      absent: false,
      notes: '',
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
      this.props.changeStudentCounts(value, this.props.name, day)
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
    //arr.splice(this.props.index, 0, name); for adding back into the system
  }

  componentDidMount () {
    this.setState({
      monday: this.props.currentStudentCountObject.monday,
      tuesday: this.props.currentStudentCountObject.tuesday,
      wednesday: this.props.currentStudentCountObject.wednesday,
      thursday: this.props.currentStudentCountObject.thursday,
      friday: this.props.currentStudentCountObject.friday,
      total: this.props.currentStudentCountObject.total
    })
  }

  //need to add props for value for all these since we're lifting state up
  //value will correspond to state here, and the props will update everytime we run one of these and change state

  render() {
    let studentName = this.props.name;
    return (
      <tr className={this.props.currentStudent === studentName ? 'highlight' : '' }>
        <td>
          {studentName}
        </td>
        <td>
          <Absent name={studentName} handleAbsentChange={this.props.handleAbsentChange} index={this.props.index}/>
        </td>
        <td>
          <Count value={this.props.currentStudentCountObject.monday} update={this.handleCountChange} day="monday"/>
        </td>
        <td>
          <Count value={this.props.currentStudentCountObject.tuesday} update={this.handleCountChange} day="tuesday"/>
        </td>
        <td>
          <Count value={this.props.currentStudentCountObject.wednesday} update={this.handleCountChange} day="wednesday"/>
        </td>
        <td>
          <Count value={this.props.currentStudentCountObject.thursday} update={this.handleCountChange} day="thursday"/>
        </td>
        <td>
          <Count value={this.props.currentStudentCountObject.friday} update={this.handleCountChange} day="friday"/>
        </td>
        <td>
          <Total value={Number(this.props.currentStudentCountObject.monday) + Number(this.props.currentStudentCountObject.tuesday) + Number(this.props.currentStudentCountObject.wednesday) + Number(this.props.currentStudentCountObject.thursday) + Number(this.props.currentStudentCountObject.friday)}/>
        </td>
      </tr>
    )
  }
}

export default TableRow;