import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = this.searchRef.current.value;
    console.log(this.context.router);
    this.context.router.history.push(`/search/${searchTerm}`);
  }
  searchRef = React.createRef();
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.searchRef} placeholder="Happy, Malt, Angry, 南昌8度" />
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default Search;