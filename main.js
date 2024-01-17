var game = new Phaser.Game(960, 640, Phaser.AUTO, 'game', { preload: preload, create: create, update: update }, false, false);

//Preload is for loading fonts, textures, and sounds
function preload() {

  //This is the SciFi tower 3 level 2 pic, but it can be changed to fantasy tower 03L2 if there is levels using Fantasy 02L2, 02, 03L2
  game.load.image('tower', 'assets/towers/SciFiTower03L2.png');

}

//Create is for all the initial setup
function create() {

  //Scale the game to the device it's on
  game.scale.setUserScale(window.innerWidth/960, window.innerHeight/640);
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;

  game.add.sprite(100, 200, 'tower');

}

//Update has events that happen over and over in every frame
function update() {

}
