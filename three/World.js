import createCamera from "./components/camera";
import createScene from "./components/scene";
import createRenderer from "./components/renderer";
import createLight from "./components/lights";
import createMeshs from "./components/objects/meshs";
import loadRobot from "./components/robot";
import Resizer from "./systems/Resizer";
import Loop from "./systems/Loop";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import {
  Group,
  ShapeGeometry,
  Mesh,
  MeshBasicMaterial,
  DoubleSide,
} from "three";
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
    const loader = new SVGLoader();
    const test = new Group();
    loader.load(
      "../public/assets/svg/logo.svg",
      function (data) {
        const paths = data.paths;

        for (let i = 0; i < paths.length; i++) {
          const path = paths[i];

          const material = new MeshBasicMaterial();

          const shapes = SVGLoader.createShapes(path);

          for (let j = 0; j < shapes.length; j++) {
            const shape = shapes[j];
            const geometry = new ShapeGeometry(shape);
            const mesh = new Mesh(geometry, material);
            test.add(mesh);
          }
        }
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log(error);
        console.log("An error happened");
      }
    );

    const { directLight, ambLight } = createLight();
    const { particales } = await createMeshs(message);
    const robot = await loadRobot();

    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer, [
      this.#controls,
      robot,
    ]);
    this.#loop.start();

    this.#camera.position.y = 5;
    this.#controls.target.copy(robot.position);
    this.#scene.add(particales, robot, directLight, ambLight, test);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export default World;
