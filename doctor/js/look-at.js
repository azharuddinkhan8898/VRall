! function(t) {
  function e(o) {
    if (r[o]) return r[o].exports;
    var a = r[o] = { exports: {}, id: o, loaded: !1 };
    return t[o].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports }
  var r = {};
  return e.m = t, e.c = r, e.p = "", e(0) }([function(t, e) {
  var r = AFRAME.utils.debug,
    o = AFRAME.utils.coordinates,
    a = r("components:look-at:warn"),
    n = o.isCoordinate;
  delete AFRAME.components["look-at"], AFRAME.registerComponent("look-at", { schema: { src: { "default": "", parse: function(t) {
          return n(t) || "object" == typeof t ? o.parse(t) : t }, stringify: function(t) {
          return "object" == typeof t ? o.stringify(t) : t } }, checkSrcEveryFrame: { "default": !1 }, updateWorldTransform: { "default": !1 } }, init: function() { this.target3D = null, this.vector = new THREE.Vector3 }, update: function() {
      var t = this,
        e = t.data.src,
        r = t.el.object3D;
      return !e || "object" == typeof e && !Object.keys(e).length ? t.remove() : "object" == typeof e ? r.lookAt(new THREE.Vector3(e.x, e.y, e.z)) : this.updateTarget(e) }, updateTarget: function(t) {
      var e = this;
      return targetEl = this.el.sceneEl.querySelector(t), targetEl ? targetEl.hasLoaded ? e.beginTracking(targetEl) : targetEl.addEventListener("loaded", function() { e.beginTracking(targetEl) }) : void a('"' + t + '" does not point to a valid entity to look-at') }, tick: function(t) {
      var e, r = this,
        o = r.data.target,
        n = r.el.object3D;
      if ("string" == typeof r.data.target && r.data.checkSrcEveryFrame) {
        if (e = r.el.sceneEl.querySelector(o), !e) return a('"' + o + '" does not point to a valid entity to look-at'), void(this.target3D = null);
        if (!e.hasLoaded) return e.addEventListener("loaded", function() { r.beginTracking(e) });
        r.beginTracking(e) }
      if (this.target3D) return this.vector.setFromMatrixPosition(this.target3D.matrixWorld), n.parent && (this.data.updateWorldTransform && n.parent.updateMatrixWorld(), n.parent.worldToLocal(this.vector)), n.lookAt(this.vector) }, beginTracking: function(t) { this.target3D = t.object3D } }), AFRAME.registerComponent("billboard", { init: function() { this.vector = new THREE.Vector3 }, tick: function(t) {
      var e = this,
        r = e.el.sceneEl.camera,
        o = e.el.object3D;
      if (r) return r.updateMatrixWorld(), this.vector.setFromMatrixPosition(r.matrixWorld), o.parent && (o.parent.updateMatrixWorld(), o.parent.worldToLocal(this.vector)), o.lookAt(this.vector) } }) }]);