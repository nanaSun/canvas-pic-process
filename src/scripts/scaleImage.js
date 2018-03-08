
canvas.onmousewheel=function (e) {
    var tmp=scale;
    if(e.wheelDeltaY>0){
        if(scale<maxScale){
             tmp +=.1
        }
    }else{
        if(scale>minScale){
            tmp -=.1
        }
    }
    console.log(tmp)
    if(tmp!==scale){
        scale=tmp;
        drawImage();
    }
   
}