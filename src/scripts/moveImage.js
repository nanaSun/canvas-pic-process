
canvas.onmousedown=function (e) {
    if(image===null) return;
    let gx=e.clientX-initX,gy=e.clientY-initY;
    console.log("onmousedown",gx,gy)
    canvas.onmousemove = function(e){
        x= e.clientX-gx;y=e.clientY-gy;
        initX=x;
        initY=y;
        drawImage()
    };

    canvas.onmouseup = function(){
        canvas.onmousemove = null;
        canvas.onmouseup = null;
        canvas.onmouseleave = null;
    };
    canvas.onmouseleave = function(){
        canvas.onmousemove = null;
        canvas.onmouseup = null;
        canvas.onmouseleave = null;
    };
}