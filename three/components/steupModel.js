import { AnimationMixer } from "three";

const setupModel = (data) => {
  const model = data.scene;
  const clip = data.animations[10];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);

  action.play();
  model.tick = (delta) => {
    mixer.update(delta);
  };

  return model;
};

export default setupModel;
