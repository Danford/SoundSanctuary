/**
	Responsible for pulling everything together and the core game logic.
*/

/// Storage for settings
var config = {
    character_height: 180,
    characer_width: 60
};

/**
    Utility function to create a BABYLON.Texture.
    @param string url The url of the texture to retrieve.
    @param Babylon.Scene scene The scene to create the texture on.
    @param function success A callback that should receive the texture after it's ready.
    @param function error A callback that should be used if there's an error getting the texture image.
*/
function createTexture(url, scene, success, error) {
    request(url, function (data) {
        success.call(this, BABYLON.Texture.LoadFromDataString('diffuse', data, scene));
    }, error, 'blob');
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
	var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

	// Add and manipulate meshes in the scene
	/*var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
	sphere.position = new BABYLON.Vector3(0, 1, 0); // Sit on ground

	var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6, updatable: false, subdivisions: 4 }, scene);*/

    BABYLON.SceneLoader.ImportMesh(null, "/assets/models/", "GameJamRooms.obj", scene, function (meshes, particleSystems, skeletons) {
        meshes[0].checkCollisions = true;
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
