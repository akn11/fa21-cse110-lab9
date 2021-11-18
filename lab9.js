class TimerError extends Error {
    constructor(message) {
        super(message); // (1)
    }
}

function logDemo() {
    console.log("Console Log Demo");
}

function errorDemo() {
    console.error("Console Error Demo");
}

var count = 1;
function countDemo() {
    console.log(count);
    count += 1;
}

function warnDemo() {
    console.warn("Console Warn Demo");
}

function assertDemo() { //todo
    var testNum = 3;
    var errorMsg = 'not even';
    console.assert(testNum % 2 == 0, { testNum, errorMsg });
}

function clearDemo() {
    console.clear();
}

function dirDemo() {
    console.dir(document.location);
}

function dirxmlDemo() {
    console.dirxml(document.querySelector("button"));
}

function groupStartDemo() {
    console.group()
}

function groupEndDemo() {
    console.groupEnd();
}

function tableDemo() {
    console.table([["SD", "California"], ["Miami", "Florida"], ["Boston", "Massachusetts"]]);
}

let timeVal = 0;
let timeStarted = false;
function startTimerDemo() {
    try {
        if (timeStarted) {
            // let timeError = new Error("Timer has already started!");
            let timeError = new TimerError("Timer has already started!");
            throw timeError;
        }
        console.time(timeVal);
        timeStarted = true
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("Try pressing the End Timer button!");
    }
}

function endTimerDemo() {
    try {
        if (!timeStarted) {
            // let timeError = new Error("Timer has not started!");
            let timeError = new TimerError("Timer has not started!");
            throw timeError;
        }
        console.timeEnd(timeVal);
        timeVal = 0;
        timeStarted = false;
    }
    catch (err) {
        console.log(err);
    }
}

function traceDemo() {
    console.trace();
}

function globalErrorDemo() {
    const dummyVal = 123;
    dummyVal = 125;
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
    var message = [
        'Message: ' + msg,
        'URL: ' + url,
        'Line: ' + lineNo,
        'Column: ' + columnNo,
        'Error object: ' + JSON.stringify(error)
    ].join(' - ');
    console.log(message);
};



