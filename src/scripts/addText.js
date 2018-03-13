let textInput=paramInputs.text,
	addTextInput=document.getElementsByClassName("addText")[0]

addTextInput.addEventListener("click",function() {
	let text=document.createElement("span")
	text.id=new Date().getTime()
	let param={type:"text",id: text.id,value:textInput.value,posX:0,posY:0}
	text.innerHTML=textInput.value
	text.style.color=paramInputs.fontColor.value
    text.style.font=paramInputs.fontSize.value+"px 微软雅黑"
	text.style.left=0
	text.style.top=0
	picjson.push(param)
	addMoveEvent(text,param)
	
	editpanel.appendChild(text)
})
function addMoveEvent(obj,param){
	function objMove(e){
		param.posX=e.clientX-canvasOffsetLeft-obj.offsetWidth
		param.posY=e.clientY-canvasOffsetTop-obj.offsetHeight
		obj.style.left=param.posX+"px"
		obj.style.top=param.posY+"px"
	}
	function objStop(e){
		console.log("objStop");
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