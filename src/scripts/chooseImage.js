function checkType(type){
	var r=false
	console.log(type)
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
	console.log(checkType(file.type));
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
			image=img;
			cropW=image.width
			cropH=image.height
			drawImage()
		}); 
	}
	
})
