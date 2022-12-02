import { Scene, Color, AxesHelper, GridHelper } from "three";

const createScene = () => {
  const scene = new Scene();
  const axesHelper = new AxesHelper(10);
  const gridHelper = new GridHelper(10);

  scene.background = new Color("skyblue");
  scene.add(axesHelper, gridHelper);

  return scene;
};

export default createScene;
