import { MeshStandardMaterial } from "three";

const createMaterial = () => {
  const textMaterial = new MeshStandardMaterial({
    color: "orange",
  });
  const sideMaterial = new MeshStandardMaterial({
    color: "red",
  });

  return { textMaterial, sideMaterial };
};

export default createMaterial;
