const size=  document.documentElement.clientWidth;
let scale=1,maxScale=2,minScale=0.2
let initX=0,initY=0

let cropX1=0,cropY1=0,cropX2=0,cropY2=0;
let cropStartPos={x:0,y:0},cropEndPos={x:0,y:0},cropPos={x:0,y:0,w:size,h:size*9/16},hasCropScrop=false
let input = document.getElementById("getImage"),image=null; 
let imageData = document.getElementById("imageData")
let download = document.getElementById("download")
var outputcanvas=document.getElementById("saveImage"); 
let canvas = document.getElementById("canvas"); 
canvas.width=size;
canvas.height=size*9/16;
let context = canvas.getContext("2d");
let outputContext=outputcanvas.getContext("2d");
context.fillStyle = "#f00"; 
context.fillRect(0,0,10,10); 
context.beginPath(); 
context.arc(5, 5, 5, 0, 2*Math.PI, true);
context.fillStyle = "#00f"; // Set blue fill
context.fill(); // Fill the path

function drawImage() {
	
    context.drawImage(
        image, 
        initX, initY, image.width*scale, image.height*scale,
    );
}