import React, {Component} from 'react';
import TableRow from './TableRow.js';
import RandomSelector from './RandomSelector.js'
import ClearAll from './ClearAll.js'
import './tracker.css';

class Tracker extends Component {
  constructor(props) {
    super(props)
    this.changeAbsentState = this.changeAbsentState.bind(this)
  }

  changeAbsentState() {
    //let state = {...this.state}
    //this.setState({absent: !this.state.absent})
  }

  render () {
    let heading = this.props.heading;
    let body = this.props.body;
    return (
      <div>
        <table>
        <thead>
          <tr>
            {heading.map(head => <th key={head}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map((row,i) => <TableRow currentStudentCountObject={this.props.studentCounts[i]} changeStudentCounts={this.props.changeStudentCounts} index={i} key={'row' + i} name={row} />)}
        </tbody>
      </table>
      <RandomSelector availableStudents={this.props.presentStudents} students={body}/>
      <ClearAll />
      </div>

    )
  };
}

export default Tracker;
