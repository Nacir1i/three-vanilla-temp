import { WebGL1Renderer } from "three";

const createRenderer = () => {
  const render = new WebGL1Renderer({ antialias: true, alpha: true });
  render.physicallyCorrectLights = true;

  return render;
};

export default createRenderer;
