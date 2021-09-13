var newyear = new Date("1 Jan 2022").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var t = newyear - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    console.log(seconds);
    if (days < 10) {
        document.getElementById("days").innerHTML = "0" + days;
    } else {
        document.getElementById("days").innerHTML = days;
    }
    if (hours < 10) {
        document.getElementById("hours").innerHTML = "0" + hours;
    } else {
        document.getElementById("hours").innerHTML = hours;
    }
    if (minutes < 10) {
        document.getElementById("mins").innerHTML = "0" + minutes;
    } else {
        document.getElementById("mins").innerHTML = minutes;
    }
    if (seconds < 10) {
        document.getElementById("secs").innerHTML = "0" + seconds;
    } else {
        document.getElementById("secs").innerHTML = seconds;
    }

}, 1000);


async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return;
}


function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


setInterval(function caller() {
    document.getElementById("headingletters").innerHTML = "";
    typeSentence("NEW-YEAR COUNTDOWN", document.getElementById("headingletters"));
}, 5000);