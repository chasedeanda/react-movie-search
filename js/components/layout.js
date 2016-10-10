import React from 'react'

import SearchBar from './search-bar'
import MostPopular from './most-popular'

export default class Layout extends React.Component{
  render(){
    return(
      <div>
        <MostPopular/>
        <SearchBar/>
      </div>
    )
  }
}