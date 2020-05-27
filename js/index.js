// JavaScript source code
var alt = window.innerHeight;
var u = document.getElementById('ciao');    
console.log(alt);
var linea = document.querySelector('hr');
function gelsomino(event) {
    var y = window.screenY; 
    var c = -1;
    var y1 = y * c;
    var pippo = y1 * 100;
    var pippo1 = pippo / 100; 
    console.log(pippo);
    linea.style.width = pippo1;
    u.textContent = pippo1;
    console.log(pippo1);
}
document.addEventListener('scroll', gelsomino, false);
document.addEventListener('mousemove', gelsomino, false);
