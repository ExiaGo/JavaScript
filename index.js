window.onload = function(){
	buttonStyle();
}

function buttonStyle() {
	var inputTag = document.getElementsByTagName("input");
	for(var i = 0; i < inputTag.length; i++){
		inputTag[i].onmouseover = function(){
			this.style.backgroundColor = "red";
			this.style.cursor = "pointer";
		}
		inputTag[i].onmouseout = function(){
			this.style.backgroundColor = "";
		}
	}
}