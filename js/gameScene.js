let createGameScene = function(canvas, engine) {
    debugger;
  // Create scene
  let scene = new BABYLON.Scene(engine);

  // Create camera
  let camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);
  camera.attachControl(canvas, true);
  camera.setTarget(BABYLON.Vector3.Zero());

  // Create lights
  let light = new BABYLON.HemisphericLight("myLight", new BABYLON.Vector3(1, 1, 0), scene);

  return scene;
};

export {
  createGameScene
};