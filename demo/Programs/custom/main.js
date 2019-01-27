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
         rpgcode.delay(1000, function() {
            situp();
         }, false);
      }); 
   }
   
   function situp() {
      rpgcode.animateSprite(spriteId, "SIT_UP", function() {
         rpgcode.animateSprite(spriteId, "IDLE", function() {
            rpgcode.animateSprite(spriteId, "IDLE", function() {
               const loc = rpgcode.getSpriteLocation("p0", false, false);
               rpgcode.setSpriteLocation(spriteId, loc.x, loc.y, 1, false);
               rpgwizard.craftyBoard.board.sprites.owner.sprite.layer = 1 // HACK for bug
               rpgcode.setGlobal(global, true);
               rpgcode.endProgram();
            });
         });
      });
   }
}

