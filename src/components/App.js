import React from 'react';
import MovieList from './MovieList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: []
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f02c84d0f99388e636631d4e5acf7768')
      .then(resp => resp.json())
      .then(res => this.setState({ moviesList: res.results }))
      .catch(error => console.log(error))
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <div className="App" >
        < MovieList state={this.state.moviesList} />
      </div>
    )
  }
}

export default App;
