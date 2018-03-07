var canvas = document.getElementById("canvas"); 
var context = canvas.getContext("2d");

context.fillStyle = "#f00"; 
context.fillRect(0,0,10,10); 
context.beginPath(); 
context.arc(5, 5, 5, 0, 2*Math.PI, true);
context.fillStyle = "#00f"; // Set blue fill
context.fill(); // Fill the path