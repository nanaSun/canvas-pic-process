let picjson=[]
let input = document.getElementById("getImage"),image=null;
let download = document.getElementById("download")
let canvas = document.getElementById("canvas"); 
let complete = document.getElementById("complete");
let orientaion = document.querySelector('input[name="orientaion"]')
canvas.width=480;
canvas.height=480*9/16;
let context = canvas.getContext("2d");
let gif = new GIF({
  workers: 2,
  quality: 100
});

/*读取图片*/
function checkType(type){
	var r=false
	switch (type){
		case 'image/jpg':r=true;break;
		case 'image/png':r=true;break;
		case 'image/jpeg':r=true;break;
		case 'image/gif':r=true;break;
	}
	return r;
}
function getImageFormFile(file,callback){
	var reader = new FileReader();
	if(checkType(file.type)){
		reader.readAsDataURL(file);
	}
	reader.addEventListener('load',function () {
		if(checkType(file.type)){
			var img = new Image();
            img.src = reader.result;
            img.onload=function(){
            	callback(img);
            }
            
		}
	});
}
input.addEventListener("change",function(e){
	let num=this.files.length,loadNum=0
	for (var i = 0;i < this.files.length;i++){
		getImageFormFile(this.files[i],function(img){
			let param={image:img,width:img.width,height:img.height}
			picjson.push(param)
			loadNum++
			if(loadNum===num){
				showSequencePic()
			}
		}); 
	}
})

function showSequencePic(){
	let width=picjson[0].width,height=picjson[0].height;
	if(orientaion.checked){
		canvas.width=width*picjson.length
		canvas.height=height
		picjson.forEach(function(pic,index){
			drawOnCanvas(pic,width*index,0)
		})
	}else{
		canvas.width=width
		canvas.height=height*picjson.length
		picjson.forEach(function(pic,index){
			drawOnCanvas(pic,0,height*index)
		})

	}
	
	gif.on('finished', function(blob) {
	  complete.src=URL.createObjectURL(blob)
	});
	gif.render();
}
function drawOnCanvas(pic,x,y){
	gif.addFrame(pic.image, {copy: true});
	context.drawImage(pic.image, x,y);
}