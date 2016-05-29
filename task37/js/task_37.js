// 获取元素对象
function g(el) { return document.getElementById(el); }
// ******************************************
// 点击半透明遮罩和关闭按钮时，使半透明遮罩不可见
g("mask").onclick = g("closeBtn").onclick = function() {

	g("mask").style.display = "none";
	g("loginBox").style.display = "none";	
}
g("loginlink").onclick = function() {

	g("mask").style.display = "block";
	g("closeBtn").style.display = "block";	
}

//自动全屏
function fillToBody (el) {
	 el.style.width = document.documentElement.clientWidth +"px";
	 el.style.height = document.documentElement.clientHeight+"px";
}


//自动居中
function autoCenter (el) {
	 var bodyW = document.documentElement.clientWidth;
	 var bodyH = document.documentElement.clientHeight;
	 var elW = el.offsetWidth;
	 var elH = el.offsetHeight;
	 el.style.left= (bodyW - elW) / 2 + "px";
	 el.style.top = (bodyH - elH) / 2 + "px";
}

//
window.onload = function() {
	 autoCenter(g("loginBox"));
	 fillToBody(g("mask"));
	 autoCenter("loginlink");
}