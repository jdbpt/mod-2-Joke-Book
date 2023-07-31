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
//added the updated in className here in Joke.js*****************************************
//*********************************************************************** */
  return (
    <div className={"gen-joke joke" + props.id}>

        {showPrompt &&  
        ( 
        <div className={"prompt"+props.id+" generic-img"}>
            <h2>{props.prompt}</h2>
                <button className="btn1" onClick={()=>(handleOnClick('btn1'))}>{props.option1}</button>
                <button className="btn2" onClick={()=>(handleOnClick('btn2'))}>{props.option2}</button>
                {/**Made it so that here there is a ()=> to avoid the too many rerenders error */}
        </div>
        )}

            {/**if showPrompt is false, then we show the h2 with the props.resp1 or resp2 depending which option choosen */}
        {!showPrompt && showWhichResp === 1 && (
          <div className={"resp1-"+props.id+" generic-img"}>
            <h2>{props.resp1}</h2>
            <button className='reset' onClick={()=>(handleOnClick('reset'))}>Reset</button>
          </div>
        )}

        {!showPrompt && showWhichResp === 2 && (
          <div className={"resp2-"+props.id}>
             <h2>{props.resp2}</h2>
             <button className='reset' onClick={()=>(handleOnClick('reset'))}>Reset</button>
          </div>
        )}

  </div>
  );
};//end Joke

export default Joke;