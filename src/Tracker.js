import React, {Component} from 'react';
import TableRow from './TableRow.js';
import RandomSelector from './RandomSelector.js'
import './tracker.css';

class Tracker extends Component {
  constructor(props) {
    super(props)
    let absent = [];
    for (let i=0; i<this.props.body.length; i++) {
      absent.push(0)
    }
    this.state = {
      absent: absent
    }
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
          {body.map((row,i) => <TableRow index={i} key={'row' + i} name={row} />)}
        </tbody>
      </table>
      <RandomSelector students={body}/>
      </div>

    )
  };
}

export default Tracker;
