let textInput=paramInputs.text,
	addTextInput=document.getElementsByClassName("addText")[0]

addTextInput.addEventListener("click",function() {
	let param={type:"text",id: new Date().getTime(),value:textInput.value,posX:0,posY:0,w:0,h:0}
 	context.fillStyle = paramInputs.fontColor.value
    context.font=paramInputs.fontSize.value+"px 微软雅黑"
    context.textAlign="start "
    context.textBaseline="top"
    let textSize=context.measureText(paramInputs.text.value);
    param.text=paramInputs.text.value
    param.width=textSize.width
    param.height=parseInt(paramInputs.fontSize.value)
    param.w=textSize.width+param.posX
    param.h=parseInt(paramInputs.fontSize.value)+param.posY
    context.fillText(param.text, pixes*param.posX,  pixes*param.posY)
	picjson.push(param)
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