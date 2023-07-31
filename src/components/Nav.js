import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
        <nav>
          <h3 className='site-contents'>Site Contents</h3>
            <span className='btn-subtitle'>Page 1: </span><Link to="/"><button className='navigation'>Choice Jokes</button></Link>
            <span className='btn-subtitle'>Page 2: </span><Link to="/LameJokes"><button className='navigation'>Lame Jokes</button></Link>
        </nav>
    </div>
  );
};//end Nav

export default Nav;