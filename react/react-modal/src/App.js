import React, { Component } from 'react';
import Modal from "./modal/Modal";
import './App.css';

class App extends Component {
    state={
        visible:false,
        title:"This is the title delivered from App",
        content:"This is the comtent deliverd from App"
    }
    toggleVisible=() => {
            this.setState(prev => ({
                ...prev,
                visible: true
            })) 
    }
    closeModal=()=>{
        
    }
    confirm=()=>{

    }
  render() {
      const { visible,title,content }=this.state;
    return (
      <div className="app">
            <button onClick={ this.toggleVisible}>ToggleVisible</button>
            <Modal visible={ visible } title={ title } content={ content } canceled={this.toggleVisible} onClose={ this.closeModal } confirm={ this.confirm }>
                <div>This is the self defined content</div>
            </Modal>
      </div>
    );
  }
}

export default App;
