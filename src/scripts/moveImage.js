canvas.addEventListener("mousedown",function (e) {
    console.log((e.clientX>cropX1&&e.clientX<cropX2),(e.clientY>cropY1&&e.clientY<cropY2));
    if(!hasCropScrop||(e.clientX>cropX1&&e.clientX<cropX2)||(e.clientY>cropY1&&e.clientY<cropY2)){
        console.log("inside")
        return;
    }
    if(image===null) return;
    let gx=e.clientX-initX,gy=e.clientY-initY;
    console.log("onmousedown",gx,gy)
    canvas.onmousemove = function(e){
        x= e.clientX-gx;y=e.clientY-gy;
        initX=x;
        initY=y;
        context.clearRect(0,0,canvas.width,canvas.height);
        drawImage()
        context.lineWidth = 2;
        context.strokeStyle = "red";
        context.strokeRect(cropPos.x-1, cropPos.y-1, cropPos.w+2, cropPos.h+2);
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
})