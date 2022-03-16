import React, {Component} from 'react';

class TableRow extends Component {
  render() {
    let row = this.props.row;
    return (
      <tr>
        <td>
          {row}
        </td>
      </tr>
    )
  }
}

export default TableRow;