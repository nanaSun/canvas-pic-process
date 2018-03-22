canvas.addEventListener("mousedown",function (e) {
    
	let curX=e.clientX-canvasOffsetLeft,curY=e.clientY-canvasOffsetTop,deviation={x:0,y:0}
	if(curobj){
        console.log(curobj.w,curobj.h,curX,curY)
    }
    
    if(curobj&&curobj.w<=curX&&curobj.w+8>=curX&&curobj.h<=curY&&curobj.h+8>=curY){
        // curobj=obj
        // deviation.x=e.clientX-canvasOffsetLeft-curobj.posX
        // deviation.y=e.clientY-canvasOffsetTop-curobj.posY
        // break;
        console.log("changeSize")
        return;
    }else{
        curobj=null
        try { 
            let obj
            for(let i=picjson.length;i--;i>=0){
                obj=picjson[i]
                if(obj.posX<curX&&obj.w>curX&&obj.posY<curY&&obj.h>curY){
                    curobj=obj
                    deviation.x=e.clientX-canvasOffsetLeft-curobj.posX
                    deviation.y=e.clientY-canvasOffsetTop-curobj.posY
                    break;
                }
            }
        }catch(e){
        	console.log(e)
        }
    }
    updateCanvas()
    function moveobj(e){
        if(curobj===null) return
        let moveX=e.clientX-canvasOffsetLeft-deviation.x,moveY=e.clientY-canvasOffsetTop-deviation.y
    	curobj.posX=moveX
    	curobj.posY=moveY
    	curobj.w=curobj.width+curobj.posX
    	curobj.h=curobj.height+curobj.posY
    	updateCanvas()
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