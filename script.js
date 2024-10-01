let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let seconds = 0;
let interval = null;

// Function to update the timer display in MM:SS format
function updateTimer() {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;

    let formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    timerDisplay.innerText = formattedTime;
}

// Start the timer
startButton.addEventListener('click', function() {
    if (interval) {
        return;
    }
    interval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
});

// Stop the timer
stopButton.addEventListener('click', function() {
    clearInterval(interval);
    interval = null;
});

// Reset the timer
resetButton.addEventListener('click', function() {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    updateTimer();
});

// Initialize the timer display
updateTimer();
