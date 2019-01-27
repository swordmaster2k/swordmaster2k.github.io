// Game assets used in this program
var assets = {
  "images": ["ui/win.png"]
};

// Canvas IDs
var winCanvas = "winCanvas";

const scale = rpgcode.getScale();

// Load up the assets we need
rpgcode.loadAssets(assets, function() {
  // Assets are ready show game over
  rpgcode.createCanvas(800 * scale, 600 * scale, winCanvas);
  rpgcode.setImage("ui/win.png", 0, 0, 800 * scale, 600 * scale, winCanvas);
  rpgcode.renderNow(winCanvas);

  rpgcode.delay(5000, function() {
    rpgcode.restart();
  });
}); 