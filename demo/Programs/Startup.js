// HACK for bug.
rpgwizard.firstScene = false;

if (rpgcode.getGlobal("started")) {
   rpgcode.endProgram();
} else {
   rpgcode.setGlobal("started", true);
   
   var assets = {
     "images": [
         "ui/powered_by.png",
         "speech.png"
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
   rpgcode.setGlobal("items", 0);
   rpgcode.setGlobal("gameOver", false);
   
   // Object state
   rpgcode.setGlobal("owner.moving", false);
   
   rpgcode.loadAssets(assets, function() {
      console.log("loadAssets");
      setup();
      fadeIn();
//      start();
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
      rpgcode.destroyCanvas(poweredByCanvas);
      rpgcode.clearCanvas();
      rpgcode.setGlobalAlpha(1.0);
      rpgcode.endProgram("Title.js");
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

}