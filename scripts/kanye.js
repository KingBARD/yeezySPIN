var looper;
var degrees = 0;
function rotateAnimation(el, speed) {
    var elem = document.getElementById(el);
    if (navigator.userAgent.match("Chrome")) {
        elem.style.WebkitTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Firefox")) {
        elem.style.MozTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("MSIE")) {
        elem.style.msTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Opera")) {
        elem.style.OTransform = "rotate(" + degrees + "deg)";
    } else {
        elem.style.transform = "rotate(" + degrees + "deg)";
    }
    looper = setTimeout('rotateAnimation(\'' + el + '\',' + speed + ')', speed);
    degrees++;
    if (degrees > 359) {
        degrees = 1;
    }

}
var audio = new Audio('https://dl.dropboxusercontent.com/s/45l1hgguv2ezene/08%20Guilt%20Trip.m4a');
function play() {
    audio.play();
    audio.volume = 1;
}
