import React from 'react';
import autoBind from 'react-autobind';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { searchMovies } from '../actions'
import MovieList from './movie-list.js';

class SearchBar extends React.Component {
  constructor(){
    super();
    autoBind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.searchMovies(this.refs.search.value)
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" ref="search"/>
          <button type="submit">Search</button>
        </form>
        <MovieList movies={this.props.movies}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({searchMovies: searchMovies}, dispatch)
}
function mapStateToProps(state){
  return {
    movies: state.movies.movies
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);