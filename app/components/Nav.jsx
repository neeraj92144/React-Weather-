import React from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = (props) =>{
  return(
      <div>
          <h1> Nav COmponent </h1>
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight : 'bold', color : 'red'}}>Get Weather</IndexLink>
          <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight : 'bold', color : 'red'}}>About</IndexLink>
          <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight : 'bold', color : 'red'}}>Test</IndexLink>
          <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight : 'bold', color : 'red'}}>Examples</IndexLink>
      </div>
  )
}
export default Nav;
