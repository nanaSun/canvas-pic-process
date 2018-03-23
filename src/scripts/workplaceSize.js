let workplaceWidth=480,
	workplaceHeight=480*9/16

let workplaceHeightInput=paramInputs.height,
	workplaceWidthInput=paramInputs.width

workplaceHeightInput.value=workplaceHeight
workplaceWidthInput.value=workplaceWidth

canvas.style.height=workplaceHeight+"px"
canvas.style.width=workplaceWidth+"px"

workplaceHeightInput.addEventListener("change",function(e) {
	canvas.height=workplaceHeightInput.value
	keepWorkplaceSize("height")
})
workplaceWidthInput.addEventListener("change",function(e) {
	canvas.width=workplaceWidthInput.value
	keepWorkplaceSize("width")
})

function keepWorkplaceSize(type){
	if(type==="width"){
		canvas.style.width=pixes*workplaceWidthInput.value+"px"
	}else{
		canvas.style.height=pixes*workplaceHeightInput.value+"px"
	}
}