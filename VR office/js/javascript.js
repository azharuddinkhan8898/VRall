

$(document).ready(function() {
	var camera = document.querySelector("a-camera");
	var trophy = document.querySelector("#trophyID");
	var trophyPlane = document.querySelector("#trophy-plane");
	var closebtn1 = document.querySelector("#close_btn1");
	var closesound = document.querySelector("#close_btn1[sound]");
	var maintext = document.querySelector("#maintext");
	var camerax;
	var cameray;
	var cameraz;
	var cleartimetrophy;
	var trophytimeout = setTimeout(function(){
		$("#trophyID").append("<a-animation direction='alternate' dur='200' attribute='position' to='-0.69 2.65 -3.25' repeat='indefinite' end='mouseenter'></a-animation>");
	}, 20000);
	trophy.addEventListener("mouseenter", function(){
		clearTimeout(trophytimeout);
		$("#trophyID").empty();
		$("#trophyID").removeAttr("animation__reverse animation__scaleR");
		$("#trophy-plane").removeAttr("animation__reverse");
		$("#trophy-plane").attr("animation", "dur:500; property:scale; to:1.2 1.2 1.2");
		$("#trophyID").attr({"animation":"property: position; dur:500; to:-0.69 2.85 -1.20", "animation__scale":"property: scale; dur:500; to:0.6 0.6 0.6"});
		
	});
	closebtn1.addEventListener("mouseenter", function(){
		$("#close_btn1 a-entity").attr("visible","true");
			cleartimetrophy = setTimeout(function(){
				$("#trophyID").removeAttr("animation animation__scale");
				$("#trophy-plane").removeAttr("animation");
				$("#trophy-plane").attr("animation__reverse", "dur:250; property:scale; to:0 0 0");
				$("#trophyID").attr({"animation__reverse":"property: position; dur:250; to:-0.69 2.58 -3.25", "animation__scaleR":"property: scale; dur:250; to:0.4 0.4 0.4"});
				maintext.setAttribute("text",{
					value:"Now look for the Certificate in this room"
				});
			}, 2000);
			
	
	});
	closesound.addEventListener("sound-ended", function(){
		$("#close_btn1").removeAttr("sound");
	});
	closebtn1.addEventListener("mouseleave", function(){

		$("#close_btn1 a-entity").attr("visible","false");
		clearTimeout(cleartimetrophy);
	});
	$(document).keypress(function(e) {
    var key = e.which;
    if (key == 32) {
    	camerax = (camera.getAttribute("position")).x;
    	cameraz = (camera.getAttribute("position")).z;
    	cameray = (camera.getAttribute("position")).y + 0.5;
    	console.log(camerax ,cameray ,cameraz);
      $("a-camera").attr("position", camerax+ " " +cameray+ " " +cameraz);
      setTimeout(function(){
      	$("a-camera").attr("position", camerax+ " " +(cameray-0.5)+ " " +cameraz);
      }, 500);
			
      console.log(camera.getAttribute("position"));
    }
  });
});
