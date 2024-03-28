var stopwatchInterval;
var startTime;
var elapsedTime = 0;
var lapCounter = 0; // l counter
var lastLapTime = 0; // Last lap time

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
    var lapTime = elapsedTime; // Get the current elapsed time
    var splitTime = lapTime - lastLapTime; // Calculate the split time
    lastLapTime = lapTime; // Update the last lap time

    var lapDiv = document.createElement("div");
    lapDiv.classList.add("lap");
    lapDiv.innerHTML = "Lap " + lapCounter + ": " + formatTime(lapTime) + "&nbsp;&nbsp;&nbsp;Split: " + formatTime(splitTime); // Include lap number and split time
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
    lastLapTime = 0; // Reset last lap time
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
    var hue1 = Math.floor(Math.random() * 361);
    var hue2 = (hue1 + Math.floor(Math.random() * 180) + 180) % 360; // Generate a complementary hue
    var saturation1 = Math.floor(Math.random() * 101); // Generate a random saturation between 0 and 100
    var saturation2 = Math.floor(Math.random() * 101); // Generate a random saturation between 0 and 100
    var lightness1 = Math.floor(Math.random() * 51) + 25; // Generate a random lightness between 25 and 75
    var lightness2 = Math.floor(Math.random() * 51) + 25; // Generate a random lightness between 25 and 75

    var color1 = "hsl(" + hue1 + "," + saturation1 + "%," + lightness1 + "%)";
    var color2 = "hsl(" + hue2 + "," + saturation2 + "%," + lightness2 + "%)";

    return [color1, color2];
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


document.getElementById('change-background-color').addEventListener('click', function() {
    // Get the color from the color picker
    var colors1 = document.getElementById('color-picker1').value;
    var colors2 = document.getElementById('color-picker2').value;
    // Set the background color
    var angle = Math.floor(Math.random() * 361); // Generate a random angle between 0 and 360 degrees

    // Use the colors and angle to create a gradient
    document.body.style.background = "linear-gradient(" + angle + "deg, " + colors1 + ", " + colors2 + ")";
});
/*
document.getElementById('change-background-color').addEventListener('click', function() {
    var color = document.getElementById('color-picker').value;
    document.body.style.background = color;
});
*/