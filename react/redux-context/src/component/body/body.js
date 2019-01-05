import React, { Component } from 'react';
import Button from '../button/button';
import PropTypes from 'prop-types';


export default class Body extends Component {
  static contextTypes = {
    store: PropTypes.object,
    subscribe: PropTypes.func,
    getStore: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount = () => {
    const {subscribe} = this.context;
    subscribe(() => this._upState());
    this._upState();
  }
  _upState() {
    const { getStore } = this.context;
    this.setState({
      ...getStore()
    })
  }
  // getChildContext() {
  //   const state = {

  //   }
  // }
  render() {
    return (
      <div>
        <div className="body">
          {this.state.body}
        </div>
        <Button />
      </div>
    );
  }
}

