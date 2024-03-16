var stopwatchInterval;
var startTime;
var elapsedTime = 0;
var lapCounter = 0; // l counter

document.getElementById("startStop").addEventListener("click", function() {
    if (this.innerHTML === "Start") {
        this.innerHTML = "Stop";
        startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            document.getElementById("stopwatch").innerHTML = formatTime(elapsedTime);
        }, 10);
    } else {
        this.innerHTML = "Start";
        clearInterval(stopwatchInterval);
    }
});

document.getElementById("lap").addEventListener("click", function() {
    lapCounter++; // Increment lap counter
    var lapTime = document.getElementById("stopwatch").innerHTML;
    var lapDiv = document.createElement("div");
    lapDiv.classList.add("lap");
    lapDiv.innerHTML = "Lap " + lapCounter + ": " + lapTime; // Include lap number
    var laps = document.getElementById("laps");
    laps.appendChild(lapDiv);
    laps.scrollTop = laps.scrollHeight; // Auto-scroll to newest lap
});

document.getElementById("reset").addEventListener("click", function() {
    clearInterval(stopwatchInterval);
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("stopwatch").innerHTML = "00:00:00";
    elapsedTime = 0;
    lapCounter = 0; // Reset lap counter
    document.getElementById("laps").innerHTML = "";
});


function formatTime(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds);
    var hours = time.getUTCHours();
    var minutes = time.getMinutes().toString().padStart(2, "0");
    var seconds = time.getSeconds().toString().padStart(2, "0");
    var milliseconds = Math.floor(time.getMilliseconds() / 10).toString().padStart(2, "0");
    
    var formattedTime = minutes + ":" + seconds + ":" + milliseconds;
    if (hours > 0) {
        formattedTime = hours.toString().padStart(2, "0") + ":" + formattedTime;
    }
    
    return formattedTime;
}
function getRandomColor() {
    var letters = '6789AB'; 
    var zeroPosition = Math.floor(Math.random() * 3) * 2; // Determine which color component will be zero

    var color1 = '';
    var color2 = '';
    for (var i = 0; i < 6; i++) {
        if (i === zeroPosition || i === zeroPosition + 1) {
            color1 += '0'; // Add zero component
            color2 += '0'; // Add zero component
        } else {
            color1 += letters[Math.floor(Math.random() * letters.length)]; // Add non-zero component
            color2 += letters[Math.floor(Math.random() * letters.length)]; // Add non-zero component
        }
    }
    return ['#' + color1, '#' + color2];
}

window.onload = function() {
    var colors = getRandomColor();
    var angle = Math.floor(Math.random() * 361); // Generate a random angle between 0 and 360 degrees

    // Use the colors and angle to create a gradient
    document.body.style.background = "linear-gradient(" + angle + "deg, " + colors[0] + ", " + colors[1] + ")";

}


document.getElementById("change-background").addEventListener("click", function() {
    var colors = getRandomColor();
    var angle = Math.floor(Math.random() * 361); // Generate a random angle between 0 and 360 degrees

    // Use the colors and angle to create a gradient
    document.body.style.background = "linear-gradient(" + angle + "deg, " + colors[0] + ", " + colors[1] + ")";

});