import { Mesh } from "three";
import createGeometries from "./geometries";
import createMaterials from "./materials";

const createMeshs = async (message) => {
  const { textGeometry } = await createGeometries(message);
  const { textMaterial, sideMaterial } = createMaterials();
  const text = new Mesh(textGeometry, [textMaterial, sideMaterial]);
  text.position.set(-5.5, 6, 0);

  return { text };
};

export default createMeshs;
