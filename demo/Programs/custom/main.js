// HACK for bug.
rpgwizard.firstScene = false;
if (rpgcode.getGlobal("run")) {
   rpgcode.endProgram();
} else {
   rpgcode.setGlobal("run", true);

   console.log("run");

   const spriteId = "owner";
   const global = "owner.moving";
   
   rpgcode.setCharacterStance("", "JUMP_WEST");
   rpgcode.setSpriteStance(spriteId, "SIT_UP");
   
   jumpOut();
   
   function jumpOut() {
      rpgcode.animateCharacter("", "JUMP_WEST", function() {
         rpgcode.setCharacterStance(spriteId, "EAST");
         rpgcode.delay(500, function() {
            rpgcode.endProgram();
            situp();
         }, false);
      }); 
   }
   
   function situp() {
      rpgcode.animateSprite(spriteId, "SIT_UP", function() {
         rpgwizard.craftyBoard.board.layers[1].images.push({src: "speech.png", x: 503, y: 267, id: "0349182b-7b6e-43ef-ac8a-ea514a7d8a6e"});
         rpgcode.animateSprite(spriteId, "IDLE", function() {
            rpgcode.animateSprite(spriteId, "IDLE", function() {
               rpgwizard.craftyBoard.board.layers[1].images.pop();
               const loc = rpgcode.getSpriteLocation("p0", false, false);
               rpgcode.setSpriteLocation(spriteId, loc.x, loc.y, 1, false);
               rpgwizard.craftyBoard.board.sprites.owner.sprite.layer = 1 // HACK for bug
               rpgcode.setGlobal(global, true);
            });
         });
      });
   }
}

