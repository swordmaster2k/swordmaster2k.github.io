// HACK for bug.
rpgwizard.firstScene = false;

var assets = {
//  "programs": [
//      // Default systems.
//      "defaults/gui.js",
//      "defaults/battle.js",
//      "defaults/dialog.js",
//      "defaults/titleScreen.js"
//  ],
  "images": [
      "ui/powered_by.png"
  ]
}

// UI related
var viewport = rpgcode.getViewport();
var scale = rpgcode.getScale();
var alpha = 0.1;

// Movement
var characterSpeed = 1.5;

// Character
var characterId = "guy";

// poweredByCanvas
var poweredByImageId = "ui/powered_by.png";
var poweredByCanvas = "poweredBy";
var poweredByImage = null;

// Game state
rpgcode.setGlobal("interacting", false);
rpgcode.setGlobal("jumping", false);

// Object state
rpgcode.setGlobal("owner.moving", false);


// Enemy state



rpgcode.loadAssets(assets, function() {
   console.log("loadAssets");
   setup();
//   fadeIn();
   start();
});

function setup() {
   // Character setup
   rpgcode.setCharacterSpeed(characterId, characterSpeed);
   
   // Watermark setup
   poweredByImage = rpgcode.getImage(poweredByImageId);
   poweredByImage.scaledWidth = poweredByImage.width * scale;
   poweredByImage.scaledHeight = poweredByImage.height * scale;
   var x = Math.floor(viewport.width / 2) - Math.floor(poweredByImage.scaledWidth / 2);
   var y = Math.floor(viewport.height / 2) - Math.floor(poweredByImage.scaledHeight / 2);
   rpgcode.createCanvas(poweredByImage.scaledWidth, poweredByImage.scaledHeight, poweredByCanvas);
   rpgcode.setCanvasPosition(x, y, poweredByCanvas);
}

function start() {
   console.log("start");
   rpgcode.sendToBoard("main.board", 11, 3, 1);
   rpgcode.endProgram();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Watermark Code
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function fadeIn() {
   drawLogo();
   
   alpha += 0.1
   if (alpha < 1.1) {
      rpgcode.delay(100, fadeIn);
   } 
   else {
      alpha -= 0.1
      rpgcode.delay(1500, fadeOut);
   }
}

function fadeOut() {
   drawLogo();
   
   alpha -= 0.1
   if (alpha > 0) {
      rpgcode.delay(100, fadeOut);
   } else {
      rpgcode.delay(1000, start);
   }
}

function drawLogo() {
   rpgcode.clearCanvas(poweredByCanvas);
   rpgcode.setGlobalAlpha(alpha);
   rpgcode.setImage(poweredByImageId, 0, 0, poweredByImage.scaledWidth, poweredByImage.scaledHeight, poweredByCanvas);
   rpgcode.renderNow(poweredByCanvas);
}
