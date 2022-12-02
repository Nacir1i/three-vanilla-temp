import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const createControls = (camre, domElemetn) => {
  const control = new OrbitControls(camre, domElemetn);
  control.enableDamping = false;
  control.enableZoom = false;
  control.enablePan = false;
  control.tick = () => {
    control.update();
  };

  return control;
};

export default createControls;
