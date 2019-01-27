// Game assets used in this program
var assets = {
  "images": ["ui/title.png", "ui/controls.png"]
};

// Canvas IDs
var titleCanvas = "titleCanvas";

const scale = rpgcode.getScale();

// Load up the assets we need
rpgcode.loadAssets(assets, function() {
  // Assets are ready show game over
  rpgcode.createCanvas(800 * scale, 600 * scale, titleCanvas);
  rpgcode.setImage("ui/title.png", 0, 0, 800 * scale, 600 * scale, titleCanvas);
  rpgcode.renderNow(titleCanvas);

   rpgcode.delay(3000, function() {
      rpgcode.setImage("ui/controls.png", 0, 0, 800 * scale, 600 * scale, titleCanvas);
      rpgcode.renderNow(titleCanvas);
      rpgcode.delay(5000, function() {
         rpgcode.destroyCanvas(titleCanvas);
         rpgcode.sendToBoard("main.board", 11, 3.5, 1);
         rpgcode.endProgram();
      }); 
  });
}); 