function updateCanvas(){
	//字体更新
	context.clearRect(0,0,canvas.width,canvas.height);
	picjson.forEach(function(aimObj){
		if(aimObj.type==="text"){
	    	context.fillStyle = aimObj.color
		    context.font=aimObj.height+"px 微软雅黑"
		    context.textAlign="start "
		    context.textBaseline="top"
		    context.fillText(aimObj.value, pixes*aimObj.posX,  pixes*aimObj.posY)
	    }else{
	    	context.drawImage(
		        aimObj.image, 
		        0, 0, aimObj.image.width, aimObj.image.height,
		        pixes*aimObj.posX,  pixes*aimObj.posY, aimObj.width, aimObj.height
		    );
	    }
    })
    if(curobj!==null){
    	context.beginPath();
		context.lineWidth="1";
    	context.strokeStyle="blue";
    	context.rect(curobj.posX,curobj.posY,curobj.width,curobj.height);
		context.stroke();
		context.beginPath();
    	context.strokeStyle="green";
    	context.lineWidth="8";
    	context.rect(curobj.w,curobj.h,8,8);
		context.stroke();
    }
    
}