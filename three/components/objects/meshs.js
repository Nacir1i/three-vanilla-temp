import { Points } from "three";
import createGeometries from "./geometries";
import createMaterials from "./materials";

const createMeshs = async (message) => {
  // const { textGeometry } = await createGeometries(message);
  // const { textMaterial, sideMaterial } = createMaterials();
  // const text = new Mesh(textGeometry, [textMaterial, sideMaterial]);
  // text.position.set(-5.5, 6, 0);
  //-------------------------------------------------------------
  const { particaleGeometry } = await createGeometries();
  const { piontsMaterial } = createMaterials();

  const particales = new Points(particaleGeometry, piontsMaterial);

  return { particales };
};

export default createMeshs;
