
canvas.addEventListener("touchstart",event)
canvas.addEventListener("mousedown",event)
function event(e){
   let clientX=e.clientX||e.changedTouches[0].clientX,
        clientY=e.clientY||e.changedTouches[0].clientY
    let curX=clientX-canvasOffsetLeft,curY=clientY-canvasOffsetTop,deviation={x:0,y:0}    
    if(curobj&&curobj.w<=curX&&curobj.w+8>=curX&&curobj.h<=curY&&curobj.h+8>=curY){
        updateCanvas()
        scaleEvent(clientX,clientY)
        return;
    }else{
        curobj=null
        try { 
            let obj
            for(let i=picjson.length;i--;i>=0){
                obj=picjson[i]
                console.log(obj,curX,curY)
                if(obj.posX<curX&&obj.w>curX&&obj.posY<curY&&obj.h>curY){
                    curobj=obj
                    deviation.x=clientX-canvasOffsetLeft-curobj.posX
                    deviation.y=clientY-canvasOffsetTop-curobj.posY
                    break;
                }
            }
        }catch(e){
            console.log(e)
        }
        moveEvent(curobj,deviation)
        updateCanvas()
    } 
}
function moveEvent(curobj,d){
    function moveobj(e){
        let clientX=e.clientX||e.changedTouches[0].clientX,
        clientY=e.clientY||e.changedTouches[0].clientY
        if(curobj===null) return
        let moveX=clientX-canvasOffsetLeft-d.x,moveY=clientY-canvasOffsetTop-d.y
        curobj.posX=moveX
        curobj.posY=moveY
        curobj.w=curobj.width+curobj.posX
        curobj.h=curobj.height+curobj.posY
        updateCanvas()
    }
    function removeListener(e){
        canvas.removeEventListener("touchmove",moveobj)
        canvas.removeEventListener("touchend",removeListener)
        canvas.removeEventListener("mousemove",moveobj)
        canvas.removeEventListener("mouseup",removeListener)
        canvas.removeEventListener("mouseleave",removeListener)
    }
    canvas.addEventListener("touchmove",moveobj)
    canvas.addEventListener("touchend",removeListener)
    canvas.addEventListener("mousemove",moveobj)
    canvas.addEventListener("mouseup",removeListener)
    canvas.addEventListener("mouseleave",removeListener)
}
function scaleEvent(initX,initY){
    let oriScale=false;
    function scaleobj(e){
        let clientX=e.clientX||e.changedTouches[0].clientX,
        clientY=e.clientY||e.changedTouches[0].clientY
        if(curobj===null) return
        // curobj.posX=moveX
        // curobj.posY=moveY
        if(oriScale){
            let tmp=curobj.height/curobj.width
            curobj.width=curobj.width+(-initX+clientX)
            curobj.height=tmp*curobj.width
        }else{
            curobj.width=curobj.width+(-initX+clientX)
            curobj.height=curobj.height+(-initY+clientY)
        }
        curobj.w=curobj.width+curobj.posX
        curobj.h=curobj.height+curobj.posY
        initX=clientX
        initY=clientY
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
    function removeListener(e){
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