import React, {Component} from 'react';
import Absent from './Absent.js'

class TableRow extends Component {
  render() {
    let row = this.props.row;
    return (
      <tr>
        <td>
          {row}
        </td>
        <td>
          <Absent />
        </td>
      </tr>
    )
  }
}

export default TableRow;