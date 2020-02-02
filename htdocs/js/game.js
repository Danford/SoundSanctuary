/**
	Responsible for pulling everything together and the core game logic.
*/

/// Storage for settings
var config = {
    // Height of the character in units
    character_height: 180,

    // Width of the character in units
    characer_width: 60,

    // List of objects to load and place in the scene
    scene_objects: [
        {
            file: 'televisionModern.obj',
            position: new BABYLON.Vector3(580, 80, 230),
            scale: new BABYLON.Vector3(250.0, 250.0, 250.0),
            rotation: new BABYLON.Vector3(0.0, 20.4, 0.0),
            settings: {
                interactable: true,
                interaction_callback: function () {
                alert('The stations all went off air at the same time.');
                }
            }
        },
        {
            file : 'trashcan.obj',
            position: new BABYLON.Vector3(-150, 0, 120),
            scale: new BABYLON.Vector3(200.0, 200.0, 200.0),
            rotation: new BABYLON.Vector3.Zero(),
            settings: {}
        },
        {
            file: 'kitchenStoveElectric.obj',
            position: new BABYLON.Vector3(-290, 0, 520),
            scale: new BABYLON.Vector3(280.0, 260.0, 260.0),
            rotation: new BABYLON.Vector3.Zero(),
            settings: {}
        },
        {
            file: 'kitchenFridgeLarge.obj',
            position: new BABYLON.Vector3(-540, 0, 100),
            scale: new BABYLON.Vector3(260.0, 260.0, 260.0),
            rotation: new BABYLON.Vector3(0.0, -20.4, 0.0),
            settings: {}
        },
        {
            file: 'kitchenCoffeeMachine.obj',
            position: new BABYLON.Vector3(-570, 109, 230),
            scale: new BABYLON.Vector3(250.0, 250.0, 250.0),
            rotation: new BABYLON.Vector3(0.0, -20.4, 0.0),
            settings: {}
        },
        {
            file: 'pottedPlant.obj',
            position: new BABYLON.Vector3(440, 0, 480),
            scale: new BABYLON.Vector3(250.0, 250.0, 250.0),
            rotation: new BABYLON.Vector3.Zero(),
            settings: {}
        },
        {
            file: 'lampRoundFloor.obj',
            position: new BABYLON.Vector3(20, 0, 440),
            scale: new BABYLON.Vector3(250.0, 250.0, 250.0),
            rotation: new BABYLON.Vector3.Zero(),
            settings: {}
        },
        {
            file: 'stoolBarSquare.obj',
            position: new BABYLON.Vector3(-50, 0, 380),
            scale: new BABYLON.Vector3(200.0, 200.0, 200.0),
            rotation: new BABYLON.Vector3.Zero(),
            settings: {}
        },
        {
            file: 'stoolBarSquare.obj',
            position: new BABYLON.Vector3(-95, 0, 300),
            scale: new BABYLON.Vector3(200.0, 200.0, 200.0),
            rotation: new BABYLON.Vector3(0, 2.0, 0),
            settings: {}
        },
        {
            file: 'hoodModern.obj',
            position: new BABYLON.Vector3(-280, 220, 580),
            scale: new BABYLON.Vector3(280.0, 260.0, 260.0),
            rotation: new BABYLON.Vector3.Zero(),
            settings: {}
        },
        {
            file: 'rugDoormat.obj',
            position: new BABYLON.Vector3(380, 0, -410),
            scale: new BABYLON.Vector3(200.0, 200.0, 200.0),
            rotation: new BABYLON.Vector3(0, 20.4, 0),
            settings: {}
        },
        {
            file: 'knifeBlock.obj',
            position: new BABYLON.Vector3(-480, 105, 610),
            scale: new BABYLON.Vector3(80.0, 80.0, 80.0),
            rotation: new BABYLON.Vector3(0.0, -20.4, 0.0),
            settings: {}
        },
        {
            file: 'computerScreen.obj',
            position: new BABYLON.Vector3(-350, 97, -740),
            scale: new BABYLON.Vector3(200.0, 200.0, 200.0),
            rotation: new BABYLON.Vector3.Zero(),
            settings: {}
        },
        {
            file: 'computerMouse.obj',
            position: new BABYLON.Vector3(-360, 97, -760),
            scale: new BABYLON.Vector3(200.0, 200.0, 200.0),
            rotation: new BABYLON.Vector3.Zero(),
            settings: {}
        },
        {
            file: 'computerKeyboard.obj',
            position: new BABYLON.Vector3(-370, 97, -770),
            scale: new BABYLON.Vector3(200.0, 200.0, 200.0),
            rotation: new BABYLON.Vector3.Zero(),
            settings: {}
        },
        {
            file: 'chairDesk.obj',
            position: new BABYLON.Vector3(-370, 0, -820),
            scale: new BABYLON.Vector3(200.0, 200.0, 200.0),
            rotation: new BABYLON.Vector3(0.0, -20.4, 0.0),
            settings: {}
        },
        {
            file: 'lampSquareFloor.obj',
            position: new BABYLON.Vector3(-80, 0, -1100),
            scale: new BABYLON.Vector3(200.0, 200.0, 200.0),
            rotation: new BABYLON.Vector3.Zero(),
            settings: {}
        },
        {
            file: 'NormalCar1.obj',
            position: new BABYLON.Vector3(490, 0, -1220),
            scale: new BABYLON.Vector3(135.0, 135.0, 135.0),
            rotation: new BABYLON.Vector3(0, -20.4, 0),
            settings: {
                interactable: true,
                interaction_callback: function () {
                    alert('I ran out of gas a while back.');
                }
            }
        },
        { // Alec model
            file: 'Knife.obj',
            position: new BABYLON.Vector3.Zero(), // Set to zero since it automatically positions itself
            scale: new BABYLON.Vector3(1, 1, 1),  // Set to 1s to use native scale
            rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
            settings: {
                nudge: new BABYLON.Vector3(-20, -5, 5), // Adjust position by a small amount
                interactable: true,
                interaction_callback: function () {
                    // This gets called when this instance gets clicked on.
                    alert('Stab all the things');
                }
            }
        },
        {
            file: 'amp.obj',
            position: new BABYLON.Vector3(0, 0, 100), // Set to zero since it automatically positions itself
            scale: new BABYLON.Vector3(0.1, 0.1, 0.1),  // Set to 1s to use native scale
            rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
            settings: {
                interactable: true,
                interaction_callback: function () {
                    // This gets called when this instance gets clicked on.
                    alert('Amped up');
                }
            }
        },
        {
            file: 'battery.obj',
            position: new BABYLON.Vector3(0, 0, 200), // Set to zero since it automatically positions itself
            scale: new BABYLON.Vector3(0.5, 0.5, 0.5),  // Set to 1s to use native scale
            rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
            settings: {
                interactable: true,
                interaction_callback: function () {
                // This gets called when this instance gets clicked on.
                alert('Power up');
                }
            }
        },
        { // Alec model
            file: 'BrokenRadio.obj',
            position: new BABYLON.Vector3.Zero(), // Set to zero since it automatically positions itself
            scale: new BABYLON.Vector3(1, 1, 1),  // Set to 1s to use native scale
            rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
            settings: {
                interactable: true,
                interaction_callback: function () {
                // This gets called when this instance gets clicked on.
                alert('Dancing is forbidden');
                }
            }
        },
        { // Alec model
            file: 'Ruler.obj',
            position: new BABYLON.Vector3.Zero(), // Set to zero since it automatically positions itself
            scale: new BABYLON.Vector3(1, 1, 1),  // Set to 1s to use native scale
            rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
            settings: {
                interactable: true,
                interaction_callback: function () {
                // This gets called when this instance gets clicked on.
                alert('What measures up?');
                }
            }
        },
        { // Alec model
            file: 'Speaker.obj',
            position: new BABYLON.Vector3.Zero(), // Set to zero since it automatically positions itself
            scale: new BABYLON.Vector3(1, 1, 1),  // Set to 1s to use native scale
            rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
            settings: {
                nudge: new BABYLON.Vector3(0, 0, -20),
                interactable: true,
                interaction_callback: function () {
                // This gets called when this instance gets clicked on.
                alert('Loud noises!');
                }
            }
        },
        { // Alec model
            file: 'Tape.obj',
            position: new BABYLON.Vector3.Zero(), // Set to zero since it automatically positions itself
            scale: new BABYLON.Vector3(1, 1, 1),  // Set to 1s to use native scale
            rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
            settings: {
                interactable: true,
                interaction_callback: function () {
                // This gets called when this instance gets clicked on.
                alert('If it moves and it\'s not supposed to');
                }
            }
        },
        { // Alec model
            file: 'GarageDoor.obj',
            position: new BABYLON.Vector3.Zero(), // Set to zero since it automatically positions itself
            scale: new BABYLON.Vector3(1, 1, 1),  // Set to 1s to use native scale
            rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
            settings: {}
        },
         { // Alec model
             file: 'ConstrutionTable.obj',
             position: new BABYLON.Vector3.Zero(), // Set to zero since it automatically positions itself
             scale: new BABYLON.Vector3(1, 1, 1),  // Set to 1s to use native scale
             rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
             settings: {}
         },
         { // Alec model
             file: 'Smoke_D_Resize.obj',
             position: new BABYLON.Vector3.Zero(), // Set to zero since it automatically positions itself
             scale: new BABYLON.Vector3(1, 1, 1),  // Set to 1s to use native scale
             rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
             settings: {}
         },
         {
             file: '33pfCapacitor.obj',
             position: new BABYLON.Vector3(0, 0, 350), // Set to zero since it automatically positions itself
             scale: new BABYLON.Vector3(0.01, 0.01, 0.01),  // Set to 1s to use native scale
             rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
             settings: {}
         },
         {
             file: 'breadboard.obj',
             position: new BABYLON.Vector3(-150, 105, 400), // Set to zero since it automatically positions itself
             scale: new BABYLON.Vector3(0.1, 0.1, 0.1),  // Set to 1s to use native scale
             rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
             settings: {}
         },
         { // Alec model
             file: 'GuitarPedal.obj',
             position: new BABYLON.Vector3.Zero(), // Set to zero since it automatically positions itself
             scale: new BABYLON.Vector3(1, 1, 1),  // Set to 1s to use native scale
             rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
             settings: {}
         },
         {
             file: 'OP_Amp.obj',
             position: new BABYLON.Vector3(0, 0, 400), // Set to zero since it automatically positions itself
             scale: new BABYLON.Vector3(2, 2, 2),  // Set to 1s to use native scale
             rotation: new BABYLON.Vector3.Zero(), // Set to zero to not apply any rotation
             settings: {}
         },

    ]
};

