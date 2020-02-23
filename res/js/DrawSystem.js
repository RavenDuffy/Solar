const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75,
  window.innerWidth / window.innerHeight,
  0.1, 1000);
camera.position.z = 500;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(1, 1);

const system = new System(2000);

const starSystem = new THREE.Points(
  system.geometry, system.material
);
starSystem.sort = true;
scene.add(starSystem);

/*** Draw / Update Methods ***/
const update = () => {
  raycaster.setFromCamera(mouse, camera);

  starSystem.rotation.y += 0.001;
  starSystem.rotation.y -= 0.0005;
  starSystem.rotation.z -= 0.001;
}

const animate = () => {
  requestAnimationFrame(animate);

  update();

  renderer.render(scene, camera);
}

/*** Utility Methods ***/
const resize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.onresize = resize;

animate();
