import React, { useState } from 'react';

const ProgJoke = (props) => {
  //use state 
    const [showPrompt, setShowPrompt] = useState(false);//set to a bool true, to default buttons showing************
    
    /**on click for the button responses */
    const handleOnClick = (btnClicked) =>{
    
      if (btnClicked === 'show'){
          setShowPrompt(true);
        } else if (btnClicked === 'hide') {
          setShowPrompt(false);
        }
    
      };//end handleOnClick
// make sure to update the className to prog
  return (
    <div className={"gen-joke prog" + props.id}>

            {/**if showPrompt is false, then we show the h2 with the props.resp1 or resp2 depending which option choosen */}
        {!showPrompt && (
          <div>
            <button className="reset" onClick={()=>(handleOnClick('show'))}>Show</button>
          </div>
        )}

        {showPrompt && (
          <div>
             <h2>{props.prompt}</h2>
             <button className="reset" onClick={()=>(handleOnClick('hide'))}>Hide</button>
          </div>
        )}

  </div>
  );
};//end ProgJoke

export default ProgJoke;