/// Prevent multiple action managers from being registered
var register_action_manager_once = null;

/**
    If there's an interactable then register the handler to pick it up.
    @param Babylon.Scene scene The scene that we'll be monitoring.
    @return Babylon.Mesh The root of the scene.
*/
function registerActionManager(scene) {
    if (register_action_manager_once) {
        return register_action_manager_once;
    }

    var root = new BABYLON.Mesh('Name', scene);
    root.actionManager = new BABYLON.ActionManager(scene);
    root.actionManager.isRecursive = true;

    root.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
        { trigger: BABYLON.ActionManager.OnPickTrigger },
        function (event) {
            for (var i = 0; i < config.scene_objects.length; i++) {
                // If the config is interactable and has the id of the source registered then try to execute the callback
                if (config.scene_objects[i].settings.interactable && config.scene_objects[i].settings.interactable_ids.indexOf(event.source.id) != -1) {
                    if (config.scene_objects[i].settings.interaction_callback) {
                        config.scene_objects[i].settings.interaction_callback.call(event.source);
                        return;
                    }
                    else {
                        // Let the developer's know they're missing an interaction_callback
                        console.log('Found but there was no callback defined for the interactable');
                        return;
                    }
                }
            }
        }));

    register_action_manager_once = root;

    return root;
}

