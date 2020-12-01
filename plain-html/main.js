var sceneryFrames = [
    { transform: "translateX(1000px)" },
    { transform: "translateX(-1000px)" },
]

var sceneryTiming = {
    duration : 4000,
    iterations: Infinity, // Repeat once

    
  
}


var sceneryFrames_man = [
    { transform: "translateX(0px)" },
    { transform: "translateX(-20px)" },
]

var sceneryTiming_man = {
    duration : 1000,
    iterations: Infinity, 

    
  
}
var background = document.getElementById('background')


var background_man = document.getElementById('man')



var backgroundMovement_man = background_man.animate(sceneryFrames_man,sceneryTiming_man)
backgroundMovement_man.currentTime = backgroundMovement_man.effect.getTiming().duration / 2


var backgroundMovement = background.animate(sceneryFrames,sceneryTiming)
backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2


setInterval(function(){
    if (backgroundMovement.playbackRate > 0.4 )
    backgroundMovement.playbackRate *= 0.9
},3000)

var goFaster = function(){
    backgroundMovement.playbackRate  *= 1.1

}

document.addEventListener("click",goFaster)