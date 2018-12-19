import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component{
    constructor(props){
        super(props);
        setTimeout(() => {
            this.setState({
                num:3,
                name:"thomasWhyne",
                str:"hi"
            })
        }, 5000);
        // setTimeout(() => {
        //     this.setState({
        //         showLifeCycle:false
        //     })
        // }, 3000);
    }
    state={
        num:2,
        str: "hello",
        name: "没有账号",
        showLifeCycle:true

    }
    render(){
        if(!this.state.showLifeCycle)
            return <div>dont wanna show </div>
        return(
            <LifeCycle num={this.state.num}  name={ this.state.name } str={ this.state.str }/>
        );
    }
}

class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentWillMount(){
        console.log("component will mount")
    }
    componentDidMount(){
        console.log("component did mount")
        // fetch("https://api.github.com/users/ThomasWhyne")
        //     .then(data=>data.json())
        //     .then(data=>{
        //         this.setState({
        //             name:data.name
        //         })
        //     })
    }
    componentWillReceiveProps(nextProps){
        console.log(Object.values(nextProps))
    }
    shouldComponentUpdate(nextProps){
        console.log(`received ${Object.values(nextProps)},original ones was updated`)
        return true;
    }
    componentWillUnmount(){

    }
    render(){
        return(
            <div>
                <p>{this.props.str}</p>
                <p>{ this.props.name}</p>
                <p>{this.props.num}</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
