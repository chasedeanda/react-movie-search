import React from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import {bindActionCreators} from 'redux';

import { getMostPopular } from '../actions';

class MostPopular extends React.Component{
  constructor(){
    super()
    autoBind(this);
  }
  componentWillMount(){
    this.props.getMostPopular();
  }
  render(){
    console.log(this.props)
    let mostPopular = this.props.movies.map((movie,key)=>{
      return <li key={key}>{movie.original_title}</li>
    });
    if(this.props.fetching){
      return <div>Loading...</div>
    }
    return(
      <ul>
        {mostPopular}
      </ul>
    )
  }
}

MostPopular.propTypes = {
  movies: React.PropTypes.array
}
function mapStateToProps(state){
  return{
    fetching: state.mostPopular.fetching,
    movies: state.mostPopular.movies
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getMostPopular: getMostPopular},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MostPopular);
