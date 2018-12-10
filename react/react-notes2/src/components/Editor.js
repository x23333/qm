import React, { Component } from 'react';
import { db,loadCollection } from '../database';

// state? props 子组件时 内部自身状态state
class Editor extends Component{
  state = {
    entity: this.props.entity,
    body: this.props.entity.body,
    updataEntity: this.props.updataEntity
  }
  render(){
    return (
      <div className="ui form">
        <textarea rows="5" placeholder="写点东西..." defaultValue={this.state.body} 
        onInput={(event) => this.updataEntity(event)}/>
      </div>
    )
  }
  updataEntity= (event)=>{
    const _body = event.target.value;
    this.setState({
      body: _body
    })
    loadCollection('notes')
      .then((collection) => {
        const entity = this.state.entity
        entity.body = _body
        collection.update(entity)
        db.saveDatabase();
      })
  }
}

export default Editor
