import React,{Component} from 'react';
import './Index.css';
import Header from '../../components/Header/Header'
import RegisterDialog from '../Header/RegisterDialog'

export default class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchInput: '',
      registerDialog: false
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <div className="App-header">
            <Header/>
          </div>
          <div className="App-body">
            <div className="welcome-view">
              <div className="category-nav">
                1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
              </div>
              <div className="main">
                21adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
              </div>
              <div className="sidebar">
                31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
              </div>
            </div>
          </div>
        </div>
        <RegisterDialog visible={this.state.registerDialog}/>
      </div>

    )
  }
}