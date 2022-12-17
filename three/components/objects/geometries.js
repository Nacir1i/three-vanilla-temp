// import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
// import jsonFont from "../../../public/assets/fonts/GodOfWar.json";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import {
  BufferGeometry,
  BufferAttribute,
  ShapeGeometry,
  MeshBasicMaterial,
} from "three";

const particalesCount = 5000;
const positiontArray = new Float32Array(particalesCount * 3);

const createGeometries = async (message) => {
  // const laoder = new FontLoader();
  // const font = laoder.parse(jsonFont);
  // const textGeometry = new TextGeometry(message, {
  //   font: font,
  //   size: 1,
  //   height: 0.25,
  //   curveSegments: 6,
  //   bevelEnabled: true,
  //   bevelThickness: 0.2,
  //   bevelSize: 0.05,
  // });
  //---------------------------------------------------
  const particaleGeometry = new BufferGeometry();

  for (let i = 0; i < positiontArray.length; i++) {
    positiontArray[i] = (Math.random() - 0.5) * 500;
  }

  particaleGeometry.setAttribute(
    "position",
    new BufferAttribute(positiontArray, 3)
  );

  return { particaleGeometry };
};

export default createGeometries;
