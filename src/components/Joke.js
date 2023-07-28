import React, { useState } from 'react';

const Joke = (props) => {
  //use state 
    const [showPrompt, setShowPrompt] = useState(true);//set to a bool true, to default buttons showing************
    const [showWhichResp, setShowWhichResp] = useState(0);//to 0, set to 1 or 2 based on the response
    
    /**on click for the button responses */
    const handleOnClick = (btnClicked) =>{
    
        if(btnClicked === 'btn1'){
          //make sure that setShowPrompt makes showPrompt false******************
          console.log("help me");
          setShowPrompt(false);//no longer show the prompt an option has been chosen, now time to show resp**********
          setShowWhichResp(1);//make sure resp1 is shown********************************
          
    
        } else if (btnClicked === 'btn2'){
        //make sure that setShowPrompt makes showPrompt false******************
          console.log("please");
          setShowPrompt(false);
          setShowWhichResp(2);//make sure resp2 is shown******************************
        } else if (btnClicked === 'reset'){
          //reset the initial values
          setShowPrompt(true);
          setShowWhichResp(0);
        }
    
      };//end handleOnClick

  return (
    <div className="gen-joke">

        {showPrompt &&  
        ( 
        <div>
            <h2>{props.prompt}</h2>
            
            <ul>
                <li><button onClick={()=>(handleOnClick('btn1'))}>{props.option1}</button></li>
                <li><button onClick={()=>(handleOnClick('btn2'))}>{props.option2}</button></li>
                {/**Made it so that here there is a ()=> to avoid the too many rerenders error */}
            </ul>
        </div>
        )}

            {/**if showPrompt is false, then we show the h2 with the props.resp1 or resp2 depending which option choosen */}
        {!showPrompt && showWhichResp === 1 && (
          <div>
            <h2>{props.resp1}</h2>
            <button onClick={()=>(handleOnClick('reset'))}>Reset</button>
          </div>

        )}

        {!showPrompt && showWhichResp === 2 && (
          <div>
             <h2>{props.resp2}</h2>
             <button onClick={()=>(handleOnClick('reset'))}>Reset</button>
          </div>
            

        )}

  </div>
  );
};

export default Joke;