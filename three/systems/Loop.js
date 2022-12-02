import { Clock } from "three";

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer, objects) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.objects = objects;
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();
    for (const object of this.objects) {
      object.tick(delta);
    }
  }
}

export default Loop;
