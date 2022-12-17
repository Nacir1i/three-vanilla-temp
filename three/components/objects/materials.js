import { PointsMaterial } from "three";

const createMaterial = () => {
  // const textMaterial = new MeshStandardMaterial({
  //   color: "orange",
  // });
  // const sideMaterial = new MeshStandardMaterial({
  //   color: "red",
  // });
  const piontsMaterial = new PointsMaterial({ size: 0.5 });

  return { piontsMaterial };
};

export default createMaterial;
