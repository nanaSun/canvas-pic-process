
canvas.addEventListener("mousedown",function (e) {
	let curX=e.clientX-canvasOffsetLeft,curY=e.clientY-canvasOffsetTop,deviation={x:0,y:0}    
    if(curobj&&curobj.w<=curX&&curobj.w+8>=curX&&curobj.h<=curY&&curobj.h+8>=curY){
        // curobj=obj
        // deviation.x=e.clientX-canvasOffsetLeft-curobj.posX
        // deviation.y=e.clientY-canvasOffsetTop-curobj.posY
        // break;
        updateCanvas()
        scaleEvent(e.clientX,e.clientY)
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
        moveEvent(curobj,deviation)
        updateCanvas()
    }
   
})
function moveEvent(curobj,d){
    function moveobj(e){
        if(curobj===null) return
        let moveX=e.clientX-canvasOffsetLeft-d.x,moveY=e.clientY-canvasOffsetTop-d.y
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
}
function scaleEvent(initX,initY){
    let oriScale=false;
    function scaleobj(e){
        if(curobj===null) return
        // curobj.posX=moveX
        // curobj.posY=moveY
        if(oriScale){
            let tmp=curobj.height/curobj.width
            curobj.width=curobj.width+(-initX+e.clientX)
            curobj.height=tmp*curobj.width
        }else{
            curobj.width=curobj.width+(-initX+e.clientX)
            curobj.height=curobj.height+(-initY+e.clientY)
        }
        curobj.w=curobj.width+curobj.posX
        curobj.h=curobj.height+curobj.posY
        initX=e.clientX
        initY=e.clientY
        updateCanvas()
    }
    function keepOriScale(e){
        console.log(e.keyCode)
        if(e.keyCode===16){
            oriScale=true;
        }
    }
    function cancelOriScale(){
        oriScale=false;
    }
    function removeListener(){
        document.removeEventListener("keydown",keepOriScale)
        document.removeEventListener("keyup",cancelOriScale)
        canvas.removeEventListener("mousemove",scaleobj)
        canvas.removeEventListener("mouseup",removeListener)
        canvas.removeEventListener("mouseleave",removeListener)
    }
    document.addEventListener("keydown",keepOriScale)
    document.addEventListener("keyup",cancelOriScale)
    canvas.addEventListener("mousemove",scaleobj)
    canvas.addEventListener("mouseup",removeListener)
    canvas.addEventListener("mouseleave",removeListener)
}