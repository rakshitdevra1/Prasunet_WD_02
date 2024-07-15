let timer;
let isRunning = false;
let elapsedTime = 0;
let startTime = 0;
let laps = [];

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 1000);
    }
}

function pauseStopwatch() {
    if (isRunning) {
        isRunning = false;
        elapsedTime = Date.now() - startTime;
        clearInterval(timer);
    }
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    startTime = 0;
    laps = [];
    document.getElementById('display').textContent = "00:00:00";
    document.getElementById('laps').innerHTML = "";
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.getElementById('display').textContent;
        laps.push(lapTime);
        const lapElement = document.createElement('div');
        lapElement.textContent = `Lap ${laps.length}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapElement);
    }
}
