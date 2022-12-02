import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import setupModel from "./steupModel";

const loadRobot = async () => {
  const loader = new GLTFLoader();
  const robotData = await loader.loadAsync("assets/models/RobotExpressive.glb");
  const robot = setupModel(robotData);

  return robot;
};

export default loadRobot;
