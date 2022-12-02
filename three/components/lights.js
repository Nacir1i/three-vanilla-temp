import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
  const directLight = new DirectionalLight("white", 4);
  const ambLight = new HemisphereLight("white", "darkslategrey", 3);

  directLight.position.set(10, 10, 10);

  return { directLight, ambLight };
}

export default createLights;
