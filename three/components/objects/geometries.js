import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import jsonFont from "../../../public/assets/fonts/GodOfWar.json";

const createGeometries = async (message) => {
  const laoder = new FontLoader();
  const font = laoder.parse(jsonFont);
  const textGeometry = new TextGeometry(message, {
    font: font,
    size: 1,
    height: 0.25,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: 0.2,
    bevelSize: 0.05,
  });

  return { textGeometry };
};

export default createGeometries;
