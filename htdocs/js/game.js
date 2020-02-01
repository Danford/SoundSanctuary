/**
	Responsible for pulling everything together and the core game logic.
*/

/// Storage for settings
var config = {
    character_height: 180
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

	// Add a camera to the scene and attach it to the canvas
	var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, config.character_height, 0), scene);

	// Targets the camera to a particular position. In this case the scene origin
	camera.setTarget(new BABYLON.Vector3(1, config.character_height, 0));

	// Attach the camera to the canvas
	camera.attachControl(canvas, true);

	// Add lights to the scene
	var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
	var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

	// Add and manipulate meshes in the scene
	/*var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
	sphere.position = new BABYLON.Vector3(0, 1, 0); // Sit on ground

	var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6, updatable: false, subdivisions: 4 }, scene);*/

	BABYLON.SceneLoader.Append("/assets/models/", "GameJamRooms.obj", scene, function (scene) {
	    console.log('Handle room loading');
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
