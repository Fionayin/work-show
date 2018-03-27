function $(selector,content){
	if( selector.charAt(0) === "#" ){
		return document.getElementById(selector.slice(1))
	}else{
		content = content || document;
		return 	content.getElementsByTagName(selector);
	};
};
function getStyle( obj,attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];		
};
function doMove(obj,attr,target,speed,callBack){
	var cur = parseInt( getStyle(obj,attr) );

	//速度 正负取决于 当前位置和目标点的大小
	// 当前位置  < 目标点 速度是正的
	// 当前位置  > 目标点 速度是负的
	speed = cur < target ? Math.abs(speed) : -Math.abs(speed);
	//var timer = null;
	clearInterval(obj.timer);  //先清除，在开启
	obj.timer = setInterval(function (){
		cur += speed;
		if(  cur >= target && speed > 0 ||  cur <= target && speed < 0){
			clearInterval(obj.timer);
			cur = target;
			obj.style[attr] = cur + "PX";	

			/*if( typeof callBack === "function"){
				callBack();
			}*/

			typeof callBack === "function" &&　callBack();
		}else{
			obj.style[attr] = cur + "PX";	
		}

		
	},30);
}

function shake(obj,attr,speed,callBack){
	//如果这个元素身上已经有定时器开着，那么下面代码就不执行了

	if( obj.timer ) return;
	var cur = parseInt(getStyle(obj,attr)); //找到元素的起始位置
	var arr = [];
	for( var i = speed; i > 0 ; i-=3 ){
		arr.push(-i,i);
	}
	arr.push(0);
	var n = 0;
	obj.timer = setInterval(function (){
		obj.style[attr] = arr[n]+cur + "px";
		n++;
		if( n >= arr.length ){
			clearInterval(obj.timer);
			obj.timer = null;
			typeof callBack === "function" &&　callBack();
		}
	},30)	
}

function mousewheel(obj,upFn,downFn){
	obj.onmousewheel = fn;
	if(obj.addEventListener){
		obj.addEventListener("DOMMouseScroll",fn,false);
	}
	function fn(ev){
		var e = ev || event;
		var direction = true;
		if( e.wheelDelta ){ //chrome
			direction = e.wheelDelta > 0 ? true : false;
		}else{  //FF
			direction = e.detail < 0 ? true : false;
		}
		if( direction ){  //向上
			typeof upFn === "function" && upFn(e);
		}else{ //向下
			typeof downFn === "function" && downFn(e);
		}

		if(e.preventDefault){
			e.preventDefault();  //ie低版本不兼容
		}

		return false;
	}	
}
