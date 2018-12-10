import React,{Component} from 'react'
import Results from './Result'
import Search from './Search'

class Beer extends Component {
  componentDidMount (){
    this.loadBeers();
  }
  componentDidUpdate(prevProps){
    const currentSearchTerm = this.props.match.params.searchTerm;
    console.log('[currentSearchTerm]',currentSearchTerm);
    const oldSearchTerm = prevProps.match.params.searchTerm;

    if(currentSearchTerm !== oldSearchTerm){
      this.loadBeers(currentSearchTerm);
    }
  
  }

  state = {
    beers: [],
    loading: true
  }
  loadBeers = (searchTerm = "hops")=>{
    this.setState({
      loading: true
    })
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(data => data.json())
      .then(data =>{
        const beers = data.data || []
        this.setState({
          beers: beers,
          loading: false
        })
        localStorage.setItem(
          `search-${searchTerm}`,JSON.stringify(this.state.beers)
        )
      })
      .catch(err => console.error(err));
  }
  render(){
    return (
      <div className="wrapper"> 
        <Search></Search>
        <Results beers={this.state.beers} loading={this.state.loading}/>
      </div>
    )
  }
}

export default Beer
