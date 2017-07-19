

$(document).ready(function() {
	var cloth = document.querySelector("a-obj-model#clothes");
	var clothText = document.querySelector("a-text#clotheText");
	var barrel = document.querySelector("a-obj-model#barrel");

	cloth.addEventListener("mouseenter", function(){
		clothText.setAttribute("visible","true");
	});
	cloth.addEventListener("mouseleave", function(){
		clothText.setAttribute("visible","false");
	});
	barrel.addEventListener("mouseenter", function(){
		barrel.setAttribute("scale",{
			x:0.3,
			y:0.3,
			z:0.3
		});
	});
	barrel.addEventListener("mouseleave", function(){
		barrel.setAttribute("scale",{
			x:0.2,
			y:0.2,
			z:0.2
		});
	});
// 	var box = document.querySelector("a-box");
// var entity = document.querySelector("a-entity.text")
// box.addEventListener("mouseenter", function(){
// 	entity.setAttribute("visible", "true");
// });
// box.addEventListener("mouseleave", function(){
// 	entity.setAttribute("visible", "false");
// });
  // var box = $("a-box");
  // box.mouseenter(function(){
  // 	console.log("enter");
  // 	box.attr("scale","1.2 1.2 1.2");
  // });
// $("a-box").mouseenter(function(){
// 	$(".text").attr("visible", "true");
// });
  // var x = 0;
  // var y = 0;

  // var screen_height = $(window).height();
  // var screen_width = $(window).width();
  // screen_height = 0.5 * screen_height;
  // screen_width = 0.5 *screen_width;
  // $(document).mousemove(function(e) {
  //   x = e.clientX - screen_width;
  //   y = e.clientY - screen_height;

  //   x1 = (x / 50) ;
  //   y1 = (y / 50);
  //   console.log(x1 + " " + y1);
  //   $("a-camera").attr("position", x1 + " " + y1 + " 0");
  // });

});
