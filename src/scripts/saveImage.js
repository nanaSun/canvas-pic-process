download.addEventListener("click",function(){

	saveImage();
})

function saveImage(){
	let picpixes=context.getImageData(cropPos.x,cropPos.y,cropPos.w,cropPos.h);
	Download(canvas.toDataURL())
}

function Download(imgdata){
    var type ='png';
    var fixtype=function(type){
        type=type.toLocaleLowerCase().replace(/jpg/i,'jpeg');
        var r=type.match(/png|jpeg|bmp|gif/)[0];
        return 'image/'+r;
    };
    imgdata=imgdata.replace(fixtype(type),'image/octet-stream');
    //3.0 将图片保存到本地
    var savaFile=function(data,filename)
    {
        var save_link=document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        save_link.href=data;
        save_link.download=filename;
        var event=document.createEvent('MouseEvents');
        event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null);
        save_link.dispatchEvent(event);
    };
    var filename=''+new Date().getDate()+'.'+type;  
    savaFile(imgdata,filename);
};