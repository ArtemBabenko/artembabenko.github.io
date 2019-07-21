class Counter {
    constructor(number, autoPlay, timeDelay) {
        this.num = number;
        this.autoPlay = autoPlay;
        this.endPoint = 0;
        this.timeDelay = timeDelay;
    }

    startCount(obg, obj2) {
        this.timer = setInterval(() => {
            this.checkCondition(obg, obj2);
            obg.textContent = this.num;
        }, this.timeDelay);
    }

    pauseCount() {
        console.log('pause');
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    checkCondition(obg, obj2) {
        if (this.num > this.endPoint) {
            console.log(this.num);
            obj2();
            this.num--;
        } else if (this.num === 0) {
            console.log(this.num);
            obg.textContent = this.num;
            clearInterval(this.timer);
        }
        return this.num;
    }
}

// First timer
const myTimer = new Counter(60, true, 1000);

let buttonKey = document.querySelector('#timer1-button');
let text = document.querySelector('.timer1-text');
text.textContent = myTimer.num;

function progressLine1() {
    let progress = document.querySelector('#timer1-progress');
    let part = progress.clientWidth / myTimer.num.toString();
    console.log(part)
    progress.style.width = progress.clientWidth - part + "px";
}

function button1(myTimer) {

    function btn1(event) {
        if (buttonKey.textContent == 'Start') {
            myTimer.startCount(text, progressLine1);
            buttonKey.textContent = 'Pause';
        } else if (buttonKey.textContent == 'Pause') {
            myTimer.pauseCount();
            buttonKey.textContent = 'Start';
        }
    }

    buttonKey.addEventListener('click', btn1);
}

// Second timer
const myTimer2 = new Counter(500, true, 2000);

let buttonKey2 = document.querySelector('#timer2-button');
let text2 = document.querySelector('.timer2-text');
text2.textContent = myTimer2.num;

function progressLine2() {
    let progress = document.querySelector('#timer2-progress');
    let part = progress.clientWidth / myTimer2.num.toString();
    console.log(part)
    progress.style.width = progress.clientWidth - part + "px";
}

function button2(myTimer2) {
    function btn2(event) {
        if (buttonKey2.textContent == 'Start') {
            myTimer2.startCount(text2, progressLine2);
            buttonKey2.textContent = 'Pause';
        } else if (buttonKey2.textContent == 'Pause') {
            myTimer2.pauseCount();
            buttonKey2.textContent = 'Start';
        }
    }
    buttonKey2.addEventListener('click', btn2);
}

function autoPlay() {
    if (myTimer2.autoPlay == true) {
        myTimer2.startCount(text2, progressLine2);
        buttonKey2.textContent = 'Pause';
    }
}


autoPlay();
button1(myTimer);
button2(myTimer2);