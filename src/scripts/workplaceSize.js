let workplaceWidth=size,
	workplaceHeight=size*9/16

let workplaceHeightInput=paramInputs.height,
	workplaceWidthInput=paramInputs.width

workplaceHeightInput.value=workplaceHeight
workplaceWidthInput.value=workplaceWidth

canvas.style.height=workplaceHeight+"px"
canvas.style.width=workplaceWidth+"px"

workplaceHeightInput.addEventListener("change",function(e) {
	canvas.height=workplaceHeightInput.value
	keepWorkplaceSize()
})
workplaceWidthInput.addEventListener("change",function(e) {
	canvas.width=workplaceWidthInput.value
	keepWorkplaceSize()
})

function keepWorkplaceSize(){
	pixes=workplaceWidth/workplaceWidthInput.value
	canvas.style.height=workplaceWidth/workplaceWidthInput.value*workplaceHeightInput.value+"px"
}