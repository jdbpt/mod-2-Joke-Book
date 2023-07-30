import React from 'react';
import Header from '../components/Header';
import Joke from '../components/Joke';

function JokeBook() {

  const jokes = [
    {
      prompt: "Do you think electric bills are expensive?",
      option1: "Yes",
      option2: "No",
      resp1: "you should see chimneys, they’re through the roof",
      resp2: "Shocking",
      id: 0
    },

    {
      prompt: "Why did Cinderella get kicked off the baseball team?",
      option1: "Option A",
      option2: "Option B",
      resp1: "she kept running away from the ball",
      resp2: "she wondered why the baseball kept getting bigger…then it hit her",
      id: 1

    },
    {
      prompt: "Which word do you want the German translation of?",
      option1: "Constipation",
      option2: "Bra",
      resp1: "farfrompoopin",
      resp2: "stopemfromflopin",
      id: 2

    },
    {
      prompt: "Which teacher did the biology teacher chose to go out with?",
      option1: "Geology",
      option2: "Physics",
      resp1: "nope, geology rocks but geography is where it’s at.",
      resp2: "not him, there was no chemistry",
      id: 3

    },
    {
      prompt: "Guess who I saw today?",
      option1: "Option A",
      option2: "Option B",
      resp1: "everyone I looked at, don’t like my joke? Too bad, that’s how eye roll",
      resp2: 'the master and his pupil. What, are my jokes too "cornea" for you?',
      id: 4

    }

  ];


  return (
    <div>
      <Header title="Joke Book"/>
      {jokes.map((item)=>(
      <Joke
       //added back in the id={item.id} here as we need it**************************
       //********************************************************************** */
        id={item.id}
        key={item.id}
        prompt={item.prompt}
        option1={item.option1}
        option2={item.option2}
        resp1 = {item.resp1}
        resp2 = {item.resp2}
      />)
      )}
 
    </div>
  );
};//end JokeBook

export default JokeBook;
