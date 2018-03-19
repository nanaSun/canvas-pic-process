canvas.addEventListener("mousedown",function (e) {
	let curX=e.clientX-canvasOffsetLeft,curY=e.clientY-canvasOffsetTop,aimObj,deviation={x:0,y:0}
	try { 
	    picjson.forEach(function(obj){
	    	if(obj.posX<curX&&obj.w>curX&&obj.posY<curY&&obj.h>curY){
	    		aimObj=obj
	    		deviation.x=e.clientX-canvasOffsetLeft-aimObj.posX
	    		deviation.y=e.clientY-canvasOffsetTop-aimObj.posY
	    		throw e;	
	    	}
	    })
    }catch(e){
    	console.log(e)
    }

    function moveobj(e){
    	let moveX=e.clientX-canvasOffsetLeft-deviation.x,moveY=e.clientY-canvasOffsetTop-deviation.y
    	aimObj.posX=moveX
    	aimObj.posY=moveY
    	aimObj.w=aimObj.width+aimObj.posX
    	aimObj.h=aimObj.height+aimObj.posY
    	context.fillStyle = paramInputs.fontColor.value
	    context.font=paramInputs.fontSize.value+"px 微软雅黑"
	    context.textAlign="start "
	    context.textBaseline="top"
	    context.clearRect(0,0,canvas.width,canvas.height);
	    context.fillText(aimObj.text, pixes*aimObj.posX,  pixes*aimObj.posY)
    }
    function removeListener(){
    	canvas.removeEventListener("mousemove",moveobj)
    	canvas.removeEventListener("mouseup",removeListener)
    	canvas.removeEventListener("mouseleave",removeListener)
    }
    canvas.addEventListener("mousemove",moveobj)
    canvas.addEventListener("mouseup",removeListener)
    canvas.addEventListener("mouseleave",removeListener)
})

canvas.addEventListener("mouseup",function (e) {
    //console.log("mouseup",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
})
// editpanel.addEventListener("mouseleave",function (e) {
//     console.log("mouseleave",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
// })
// workplace.addEventListener("mouseenter",function (e) {
//     console.log("mouseenter",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
// })

// editpanel.addEventListener("mouseout",function (e) {
//     console.log("mouseout",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
// })
// workplace.addEventListener("mouseover",function (e) {
//     console.log("mouseover",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
// })
// editpanel.addEventListener("mousewheel",function (e) {
//     console.log("mousewheel",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
// })