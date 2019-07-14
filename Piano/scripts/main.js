let soundArr = new Map();

let keyElements = document.querySelectorAll('.piano-key');

keyElements.forEach(element => {
    let soundEelement = element.querySelector('audio');
    soundArr.set(element.getAttribute('id'), soundEelement.getAttribute('data-name'));
    soundArr.set(element.getAttribute('data-key-code'), soundEelement.getAttribute('data-name'));
});


function playBourdDown(event) {
    const keyBoard = event.keyCode.toString();
    if (soundArr.get(keyBoard) != undefined) {
        let audio = document.querySelector(`audio[data-name="${soundArr.get(keyBoard)}"`);
        audio.currentTime = 0;
        audio.play();

        const key = document.getElementById(`${soundArr.get(keyBoard)}`);
        key.classList.add('playBoard');
    }
}

function playBourdUp(event) {
    const keyBoard = event.keyCode.toString();
    if (soundArr.get(keyBoard) != undefined) {
        const key = document.getElementById(`${soundArr.get(keyBoard)}`);
        key.classList.remove('playBoard');
    }
}

function playMouse(event) {
    const keyMouse = event.srcElement.id;
    if (soundArr.get(keyMouse) != undefined) {
        let audio = document.querySelector(`audio[data-name="${soundArr.get(keyMouse)}"`);
        audio.currentTime = 0;
        audio.play();
    }
}

document.addEventListener('keydown', playBourdDown);
document.addEventListener('keyup', playBourdUp);
document.addEventListener('click', playMouse);