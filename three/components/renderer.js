import { WebGL1Renderer } from "three";

const createRenderer = () => {
  const render = new WebGL1Renderer({ antialias: true });
  render.physicallyCorrectLights = true;

  return render;
};

export default createRenderer;
