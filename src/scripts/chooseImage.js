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
            	console.log( img.width, img.height);
            	callback(img);
            }
            
		}
	});
}

var input = document.getElementById("getImage"); 
input.addEventListener("change",function(e){
	for (var i = 0;i < this.files.length;i++){
		getImageFormFile(this.files[i],function(img){
			context.drawImage(
				img, 
				0, 0, img.width, img.height
			);
		}); 
	}
	
})
