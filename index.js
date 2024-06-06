let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let timer = null;

let display = document.getElementById("display");

function start(){

    if(isRunning == false){
        startTime = Date.now() - elapsedTime
        timer = setInterval(update, 10)
        isRunning = true;
    }
    
}

function stop(){
    if(isRunning == true){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer)
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    timer = null;
    display.textContent = "00:00:00:00"
}

function update(){
    const currentTime = Date.now()
    elapsedTime = currentTime - startTime
    
    let hours =Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60)
    let milSeconds = Math.floor(elapsedTime % 1000 / 10)

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milSeconds = String(milSeconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milSeconds}`;

}