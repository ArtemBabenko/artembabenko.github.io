class Counter {
    constructor(number, autoPlay, timeDelay) {
        this.num = number;
        this.autoPlay = autoPlay;
        this.endPoint = 0;
        this.timeDelay = timeDelay;
    }

    startCount(textMin, textSec, progress) {
        this.timer = setInterval(() => {
            this.checkCondition(textMin, textSec, progress);
            let minCounter = doubleTime(parseInt(this.num / 60));;
            let secCounter = doubleTime(this.num % 60);

            textMin.textContent = minCounter;
            textSec.textContent = secCounter;

            (secCounter == "00") ? minCounter-- : false;

        }, this.timeDelay);
    }

    pauseCount() {
        console.log('pause');
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    checkCondition(textMin, textSec, progress) {
        if (this.num > this.endPoint) {
            console.log(this.num);
            progress();
            this.num--;
        } else if (this.num === 0) {
            console.log(this.num);
            obg.textContent = this.num;
            clearInterval(this.timer);
        }
        return this.num;
    }

}


function pressingKey(timer, button, textMin, textSec, progress) {

    function progressLine() {
        let part = progress.clientWidth / timer.num.toString();
        progress.style.width = progress.clientWidth - part + "px";
    }

    function action(event) {
        if (button.textContent == 'Start') {
            timer.startCount(textMin, textSec, progressLine);
            button.textContent = 'Pause';
        } else if (button.textContent == 'Pause') {
            timer.pauseCount();
            button.textContent = 'Start';
        }
    }

    button.addEventListener('click', action);
}

function autoPlay(timer, button, textMin, textSec, progress) {

    function progressLine() {
        let part = progress.clientWidth / timer.num.toString();
        progress.style.width = progress.clientWidth - part + "px";
    }

    if (timer.autoPlay == true) {
        timer.startCount(textMin, textSec, progressLine);
        button.textContent = 'Pause';
    }
}

function initiation(textMin, textSec, timer) {
    textMin.textContent = doubleTime(parseInt(timer.num / 60));
    textSec.textContent = doubleTime(timer.num % 60);
}

function doubleTime(val) {
    let str = val + "";
    if (str.length < 2) {
        return "0" + str;
    } else {
        return str;
    }
}

// First timer
const myTimer = new Counter(90, true, 1000);

let buttonKey = document.querySelector('#timer1-button');
let textMin = document.querySelector('#timer1-min');
let textSec = document.querySelector('#timer1-sec');
let progress = document.querySelector('#timer1-progress');

initiation(textMin, textSec, myTimer);
pressingKey(myTimer, buttonKey, textMin, textSec, progress);

// Second timer
const myTimer2 = new Counter(600, true, 2000);

let buttonKey2 = document.querySelector('#timer2-button');
let textMin2 = document.querySelector('#timer2-min');
let textSec2 = document.querySelector('#timer2-sec');
let progress2 = document.querySelector('#timer2-progress');

initiation(textMin2, textSec2, myTimer2);
autoPlay(myTimer2, buttonKey2, textMin2, textSec2, progress2);
pressingKey(myTimer2, buttonKey2, textMin2, textSec2, progress2);
