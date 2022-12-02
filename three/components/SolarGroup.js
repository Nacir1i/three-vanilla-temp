import {
  Group,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
  MathUtils,
} from "three";

class solarGroup {
  constructor() {
    this.radiosToRotate = MathUtils.degToRad(20);
    this.group = new Group();
    this.textureLoader = new TextureLoader();

    this.starGeometrie = new SphereGeometry(0.25, 16, 16);
    this.starTexture = this.textureLoader.load(
      "/src/three/assets/lava/lavatile.jpg"
    );
    0.25, 16, 16;
    this.starMaterial = new MeshStandardMaterial({ color: "indigo" });
    this.star = new Mesh(this.starGeometrie, this.starMaterial);

    this.moonGeometrie = new SphereGeometry(0.25, 16, 16);
    this.moonTexture = this.textureLoader.load(
      "/src/three/assets/planets/moon.jpg"
    );
    this.moonMaterial = new MeshStandardMaterial({ map: this.moonTexture });
    this.moonPrototyp = new Mesh(this.moonGeometrie, this.moonMaterial);

    this.group.add(this.star);
    this.group.scale.multiplyScalar(2);

    //cloning moon mesh :
    for (let i = 0; i < 1; i += 0.005) {
      const clone = this.star.clone();

      clone.position.x = Math.sin(2 * Math.PI * i);
      clone.position.y = Math.cos(2 * Math.PI * i);
      clone.position.z = -i * 5;
      clone.scale.multiplyScalar(i + 0.01);

      this.group.add(clone);
    }
  }

  tick(delta) {
    this.group.rotation.z += delta * this.radiosToRotate;
  }
}

export default solarGroup;
