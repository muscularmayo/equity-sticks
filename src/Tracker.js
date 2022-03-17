import React, {Component} from 'react';
import TableRow from './TableRow.js';
import './tracker.css';

class Tracker extends Component {


  render () {
    let heading = this.props.heading;
    let body = this.props.body;
    return (
      <table>
        <thead>
          <tr>
            {heading.map(head => <th key={head}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map(row => <TableRow row={row} />)}
        </tbody>
      </table>
    )
  };
}

export default Tracker;
