import createCamera from "./components/camera";
import createScene from "./components/scene";
import createRenderer from "./components/renderer";
import createLight from "./components/lights";
import createMeshs from "./components/objects/meshs";
import loadRobot from "./components/robot";
import Resizer from "./systems/Resizer";
import Loop from "./systems/Loop";
import creatControls from "./systems/controls";

class World {
  #scene;
  #camera;
  #renderer;
  #loop;
  #controls;
  #resizer;

  constructor(container) {
    this.#scene = createScene();
    this.#camera = createCamera();
    this.#renderer = createRenderer();

    this.#resizer = new Resizer(container, this.#camera, this.#renderer);
    this.#controls = creatControls(this.#camera, this.#renderer.domElement);

    container.appendChild(this.#renderer.domElement);
  }

  async initiate(message) {
    const { directLight, ambLight } = createLight();
    const { text } = await createMeshs(message);
    const robot = await loadRobot();

    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer, [
      this.#controls,
      robot,
    ]);
    this.#loop.start();

    this.#camera.position.y = 5;
    this.#controls.target.copy(robot.position);
    this.#scene.add(text, robot, directLight, ambLight);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export default World;
