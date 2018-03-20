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
		        pixes*aimObj.posX,  pixes*aimObj.posY, aimObj.image.width, aimObj.image.height,
		    );
	    }
    })
    
}