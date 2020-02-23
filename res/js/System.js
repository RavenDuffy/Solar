class System {
  constructor(starCount) {
    this.starCount = starCount;
    this.geometry = new THREE.Geometry();
    this.material = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 10,
      map: new THREE.TextureLoader().load(
        "../res/images/particle.png"
      ),
      blending: THREE.AdditiveBlending,
      transparent: true,
      alphaTest: 0.5
    });
    this.createSystem();
  }

  createSystem() {
    for (let s = 0; s < this.starCount; s++)
      this.geometry.vertices.push(new THREE.Vector3(
        Math.random() * 1000 - 500,
        Math.random() * 1000 - 500,
        Math.random() * 1000 - 500));
  }
}
