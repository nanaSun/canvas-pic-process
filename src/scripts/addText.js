let textInput=paramInputs.text,
	addTextInput=document.getElementsByClassName("addText")[0]

addTextInput.addEventListener("click",function() {
	let param={type:"text",id: new Date().getTime(),value:textInput.value,posX:0,posY:0,w:0,h:0}
    param.color=paramInputs.fontColor.value
    param.height=parseInt(paramInputs.fontSize.value)
    param.h=parseInt(paramInputs.fontSize.value)+param.posY
    //mesure text size
    param.fillStyle = param.color
    param.font=param.height+"px 微软雅黑"
    param.textAlign="start "
    param.textBaseline="top"
    //测宽度
    context.font=param.height+"px 微软雅黑"
    context.textAlign=param.textAlign
    context.textBaseline=param.textBaseline
    let textSize=context.measureText(param.value);
    param.width=textSize.width
    param.w=textSize.width+param.posX
    
   
	picjson.push(param)
	updateCanvas();
})
function addMoveEvent(obj,param){
	function objMove(e){
		param.posX=e.clientX-canvasOffsetLeft-obj.offsetWidth
		param.posY=e.clientY-canvasOffsetTop-obj.offsetHeight
		obj.style.left=param.posX+"px"
		obj.style.top=param.posY+"px"
	}
	function objStop(e){
		editpanel.removeEventListener("mousemove",objMove)
		editpanel.removeEventListener("mouseup",objStop)
		editpanel.removeEventListener("mouseleave",objStop)
	}
	obj.addEventListener("mousedown",function (e) {
	    editpanel.addEventListener("mousemove",objMove)
		editpanel.addEventListener("mouseup",objStop)
		editpanel.addEventListener("mouseleave",objStop)
	})
}