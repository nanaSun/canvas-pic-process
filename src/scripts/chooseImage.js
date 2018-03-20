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
	for (var i = 0;i < this.files.length;i++){
		getImageFormFile(this.files[i],function(img){
			let param={type:"pic",id: new Date().getTime(),image:img,posX:0,posY:0,w:img.width,h:img.height}
			picjson.push(param)
			updateCanvas();
		}); 
	}
	
})
