import React from 'react';
import Header from '../components/Header';
import ProgJoke from '../components/ProgJoke';

function LameJokes() {

  const jokes = [
    {
      prompt: "A software developer decides to dabble in interior design, they maap out the vision and try to build everything out. Except when they are done, they look up and the room is empty.  They misspelled map and they didn’t catch the error.",
      id: 0
    },

    {
      prompt: "A programmer goes up to a server and asks for change equal to ten and the server hands him back a paper written with 1 and 0 with a big smile.  He forgot to say it was strictly equals.",
      id: 1

    },
    {
      prompt: "A software engineer and her buddy HTML are having an argument.  She tells him how he should React but instead he just says that he is out of his element and that he will tag a friend.",
      id: 2

    },
    {
      prompt: 'What did the blank page say to its master?  “My style was pushed to the wrong branch, can you git me?”  The master said back, “I think you’re in the wrong hub, you need a new repository.',
      id: 3

    },
    {
      prompt: 'The husband left his brace at home and screams aloud. “This is a library,”  the wife scolds her husband, “that is no way to React.”',
      id: 4

    },
    {
      prompt: "This constant is in no way a function, it should be variable, let it be.",
      id: 5

    },
    {
      prompt: "If we each have a unique identity but are in the same class what are we?  Ready to be styled together and set apart.",
      id: 6

    },
    {
      prompt: "If supercalifragilisticexpialidocious is equal to one, and numGrapes is equal to one, which onoe is more?  They are both equal, but one is misspelled.",
      id: 7

    }

  ];


  return (
    <div>
      <Header title="Joke Book"/>
      <h3 className='some-margin'>Reveal each Programming Joke at your own risk...</h3>

      {jokes.map((item)=>(
      <ProgJoke
        id={item.id}
        key={item.id}
        prompt={item.prompt}
      />)
      )}
      <h3 className='some-margin'>Hey, I warned you.</h3>

    </div>
  );
};//end App

export default LameJokes;
