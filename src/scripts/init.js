const size=  document.documentElement.clientWidth;
let scale=1,maxScale=2,minScale=0.2
let initX=0,initY=0
let cropX=0,cropY=0,cropW=0,cropH=0;
var input = document.getElementById("getImage"),image=null; 
let canvas = document.getElementById("canvas"); 
canvas.width=size;
canvas.height=size*9/16;
let context = canvas.getContext("2d");

context.fillStyle = "#f00"; 
context.fillRect(0,0,10,10); 
context.beginPath(); 
context.arc(5, 5, 5, 0, 2*Math.PI, true);
context.fillStyle = "#00f"; // Set blue fill
context.fill(); // Fill the path

function drawImage() {
	context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(
        image, 
        cropX, cropX, cropW, cropH,
        initX, initY, cropW*scale, cropH*scale,
    );
}