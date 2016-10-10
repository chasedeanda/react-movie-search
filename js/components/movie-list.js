import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MovieList extends React.Component {
  render(){
    let movies = this.props.movies.map((movie,key)=>{
      return  <li key={key}>{movie.original_title}</li>
    })
    if(this.props.movies.length <1){
      return <div>No results</div>
    }
    return(
      <ul>
        {movies}
      </ul>
    )
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.array
}

export default MovieList;