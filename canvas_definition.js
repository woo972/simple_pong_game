/* 캔버스 객체를 핸들링한다 */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d'); // this object make you do some graphic works on canvas

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;