var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o', ''];
for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
}

if (window.requestAnimationFrame) return true;
if (window.cancelAnimationFrame) return true;