/**
    Walk through a list of scene objects and init each one.
    @param Babylon.Scene scene The scene to add the model to.
    @param object Config The configuration for this instance of the model.
*/
function createSceneObject(scene, objectConfig) {
    BABYLON.SceneLoader.ImportMesh(null, "assets/models/", objectConfig.file, scene, function (meshes, particleSystems, skeletons) {

        for (var i = 0; i < meshes.length; i++) {
            if (!objectConfig.settings.noCollisionChecking){
                meshes[i].checkCollisions = true;
            }

            meshes[i].rotation = objectConfig.rotation;
            meshes[i].position = objectConfig.position;
            meshes[i].scaling = objectConfig.scale;

            if (objectConfig.settings.nudge){
                meshes[i].position.x += objectConfig.settings.nudge.x;
                meshes[i].position.y += objectConfig.settings.nudge.y;
                meshes[i].position.z += objectConfig.settings.nudge.z;
            }

            if (objectConfig.settings.interactable) {
                var root = registerActionManager(scene);
                meshes[i].parent = root;
                meshes[i].enablePointerMoveEvents = true;

                // Create a list of mesh ids that could be clicked on to trigger the callback.
                if (typeof objectConfig.settings.interactable_ids != 'object') {
                    objectConfig.settings.interactable_ids = [];
                }

                meshes[i].id = objectConfig.file + '|' + meshes[i].id;
                objectConfig.settings.interactable_ids.push(meshes[i].id);
                console.log('registered ', meshes[i].id);
            }
        }
    });
}

 /**
	Init the scene and assets for render.
	@param HTMLElement canvas The <canvas> element that we should render to.
	@param Babylon.Engine engine The BabylonJS engine instance to add the scene too.
	
	@return Babylon.Scene The newly created and populated scene.
 */
