
var bg = document.getElementById('bg')
var box = document.getElementById('box');
var start, scaleunit, percent = 40;
var nightmode = false;

bg.addEventListener('pointerdown', movebg);
box.addEventListener('pointerdown', sigh);
function movebg(e) {

  start = e.clientY;
  scaleunit = Math.trunc(window.innerHeight / 100)

  window.addEventListener('pointermove', startDrag);
    window.addEventListener('pointerup', stopDrag);
}

function startDrag(e) { //make gradient dragable at Y axes

    let delta = start - e.clientY
    start = e.clientY;

    percent += delta / scaleunit;
    percent = percent > 100 ? 100 : percent;  
    percent = percent <  -10 ? -10 : percent; 

    bg.style.background = 'linear-gradient(30deg, rgba(78,153,194,1) 0%, rgba(78,153,194,1)' + percent + '%, rgba(36,75,110,1) '+ (percent + 10) + '%, rgba(14,44,68,1) 100%)'
    box.style.userSelect = 'none'; 
}

function stopDrag(e) {

    window.removeEventListener('pointermove', startDrag);
    window.removeEventListener('pointerup', stopDrag);
    box.style.userSelect = 'auto';
}

function sigh(e) {
  e.stopPropagation()
}