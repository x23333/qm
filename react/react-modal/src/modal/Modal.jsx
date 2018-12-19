import React, { Component } from "react";
import "./modal.css";
class Modal extends Component{
    state={
        visible:false
    }
    componentWillReceiveProps(nextProps){
        console.log("receive props")
        this.setState({
            visible:nextProps.visible
        })
    }
    closeModal=()=>{
        this.setState(prev => ({
            ...prev,
            visible: !prev.visible
        })) 
    }
    confirme=()=>{
        this.setState(prev => ({
            ...prev,
            visible: !prev.visible
        })) 
    }
    render(){
        const { visible }=this.state;
        const { content, title, canceled, children } = this.props;
        return(
            <div className="modal-wrapper" style={ !visible?{ display: "none" }:void 0}>
                <div className="modal">
                    <div className="modal-title">
                        { title }
                    </div>
                    <div className="modal-content">
                        { children }
                    </div>
                    <div className="modal-operator">
                        <button className="modal-operator-cancel" onClick={ this.closeModal }>取消</button>
                        <button className="modal-operator-confirm" onClick={ this.confirme }>确定</button>
                    </div>  
                </div>
                <div className="mask"></div>
            </div>
        );
    }
}

export default Modal;