import  React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>xzt</td>
            <td>Otaku</td>
          </tr>
          <tr>
            <td>asd</td>
            <td>Otasdawaku</td>
          </tr>
          <tr>
            <td>xzsadast</td>
            <td>Otasdasdaku</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table;