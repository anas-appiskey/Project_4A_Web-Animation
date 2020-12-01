
import React  from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './main.css';

import cloud from './imgs/cloud.555b7ee3.png';


function Background() {
 



  var sceneryFrames = [
    { transform: "translateX(1000px)" },
    { transform: "translateX(-1000px)" },
]

var sceneryTiming = {
    duration : 6000,
    iterations: Infinity, // Repeat once
}
  const { ref } = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTiming
   
  });

  return (

       <div   id="background" ref={ref}>
            <div className="w-16  cloud-1" >         
                <img id="" src={cloud} width="100%" height="100%" alt="cloud"/>
            </div>

            <div  className="w-14 cloud-2" >         
                <img id="" src={cloud} width="100%" height="100%" alt="cloud"/>
            </div>

            
            <div className="w-20 cloud-3" >         
                <img id="" src={cloud} width="100%" height="100%" alt="cloud"/>
            </div>
       </div>

  );
}

export default Background;
