import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
        <nav>
            <Link to="/"><button className='navigation'>Joke Book</button></Link>
            <Link to="/LameJokes"><button className='navigation'>Lame Jokes</button></Link>
        </nav>
    </div>
  );
};//end Nav

export default Nav;