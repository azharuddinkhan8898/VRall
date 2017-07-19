$(document).ready(function() {
  var container = document.querySelector("a-scene");
  for (i = 0; i < 500; i++) {
    var positionx = Math.random() * 10 - 5;
    var positiony = Math.random() * 10 - 5;
    var positionz = Math.random() * 10 - 5;
    var scale = Math.random() * 3 + 1;
    $(".sphere_div").append("<a-sphere opacity='1' radius='0.1' material='sphericalEnvMap:#sky;roughness:0; metalness:1;color:#ffffff' position='" + positionx + " " + positiony + " " + positionz + "' scale='" + scale + " " + scale + " " + scale + "' animate-this></a-sphere>");
  }
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
  setTimeout(function() {
    update_position();

  }, 20000);

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
      // sphere.position.x = 5 * Math.cos( timer + i );
      // sphere.position.y = 5 * Math.sin( timer + i * 1.1 );
    }
    setTimeout(function() {
      update_position();
    }, 10);
  }
  // effect.render( _scene, camera );
});
