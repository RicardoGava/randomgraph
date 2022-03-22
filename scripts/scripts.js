const repeatRandom = 300000;
const randomRange = 800;

let frequencyArray = new Array(randomRange).fill(0);

function randomGraph() {
    for (var i = 0; i < repeatRandom; i++) {
        frequencyArray[(Math.floor(Math.random() * randomRange))] += 1;
    }
    frequencyArray.forEach((frequency) => {
        var span = document.createElement('span');
        span.style.height = frequency + "px";
        document.getElementById('graph').appendChild(span);
    });

    var averageLine = document.getElementsByClassName("average");
    averageLine[0].style.bottom = (repeatRandom/randomRange) + "px";

    var std = getStandardDeviation(frequencyArray);

    var stdLine = document.getElementsByClassName("std");
    stdLine[0].style.bottom = (repeatRandom/randomRange + std) + "px";
    stdLine[1].style.bottom = (repeatRandom/randomRange - std) + "px";
}

function getStandardDeviation(array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

window.addEventListener("load", randomGraph);