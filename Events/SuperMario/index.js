// Super Mario Emulator

// Create Super Mario emulator
// On right arrow click, Mario should run to the right
// Running animation
// Ground should move while Mario is running
// Images ( https://rb.gy/23keik )
// If you are feeling creative, feel freely to add additional functionality!


var mario = document.getElementById('mario');
var bg = document.getElementById('bg');
var positionX = 0;


var marioMoving = function (e) {
    if (e.key === 'ArrowRight') {
        mario.src = './mario_running.gif';
        document.removeEventListener('keydown', marioMoving);
    }
    else if (e.key === 'ArrowLeft') {
        mario.src = './mario_running_flip.gif';
        document.removeEventListener('keydown', marioMoving);
    }
    else if (e.key === 'ArrowUp') {
        mario.style.bottom = '50%';
        mario.src = "./mario.png";
    }
}

var backgroundMoving = function (e) {
    if(e.key === 'ArrowRight') {
        bg.style.backgroundPosition = positionX + 'px';
        positionX -= 20;
        }
    else if(e.key === 'ArrowLeft') {
        bg.style.backgroundPosition = positionX + 'px';
        positionX += 20;
        }
    }

var stopMario = function (e) {
    if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
        mario.src = "./mario.png";
        document.addEventListener('keydown', marioMoving);
    }
}

document.addEventListener('keyup', function (e) {
    if(e.key === 'ArrowUp') {
        mario.style.bottom = '140px';
        }
    })

document.addEventListener('keydown', backgroundMoving);

document.addEventListener('keydown', marioMoving);

document.addEventListener('keyup',stopMario)

