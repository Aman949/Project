function makeBubble(){
    var cluster = "";
    for (var i =1 ;i <= 96; i++) {
         var rn = Math.floor(Math.random()*10);
        cluster += `<div class="bubble">${rn}</div>`;     
    }
    document.querySelector("#pbot").innerHTML = cluster;
}

var timer  = 60;
var hitrn = 0;
var score = 0;
function runTimer()
{
    var timerint  = setInterval(function(){
        if(timer>0){
        timer --;
        }
        else{
            clearInterval(timerint);
        }
        document.querySelector("#timervalue").textContent = timer;
    },1000);
}

function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;
}


function increaseScore(){
    score += 10;
    document.querySelector("#Score").textContent = score;
}

document.querySelector("#pbot").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum  === hitrn){
        increaseScore();
        makeBubble();
        newHit();
    }
});
runTimer();
makeBubble();
newHit(); 

