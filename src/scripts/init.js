const size=  document.documentElement.clientWidth;
let scale=1,maxScale=2,minScale=0.2,pixes=1;
let initX=0,initY=0,curobj=null;
let picjson=[]
let cropX1=0,cropY1=0,cropX2=0,cropY2=0;
let cropStartPos={x:0,y:0},cropEndPos={x:0,y:0},cropPos={x:0,y:0,w:size,h:size*9/16},hasCropScrop=false
let input = document.getElementById("getImage"),image=null; 
let paramInputs=document.getElementsByTagName("input")
let imageData = document.getElementById("imageData")
let download = document.getElementById("download")
let canvas = document.getElementById("canvas"); 
let editpanel = document.getElementById("editpanel"); 
let workplace = document.getElementsByClassName("workplace")[0];
let canvasOffsetTop=workplace.offsetTop,canvasOffsetLeft=workplace.offsetLeft;
canvas.width=size;
canvas.height=size*9/16;
let context = canvas.getContext("2d");
context.fillStyle = "#f00"; 
context.fillRect(0,0,10,10); 
context.beginPath(); 
context.arc(5, 5, 5, 0, 2*Math.PI, true);
context.fillStyle = "#00f"; // Set blue fill
context.fill(); // Fill the path

