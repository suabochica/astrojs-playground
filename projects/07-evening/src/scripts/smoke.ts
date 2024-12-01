import * as THREE from 'three';

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let particles: THREE.Mesh[];
let clock: THREE.Clock;

const canvas = document.getElementById('smoke') as HTMLCanvasElement;

export function init(isDark: boolean) {
  const config = {
    material: {
      color: isDark ? 0xffffff : 0xdddddd,
    },
    light: {
      ambientLight: {
        color: isDark ? 0xdddddd : 0x333333,
        intensity: 1.5,
      },
      directionalLight: {
        color: 0xffffff,
        intensity: 0.5,
      }
    },
    background: {
      color: isDark ? 0x333333 : 0xdddddd,
    }
  }

  clock = new THREE.Clock();
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas
  });
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 5;

  scene.add(camera);

  renderer.setSize(window.innerWidth, window.innerHeight);

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  const backgroundColor = new THREE.Color(config.background.color);
  scene.background = backgroundColor;

  const ambientLight = new THREE.AmbientLight(config.light.ambientLight.color, config.light.ambientLight.intensity);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(config.light.directionalLight.color, config.light.directionalLight.intensity);
  directionalLight.position.set(-1, 0, 1);
  scene.add(directionalLight)

  const texture = new THREE.TextureLoader().load('/smoke.png');
  const material = new THREE.MeshLambertMaterial({
    color: config.material.color,
    depthWrite: false,
    map: texture,
    transparent: true,
  });

  const geometry = new THREE.PlaneGeometry(8, 8);
  particles = [];
  const size = 5;

  for (let i = 0; i < 8; i++) {
    const particle = new THREE.Mesh(geometry, material);

    particle.position.set(
      (Math.random() - 0.5) * size,
      (Math.random() - 0.5) * size,
      (Math.random() - 0.5) * size,
    );
    particle.rotation.x = 1.16;
    particle.rotation.y = -0.12;
    particle.rotation.z = Math.random() * 2 * Math.PI;
    particle.material.opacity = 0.4;

    particles.push(particle);
    scene.add(particle);
  }

  renderer.setAnimationLoop(update);
}

function update() {
  const delta = clock.getDelta();

  if (particles) {
    particles.forEach(particle => {
      const zRotation = particle.rotation.z;
      particle.lookAt(camera.position);
      particle.rotation.z = zRotation + delta * 0.16;
    });
  }

  renderer.render(scene, camera);
}
