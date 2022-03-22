import React, {Component} from 'react';
import TableRow from './TableRow.js';
import RandomSelector from './RandomSelector.js'
import ClearAll from './ClearAll.js'
import ResetCount from './ResetCount.js'
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
          {body.map((row,i) => <TableRow handleAbsentChange={this.props.handleAbsentChange} currentStudentCountObject={this.props.studentCounts[i]} changeStudentCounts={this.props.changeStudentCounts} index={i} key={'row' + i} name={row} />)}
        </tbody>
      </table>
      <RandomSelector studentCounts={this.props.studentCounts} availableStudents={this.props.presentStudents} students={body}/>
      <ClearAll />
      <ResetCount resetStudentCounts={this.props.resetStudentCounts} students={body} studentCounts={this.props.studentCounts}/>
      </div>

    )
  };
}

export default Tracker;
