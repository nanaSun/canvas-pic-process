canvas.addEventListener("mousedown",function (e) {
	if(hasCropScrop){
        console.log(hasCropScrop)
        return;
    }
    if(image===null) return;
    cropStartPos.y=e.clientY;
    cropStartPos.x=e.clientX;
    canvas.onmousemove = function(e){
        cropEndPos.y=e.clientY;
        cropEndPos.x=e.clientX;
        let minX=cropEndPos.x>cropStartPos.x?cropStartPos.x:cropEndPos.x,
        	minY=cropEndPos.y>cropStartPos.y?cropStartPos.y:cropEndPos.y
        context.clearRect(0,0,canvas.width,canvas.height);
        cropPos={x:minX+1,y:minY+1,w:Math.abs(cropEndPos.x-cropStartPos.x)-2,h:Math.abs(cropEndPos.y-cropStartPos.y-2)}
        cropX1=cropPos.x,cropY1=cropPos.y,cropX2=cropPos.x+cropPos.w,cropY2=cropPos.y+cropPos.h;
        drawImage()
        context.lineWidth = 2;
		context.strokeStyle = "red";
		context.strokeRect(minX, minY, Math.abs(cropEndPos.x-cropStartPos.x), Math.abs(cropEndPos.y-cropStartPos.y));
    };
    canvas.onmouseup = function(e){
    	canvas.onmouseleave = null
        cropEndPos.y=e.clientY;
        cropEndPos.x=e.clientX;
  //       context.clearRect(0,0,canvas.width,canvas.height);
  //       context.lineWidth = 2;
		// context.strokeStyle = "#000";
		// context.save();   
  //       context.beginPath();   
		// context.rect(minX, minY, Math.abs(cropEndPos.x-cropStartPos.x), Math.abs(cropEndPos.y-cropStartPos.y));
		// cropPos={x:minX,y:minY,w:Math.abs(cropEndPos.x-cropStartPos.x),h:Math.abs(cropEndPos.y-cropStartPos.y)}
		// //context.stroke();
		// context.clip();
		// drawImage()
		let minX=cropEndPos.x>cropStartPos.x?cropStartPos.x:cropEndPos.x,
        	minY=cropEndPos.y>cropStartPos.y?cropStartPos.y:cropEndPos.y
        context.clearRect(0,0,canvas.width,canvas.height);
        cropPos={x:minX+1,y:minY+1,w:Math.abs(cropEndPos.x-cropStartPos.x)-2,h:Math.abs(cropEndPos.y-cropStartPos.y-2)}
        cropX1=cropPos.x,cropY1=cropPos.y,cropX2=cropPos.x+cropPos.w,cropY2=cropPos.y+cropPos.h;
        drawImage()
        context.lineWidth = 2;
		context.strokeStyle = "red";
		context.strokeRect(minX, minY, Math.abs(cropEndPos.x-cropStartPos.x), Math.abs(cropEndPos.y-cropStartPos.y));
		hasCropScrop=true;
		canvas.onmouseleave = null
		canvas.onmousemove = null
		canvas.onmouseup = null

    };
    canvas.onmouseleave = function(e){
        cropEndPos.y=e.clientY;
        cropEndPos.x=e.clientX;
        let minX=cropEndPos.x>cropStartPos.x?cropStartPos.x:cropEndPos.x,
        	minY=cropEndPos.y>cropStartPos.y?cropStartPos.y:cropEndPos.y
        context.clearRect(0,0,canvas.width,canvas.height);
        cropPos={x:minX+1,y:minY+1,w:Math.abs(cropEndPos.x-cropStartPos.x)-2,h:Math.abs(cropEndPos.y-cropStartPos.y-2)}
        cropX1=cropPos.x,cropY1=cropPos.y,cropX2=cropPos.x+cropPos.w,cropY2=cropPos.y+cropPos.h;
        drawImage()
        context.lineWidth = 2;
		context.strokeStyle = "#000";
		context.strokeRect(minX, minY, Math.abs(cropEndPos.x-cropStartPos.x), Math.abs(cropEndPos.y-cropStartPos.y));
		hasCropScrop=true;
		canvas.onmouseleave = null
		canvas.onmousemove = null
		canvas.onmouseup = null
    };
});