function managerElements(){
	managerPanel.innerHTML="";
	let d=document.createDocumentFragment()
	picjson.forEach(function(aimObj){
		let tmp=document.createElement("li")
		tmp.innerHTML=aimObj.type;
		d.appendChild(tmp)
    })
    managerPanel.appendChild(d)
}