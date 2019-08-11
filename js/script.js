
function correctDigit(digit) {
    if (digit < 10) {
        return "0" + digit;
    }
    else {
        return digit;
    }
}

function showClock() {
    let clock = document.getElementById("clock");
    let date = new Date();


    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if (hours > 12) {
        hours -= 12;
        session = "PM";
    }

    hours = correctDigit(hours);
    minutes = correctDigit(minutes);
    seconds = correctDigit(seconds);

    clock.innerHTML = `${hours}:${minutes}:${seconds}${session}`;

    setTimeout(showClock, 1000);
}

showClock();
