import React, { Component } from 'react';
import DocumentType from './DocumentType';
import './App.css';

class App extends Component {
  state = {
    tags:['草稿','关于','常见问题啊啊啊啊啊阿打算的撒的','组件开发'],
    selectedTags: []
  }
  addTag = (tag) => {
    const tags = this.state.tags;
    this.setState({
      tags: [...tags, tag]
    })
  }
  onChange = (tag) =>  {
    const tags = this.state.selectedTags;
    if(tags.indexOf(tag) === -1) {
      this.setState({
        selectedTags: [...tags, tag]
      })
    }
  }
  render() {
    return (
      <div className="App">
        <DocumentType 
          selectedTags={this.state.selectedTags}
          tags={this.state.tags}
          addTag={this.addTag}
          onChange={this.onChange}
          activeColor="#123123"
        />
      </div>
    );
  }
}

export default App;
