import React from 'react';
import Nav from './Nav';

const Header = (props) => {
  return (
      <header>
          <h1>{props.title}</h1>
          <h3>Where the Jokes Never Run Dry...Get it?</h3>
          <Nav/>
      </header>   
  );
};//end Header

export default Header;