function createScene(canvas, engine) {
	// Create the scene space
	var scene = new BABYLON.Scene(engine);
	canvas.style.width = '100%';
	canvas.style.height = '100%';
	scene.gravity = new BABYLON.Vector3(0, -9.8, 0);
	scene.collisionsEnabled = true;

	// Add a camera to the scene and attach it to the canvas
	var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, config.character_height + 1, 0), scene);

	// Targets the camera to a particular position. In this case the scene origin
	camera.setTarget(new BABYLON.Vector3(1, config.character_height + 1, 0));
	camera.checkCollisions = true;
	camera.speed = 10.0;
	camera.applyGravity = true;
	camera.ellipsoid = new BABYLON.Vector3(config.characer_width / 2, config.character_height / 2, config.characer_width / 2);

	// Attach the camera to the canvas
	camera.attachControl(canvas, true);

	// Add lights to the scene
	var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
	var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(1, 10, 1), scene);
	var light3 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
	var light4 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 30, -10), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
	var light5 = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);

    // Load area geometry
    BABYLON.SceneLoader.ImportMesh(null, "assets/models/", "GJRoom3.0.obj", scene, function (meshes, particleSystems, skeletons) {
        for (var i = 0; i < meshes.length; i++) {
            meshes[i].checkCollisions = true;
        }
    });

    // Load scene objects
    if (config.scene_objects.length) {
        for (var i = 0; i < config.scene_objects.length; i++) {
            createSceneObject(scene, config.scene_objects[i]);
        }
    }

    // Load interactive objects
    /*BABYLON.SceneLoader.ImportMesh("", "assets/models/", "Knife.obj", scene, function(newMeshes) {
        var root = new BABYLON.Mesh('Name', scene);

        for (var i = 0; i < newMeshes.length; i++) {
            newMeshes[i].parent = root;
            newMeshes[i].enablePointerMoveEvents = true;

            // Shift slightly to not conflict with stove
            newMeshes[i].position.y += 1;
            newMeshes[i].position.x -= 25;
            newMeshes[i].position.z += 15;
        }
          
        root.actionManager = new BABYLON.ActionManager(scene);
        root.actionManager.isRecursive = true;

        root.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            { trigger: BABYLON.ActionManager.OnPickTrigger },
            function() {
                alert('Mouse over!');
            }));
    });*/
        
    var radio_music = new BABYLON.Sound('radio_music', 'assets/music/Lobo_Loco_-_02_-_Traveling_to_Lousiana_-_Soft_Delay_ID_1174.mp3', scene, function () {
    }, { loop: false, autoplay: false });

    // Once we have a radio
    //radio_music.attachToMesh(radio);
    //radio_music.play();

    // Play a footsteps sound while walking and stop 
    var footstep_sound = new BABYLON.Sound('footsteps', 'assets/sfx/full steps stereo.ogg', scene, function () { }, { loop: true, autoplay: false });
    var footstep_checker = null;
    var footstep_last_position = Array(camera.position.x, camera.position.z);
    camera.onViewMatrixChangedObservable.add(function () {
        if (!footstep_sound.isPlaying) {
            // If we just rotated the camera, don't bother to play footsteps
            if (footstep_last_position[0] == camera.position.x && footstep_last_position[1] == camera.position.z) {
                return;
            }

            footstep_sound.play();
            footstep_checker = setInterval(function () {
                if (footstep_last_position[0] == camera.position.x && footstep_last_position[1] == camera.position.z) {
                    footstep_sound.pause();
                    clearInterval(footstep_checker);
                    footstep_checker = null;
                }
                else {
                    footstep_last_position[0] = camera.position.x;
                    footstep_last_position[1] = camera.position.z;
                }
            }, 20);
        }
    });

	return scene;
};


/**
    main() Basically.
*/
function main() {
    var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
    var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

    var loadingScreenDiv = document.getElementById("loadingScreen");
    var loadingScreen = new function customLoadingScreen() {
        console.log("customLoadingScreen creation");
    };
    loadingScreen.displayLoadingUI = function () {
        console.log("customLoadingScreen loading");
        loadingScreenDiv.innerHTML = "Loading...";
    };

    loadingScreen.hideLoadingUI = function () {
        console.log("customLoadingScreen loaded");
        loadingScreenDiv.style.display = "none";
    };

    engine.loadingScreen = loadingScreen;

    engine.displayLoadingUI();

    var scene = createScene(canvas, engine);

    window.addEventListener("resize", function () {
        engine.resize();
    });

    engine.hideLoadingUI();

    engine.runRenderLoop(function () {
        scene.render();
    });

    engine.resize();
}

document.addEventListener("DOMContentLoaded", main);
