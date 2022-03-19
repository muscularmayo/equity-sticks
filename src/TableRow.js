import React, {Component} from 'react';
import Absent from './Absent.js';
import Count from './Count.js';
import Total from './Total.js';

class TableRow extends Component {
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
          <Count day="Monday"/>
        </td>
        <td>
          <Count day="Tuesday"/>
        </td>
        <td>
          <Count day="Wednesday"/>
        </td>
        <td>
          <Count day="Thursday"/>
        </td>
        <td>
          <Count day="Friday"/>
        </td>
        <td>
          <Total />
        </td>
      </tr>
    )
  }
}

export default TableRow;