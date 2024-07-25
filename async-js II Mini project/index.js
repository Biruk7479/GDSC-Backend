function startTimer() {
    const secondsInput = document.getElementById('seconds').value;
    let timeRemaining = parseInt(secondsInput);
    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert('Enter a positive number');
        return;
    }
    document.getElementById('timer').innerText = timeRemaining;

    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById('timer').innerText = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            alert("Time is up");
        }
    }, 1000);
}

let countdownInterval;
