$(function() {

  var playerEl = document.querySelector('.Atomato');
  playerEl.addEventListener('collide', function(e) {
    console.log(e.detail.body.id);
  });
  var uni_splash = document.querySelector("#uni_splash");
  var screen1 = document.querySelector("#screen1");
  var playbtn = document.querySelector("#playbtn");
  var opacityanime = document.querySelector(".opacityanime");
  var startbutton = document.querySelector("#startbtn");
  var video2 = document.querySelector("#video2");
  var leftbutton = document.querySelector("#leftbtn");
  var rightbutton = document.querySelector("#rightbtn");
  var camera = document.querySelector("a-camera");
  var options = document.querySelectorAll(".options");
  var wall3 = document.querySelector("#wall3");
  var wall1 = document.querySelector("#wall1");
  var goToNextWorld = document.querySelector("#goToNextWorld");

  uni_splash.pause();
  screen1.pause();
  console.log("paused");
  var playbtn_time;
  var startbtntime;
  var rightbtntime;
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'audio/1-second-of-silence.mp3');
  $(".startVR").click(function() {
    console.log("clicked");
    audioElement.play();
    $(".startbtn").hide();
    playbtn.addEventListener('mouseenter', function() {
      $("#playbtn").removeAttr("animation");
      $("#playbtn").attr("animation", "property:position; dur:100; to:0 2 -3.5");
      playbtn_time = setTimeout(function() {
        playbtn.setAttribute("visible", "false");
        console.log("started");
        uni_splash.play();
        $('.opacityanime').attr({ "animation": "property:opacity; delay:9100; dur:250;to:1" });
        // $('.camera1').attr({"animation__zoom":"property:zoom; delay:9100; dur:250;to:0.5"});
      }, 3000);
    });
  });


  uni_splash.addEventListener("ended", function() {
    console.log("ended");
    startbutton.setAttribute("visible", "true");
    $("#startbtn").attr("animation", "property:opacity; to:1; dur:200");
  });

  playbtn.addEventListener('mouseleave', function() {
    console.log("removed");
    clearTimeout(playbtn_time);
    $("#playbtn").removeAttr("animation");
    $("#playbtn").attr("animation", "property:position; dur:100; to:0 2 -3.9");
  });
  startbutton.addEventListener("mouseenter", function() {
    $("#startbtn").removeAttr("animation");
    $("#startbtn").attr("animation", "property:position; dur:100; to:0.048 -0.798 0.2");
    startbtntime = setTimeout(function() {
      $("#video1").attr("visible", "false");
      $("#video2").attr("visible", "true");
      screen1.currentTime = 0;
      screen1.play();
      video2.emit("video2Started");
    }, 2000);
  });
  startbutton.addEventListener("mouseleave", function() {
    $("#startbtn").removeAttr("animation");
    $("#startbtn").attr("animation", "property:position; dur:100; to:0.048 -0.798 0.01");
    clearTimeout(startbtntime);
  });
  $("#question1, #question1 *").attr("opacity", "0");
  $("#question1 a-entity[text]").attr("visible", "false");
  screen1.addEventListener("ended", function() {
    console.log("vid2 ended");
    rightbutton.setAttribute("opacity", "1.0");
    wall1.addEventListener("mouseenter", function() {
      console.log("entered qu");
      setTimeout(function() {
        $("#question1").attr({ "animation": "property:position; to:0 0 -0.3; dur:500" });
        $("#question1").attr({ "animation__fadeIn": "property:opacity; to:0.5; dur:500", "color": "#000000" });
        $("#question1 *").attr({ "animation__fade0": "property:opacity; to:1; dur:500" });
        $("#question1 a-entity[text]").attr({ "animation__show": "property:visible; to:true; dur:500" });
      }, 700);

    });
    rightbutton.addEventListener("mouseenter", function() {
      rightbtntime = setTimeout(function() {
        console.log("clicked");
        $("a-camera").attr("animation", "property:rotation; dur:300; to:0 -90 0");
        setTimeout(function() {
          $("a-camera").removeAttr("animation");
        }, 600);
      }, 2000);

    });
    rightbutton.addEventListener("mouseleave", function() {
      clearTimeout(rightbtntime);
    });
  });

  options[0].addEventListener("mouseenter", function() {
    var $this = $(this);
    $this.find("a-image").attr("src", "#optionarrow1");
    options[0].addEventListener("mouseleave", function() {
      if ($this.find("a-image").hasClass("selected")) {
        $this.find("a-image").attr("src", "#optionarrow1");
      } else {
        $this.find("a-image").attr("src", "#optionarrow");
      }
    });
    setTimeout(function() {
      $this.find("a-image").addClass("selected");
    }, 1500);
  });
  options[1].addEventListener("mouseenter", function() {
    var $this = $(this);
    $this.find("a-image").attr("src", "#optionarrow1");
    options[1].addEventListener("mouseleave", function() {
      if ($this.find("a-image").hasClass("selected")) {
        $this.find("a-image").attr("src", "#optionarrow1");
      } else {
        $this.find("a-image").attr("src", "#optionarrow");
      }
    });
    setTimeout(function() {
      $this.find("a-image").addClass("selected");
    }, 1500);
  });
  options[2].addEventListener("mouseenter", function() {
    var $this = $(this);
    $this.find("a-image").attr("src", "#optionarrow1");
    options[2].addEventListener("mouseleave", function() {
      if ($this.find("a-image").hasClass("selected")) {
        $this.find("a-image").attr("src", "#optionarrow1");
      } else {
        $this.find("a-image").attr("src", "#optionarrow");
      }
    });
    setTimeout(function() {
      $this.find("a-image").addClass("selected");
    }, 1500);
  });



  var wall3timeout;
  var redSpheretimeout;
  goToNextWorld.addEventListener("mouseenter", function() {
    $("#goToNextWorld").removeAttr("animation");
    $("#goToNextWorld").attr("animation", "property:position; to:2.641 0.773 -1.132; dur:200");
    wall3timeout = setTimeout(function() {
      $(".camera1").removeAttr("animation");
      $(".camera1").attr("animation", "property:position; to:0 100 0; dur:1000");
      setTimeout(function() {
        update_position();
        $("#light1").attr("visible", "false");
        $("#light2").attr("visible", "true");

      }, 1000);
    }, 1500)


  });
  wall3.addEventListener("mouseleave", function() {
    clearTimeout(wall3timeout);
    $("#goToNextWorld").removeAttr("animation");
    $("#goToNextWorld").attr("animation", "property:position; to:3.202 0.773 -0.483; dur:300")
  });

  // code for sphere start here
  var container = document.querySelector("a-scene");
  for (i = 0; i < 500; i++) {
    var positionx = Math.random() * 10 - 5;
    var positiony = Math.random() * 10 - 5;
    var positionz = Math.random() * 10 - 5;
    var scale = Math.random() * 3 + 1;
    if (i == 150 || i == 10 || i == 444 || i == 50) {
      $(".sphere_div").append("<a-sphere class='redSphere' opacity='1' radius='0.1' material='sphericalEnvMap:#skysphere;roughness:0; metalness:1;color:red' position='" + positionx + " " + positiony + " " + positionz + "' scale='" + scale + " " + scale + " " + scale + "' animate-this></a-sphere>");
    } else {
      $(".sphere_div").append("<a-sphere opacity='1' radius='0.1' material='sphericalEnvMap:#skysphere;roughness:0; metalness:1;color:#ffffff' position='" + positionx + " " + positiony + " " + positionz + "' scale='" + scale + " " + scale + " " + scale + "' animate-this></a-sphere>");
    }

  }
  var redSphere = document.querySelectorAll(".redSphere");
  console.log("length is:" + redSphere.length);
  var shphereTimeout;
  redSphere[0].addEventListener("mouseenter", function() {
    shphereTimeout = setTimeout(function() {
      $(".camera1").removeAttr("animation");
      $(".camera1").attr("animation", "property:position; to:0 1.96 0; dur:1000");
      $("#light1").attr("visible", "true");
      $("#light2").attr("visible", "false");
    }, 1000);
    redSphere[0].addEventListener("mouseleave", function() {
      clearTimeout(shphereTimeout);
    });
  });


  redSphere[1].addEventListener("mouseenter", function() {
    shphereTimeout = setTimeout(function() {
      $(".camera1").removeAttr("animation");
      $(".camera1").attr("animation", "property:position; to:0 1.96 0; dur:1000");
      $("#light1").attr("visible", "true");
      $("#light2").attr("visible", "false");
    }, 1000);
  });
  redSphere[1].addEventListener("mouseleave", function() {
    clearTimeout(shphereTimeout);
  });

  redSphere[2].addEventListener("mouseenter", function() {
    shphereTimeout = setTimeout(function() {
      $(".camera1").removeAttr("animation");
      $(".camera1").attr("animation", "property:position; to:0 1.96 0; dur:1000");
      $("#light1").attr("visible", "true");
      $("#light2").attr("visible", "false");
    }, 1000);
  });
  redSphere[2].addEventListener("mouseleave", function() {
    clearTimeout(shphereTimeout);
  });

  redSphere[3].addEventListener("mouseenter", function() {
    shphereTimeout = setTimeout(function() {
      $(".camera1").removeAttr("animation");
      $(".camera1").attr("animation", "property:position; to:0 1.96 0; dur:1000");
      $("#light1").attr("visible", "true");
      $("#light2").attr("visible", "<false></false>");
    }, 1000);
  });
  redSphere[3].addEventListener("mouseleave", function() {
    clearTimeout(shphereTimeout);
  });
  // for (i = 0; i < 4; i++) {
  //   redSphere[i].addEventListener("mouseenter", function() {
  //     shphereTimeout = setTimeout(function() {
  //       $(".camera1").removeAttr("animation");
  //       $(".camera1").attr("animation", "property:position; to:0 0.36 0; dur:1000");
  //     }, 1500);
  //   });
  //   redSphere[i].addEventListener("mouseleave", function() {
  //    	clearTimeout(shphereTimeout);
  //   });
  // }
  // renderer = new THREE.WebGLRenderer({ antialias: false });
  // renderer.setPixelRatio(window.devicePixelRatio);
  // container.appendChild(renderer.domElement);
  // var width = window.innerWidth || 2;
  // var height = window.innerHeight || 2;
  // effect = new THREE.AnaglyphEffect(renderer);
  // effect.setSize(width, height);



  // AFRAME.registerComponent('animate-this', {
  //   tick: function (time, timeDelta) {
  //     var el = this.el;
  //     update_position(el);
  //   }
  // });
  // setTimeout(function() {
  //   update_position();

  // }, 20000);

  function update_position(cr_entity) {
    var spheres = document.querySelectorAll(".sphere_div a-sphere");
    var timer = 0.0001 * Date.now();
    for (var i = 0, il = spheres.length; i < il; i++) {
      var sphere = spheres[i];
      var zpos = sphere.getAttribute("position");
      sphere.setAttribute("position", {
        x: 5 * Math.cos(timer + i),
        y: 5 * Math.sin(timer + i * 1.1),
        z: zpos.z
      });
    }
    setTimeout(function() {
      update_position();
    }, 10);
  }
  // code for sphere ends here

});
