import React, { Component } from 'react';
import A from './A'
class B extends Component {
  render() {
    return (
      <div>
        hello ! 
      </div>
    );
  }
}

export default A(B);
