import Reacr, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  render() {
    state = [
      {
        'name': '唐唐',
        'job': 'FE'
      },
      {
        'name': '唐马儒',
        'job': '鉴宝师'
      },
      {
        'name': '唐僧',
        'job': '国师'
      }
    ];
    const { characters } = this.state;
    return (
      <div >
        <Table characterData={characters} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
  removeCharacters = index => {

  }
  handleSubmit = characters => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }
}

export default App;