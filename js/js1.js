window.onload = function(){
	document.onmousewheel = start;
	if( document.addEventListener ){
		document.addEventListener("DOMMouseScroll",start,false);
	};
	var big = $("#big");
	var n = 0;
	var m = 0;
	var arr = ["#90b949","#00a8b5","#e88238","#d93751"];
	document.body.style.background = arr[m];
	big.data("onOff",true);
	big.bind("webkitTransitionEnd transitionend",function(){
		setTimeout(function(){
			big.data("onOff",true);
		},100)
	})
	function start(ev){
		var e = ev || event;
		var direction = true;
		if( e.wheelDelta ){ //chrome
			direction = e.wheelDelta > 0 ? true : false;
		}else{			//FF
			direction = e.detail < 0 ? true : false;
		};
		if( direction ){
			if( big.data("onOff") ){
				n+=90;
				m--;
				big.css({
					transform:"rotate("+n+"deg)",
					"transform-origin":"200px 800px"
				});
				if( m < 0 ){
					m = 3;
				};
				document.body.style.background = arr[m];
				document.body.style.transition = "1s";
				big.data("onOff",false);
			}
		}else{
			if(big.data("onOff")){
				n-=90;
				m++;
				big.css({
					transform:"rotate("+n+"deg)",
					"transform-origin":"200px 800px"
				});
				big.data("onOff",false);
				if( m >= 4){
					m = 0;
				}
				document.body.style.background = arr[m];
				document.body.style.transition = "1s";
			}
		};
		return false;
		e.preventDefault();
	};
	var work3 = $("#work3");
	work3.bind({
		mouseover:function(){
			work3.css("opacity",0.7)
		},
		mouseout:function(){
			work3.css("opacity",1)
		},
		click:function(){
			$("#bgBig").slideToggle("slow");
			$("#workList").css({
				display:"block"
			})
			$("#enter2").css({
				display:"none"
			})
		}
	})

	var enter = document.getElementById("enter");
	var enter1 = document.getElementById("enter1");
	var enter2 = document.getElementById("enter2");
	var inter = document.getElementById("inter");
	var inter1 = document.getElementById("inter1");
	enter.onmouseover = function(){
		$("#enter").css({
			transform:"rotate(360deg)",
		})
		inter.style.left = -430+"px";
	};
	enter.onmouseout = function(){
		$("#enter").css({
			transform:"rotate(0deg)"
		})
		inter.style.left = -440+"px";
	};
	enter.onclick = function(){
		$("#leo").slideToggle("slow");
	}
	enter1.onmouseover = function(){
		$("#enter1").css({
			transform:"rotateX(360deg)",
		})
		inter1.style.top = 1735+"px";
	};
	enter1.onmouseout = function(){
		$("#enter1").css({
			transform:"rotateX(0deg)"
		})
		inter1.style.top = 1745+"px";
	};
	enter2.onmouseover = function(){
		$("#enter2").css({
			transform:"rotateY(360deg)",
		})
	};
	enter2.onmouseout = function(){
		$("#enter2").css({
			transform:"rotateY(0deg)"
		})
	};
	enter2.onclick = function(){
		$("#workList article").css("display","none");
		$("#bgBig").css({
			display:"block"
		});
		$("#workImg").css({
			display:"block"
		})
		$("#enter2").css({
			display:"none"
		})
		$("#workList").css({
			transform:"rotateY(0deg)",
			display:"block"
		});
		list.css({
			display:"block"
		});
		bgBig.scrollTop = 0;
	}
	var workList = document.getElementById("workList");
	var bgBig = document.getElementById("bgBig");
	var leo = document.getElementById("leo");
	bgBig.style.height = document.documentElement.clientHeight +"px";
	bgBig.onmousewheel = function(ev){
		var e = ev || event;
		e.cancelBubble = true;
	};
	leo.onmousewheel = function(ev){
		var e = ev || event;
		e.cancelBubble = true;
	};
	if( bgBig.addEventListener ){
		bgBig.addEventListener("DOMMouseScroll",function(ev){
			var e = ev || event;
			e.stopPropagation();
		});
	};
	var list = $("#list");
	var listLis= $("#list li");
	listLis.click(
		function(){
			$("#workList").css({
				transform:"rotateY(180deg)",
			});
			list.css({
				display:"none"
			});
			$("#workImg").css({
				display:"none"
			})
			$("#workList article").css("display","none");
			$("#workList article").eq($(this).index()).css("display","block");
			$("#enter2").css({
				display:"block"
			})
			bgBig.scrollTop = 0;
		}
	);
	var art = document.getElementsByTagName("article");
	var close = $("#close");
	close.click(function(){
		$("#bgBig").slideToggle("slow");
		list.css({
			display:"block"
		});
		$("#workImg").css({
			display:"block"
		});
		$("#workList article").css("display","none");
		$("#workList").css({
			transform:"rotateY(0deg)"
		});
		
	});
	var close1 = $("#close1");
	close1.click(function(){
		$("#leo").slideToggle("slow");
	})
}









