const repeatRandom = 700000;
const randomRange = 1800;

let frequencyArray = new Array(randomRange).fill(0);

function randomGraph() {
    for (var i = 0; i < repeatRandom; i++) {
        frequencyArray[(Math.floor(Math.random() * randomRange))] += 1;
    }

    var std = getStandardDeviation(frequencyArray);
    var average = repeatRandom/randomRange;

    frequencyArray.forEach((frequency) => {
        var span = document.createElement('span');
        span.style.height = frequency + "px";
        if (frequency > average + 2*std || frequency < average - 2*std) {
            span.style.backgroundColor = "#e26a63";
        }
        else if (frequency > average + std || frequency < average - std) {
            span.style.backgroundColor = "#fec04c";
        }
        document.getElementById('graph').appendChild(span);
    });

    var averageLine = document.getElementsByClassName("average");
    averageLine[0].style.bottom = (average) + "px";

    var stdLine = document.getElementsByClassName("std");
    stdLine[0].style.bottom = (average + std) + "px";
    stdLine[1].style.bottom = (average - std) + "px";
    stdLine[2].style.bottom = (average + 2*std) + "px";
    stdLine[3].style.bottom = (average - 2*std) + "px";
}

function getStandardDeviation(array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

window.addEventListener("load", randomGraph);