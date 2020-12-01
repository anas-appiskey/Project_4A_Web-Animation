import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './main.css';
import gif_img from './imgs/animated-running-image-0008.gif';
import mountain from './imgs/423-4235670_everest-free-png-image-snow-mountain-vector-png.png';

import Background from './Background';
//  useRef
// don't need to re render element
// don't need to access dom level functionality

function App() {
 

 
var sceneryFrames_man = [
    { transform: "translateX(0px)" },
    { transform: "translateX(100px)" },
]

var sceneryTiming_man = {
    duration : 1000,
    iterations: Infinity, // Repeat once

    
  
}
  const { ref, playState } = useWebAnimations({
    keyframes: sceneryFrames_man,
    timing: sceneryTiming_man
   
  });



  return (
    <div >
        {/* <h1 ref={ref}>hello world</h1>
        <input ref={inputEl} type="text"/> */}
        <div className="container-fluid ">
        <div className="full-background">
    <div  id="man" className="man" ref={ref}>

        <img id="bird2" src={gif_img} alt="n"/>
     

       </div>  
       <div className="mountain" >         
        <img id="" src={mountain} width="100%" height="100%" alt="cloud"/>
    </div>
          <Background />
    </div>

    </div>

    </div>
  );
}

export default App;
