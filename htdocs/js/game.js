/**
	Responsible for pulling everything together and the core game logic.
*/

/// Storage for settings
var config = {
    character_height: 180,
    characer_width: 60
};

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

	// Add and manipulate meshes in the scene
	/*var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
	sphere.position = new BABYLON.Vector3(0, 1, 0); // Sit on ground

	var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6, updatable: false, subdivisions: 4 }, scene);*/

    BABYLON.SceneLoader.ImportMesh(null, "/assets/models/", "GameJamRooms.obj", scene, function (meshes, particleSystems, skeletons) {
        meshes[0].checkCollisions = true;
    });

        BABYLON.SceneLoader.ImportMesh("", "/assets/models/", "Knife.obj", scene, function(newMeshes) {
            var root = new BABYLON.Mesh('Name', scene);
            newMeshes[0].parent = root;
            

            newMeshes[0].enablePointerMoveEvents = true;
          
            root.actionManager = new BABYLON.ActionManager(scene);
            root.actionManager.isRecursive = true;

            root.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                { trigger: BABYLON.ActionManager.OnPointerOverTrigger },
                function() {
                    alert('Mouse over!');
                }));
        });
        
    var radio_music = new BABYLON.Sound('radio_music', '/assets/music/Lobo_Loco_-_02_-_Traveling_to_Lousiana_-_Soft_Delay_ID_1174.mp3', scene, function () {
    }, { loop: false, autoplay: false });

    // Once we have a radio
    //radio_music.attachToMesh(radio);
    //radio_music.play();

    // Play a footsteps sound while walking and stop 
    var footstep_sound = new BABYLON.Sound('footsteps', '/assets/sfx/full steps stereo.ogg', scene, function () { }, { loop: true, autoplay: false });
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
}

document.addEventListener("DOMContentLoaded", main);