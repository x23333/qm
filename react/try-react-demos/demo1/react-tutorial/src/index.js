import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Table from './Table'

const heading = <h1 className="site-heading">Hello</h1>;

class App extends React.Component {
  render () {
    return (
      <div className="App container">
        <h1>Hello React!</h1>
        {heading}
        <Table />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))