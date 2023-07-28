import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div  className='navigation'>
        <nav>
            <Link to="/"><button>Joke Book</button></Link>
            <Link to="/LameJokes"><button>Lame Jokes</button></Link>
        </nav>
    </div>
  );
};//end Nav

export default Nav;