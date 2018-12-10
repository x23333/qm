import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import _ from  'lodash';
import Editor from './Editor';
moment.locale('zh-CN');


// Note? 展示单条 笔记，  状态 
class Note extends Component {
  
  state = {
    entity: this.props.entity, 
    body: this.props.entity.body,
    updated: this.props.entity.meta.updated || this.props.entity.meta.created,
    updatedEntity: this.props.entity.updatedEntity,
    open: false,
    destroyEntity: this.props.destroyEntity
  }
  updated() {
    return moment(this.state.updated).fromNow()
  }
  header() {
    return _.truncate(this.state.body, {length: 30})
  }
  updatedEntity = (event) => {
    const _body = event.target.value;
    this.setState({
      body: _body
    })
  }
  toggle = () => {
    this.setState((prevState) => {
      return {
        open: !prevState.open
      }
    })
  }
  word() {
    return this.state.body.length
  }
  render () {
    console.log(this)
    // const ts = moment(this.state.updated).fromNow()
    return (
      <div className="item">
        <div className="meta">
          {this.updated()}
        </div>
        <div className="contrnt">
          <div className="header" onClick={this.toggle}>
            {this.header()}
          </div>
        </div>
        <div className="extra">
          {
            this.state.open && 
            <Editor entity={this.state.entity} updatedEntity={this.props.updatedEntity} />  // 可作为if 判断使用 && 后的部分表示true 后的执行
          }
          {this.word()} 字
          {
            this.state.open && 
            <i className="right floated trash outline icon" onClick={this.destroyEntity(this.state.entity)}></i>
          }
        </div>
      </div>
    );
  }
}
export default Note;