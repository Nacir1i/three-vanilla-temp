import { PerspectiveCamera } from "three";

const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 100;

const createCamera = () => {
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 10);

  return camera;
};

export default createCamera;
