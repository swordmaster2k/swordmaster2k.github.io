// Game assets used in this program
var assets = {
  "images": ["ui/game_over.png"]
};

// Canvas IDs
var gameOverCanvas = "gameOverCanvas";

const scale = rpgcode.getScale();

// Load up the assets we need
rpgcode.loadAssets(assets, function() {
  // Assets are ready show game over
  rpgcode.createCanvas(800 * scale, 600 * scale, gameOverCanvas);
  rpgcode.setImage("ui/game_over.png", 0, 0, 800 * scale, 600 * scale, gameOverCanvas);
  rpgcode.renderNow(gameOverCanvas);

  rpgcode.delay(5000, function() {
    rpgcode.restart();
  });
}); 