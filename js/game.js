/**
	Responsible for pulling everything together and the core game logic.
	Version: 11:50PM AST 1/31/2020
*/

/// Configure our phaser instance
var config = {
	type : Phaser.AUTO,
	parent : 'game-container',
	width : window.innerWidth,
	height : window.innerHeight,
	scene : {
		preload : preload,
		create : create
	},
	pixelArt : true,
	audio : {
		disableWebAudio : true
	}
};

var game = new Phaser.Game(config);

/**
	Responsible for preloading assets.
*/
function preload(){
	this.load.setBaseURL('assets');
	
	this.load.image('title', 'images/title.png');
	
	//this.load.spritesheet(); // TODO, get assets
	
	//this.load.audioSprite(); // TODO, get sound effects
	
	this.load.audio('radio_song', 'music/Lobo_Loco_-_02_-_Traveling_to_Lousiana_-_Soft_Delay_ID_1174.mp3');
}

/**
	Responsible for creating the first scene.
*/
function create(){
	
}

