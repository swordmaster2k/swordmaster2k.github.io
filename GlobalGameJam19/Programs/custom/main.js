// HACK for bug.
rpgwizard.firstScene = false;

console.log("run");

const spriteId = "owner";
const global = "owner.moving";

rpgcode.setCharacterStance("", "JUMP_EAST");
rpgcode.setSpriteStance(spriteId, "SIT_UP");

jumpOut();

function jumpOut() {
   rpgcode.delay(3000, function() {
      rpgcode.animateCharacter("", "JUMP_EAST", situp);
   }, false);
}

function situp() {
   rpgcode.animateSprite(spriteId, "SIT_UP", function() {
      rpgcode.animateSprite(spriteId, "IDLE", function() {
         rpgcode.animateSprite(spriteId, "IDLE", function() {
            const loc = rpgcode.getSpriteLocation("p0", false, false);
            rpgcode.setSpriteLocation(spriteId, loc.x, loc.y, loc.layer + 1, false);
            rpgcode.setGlobal(global, true);
            rpgcode.endProgram();
         });
      });
   });
}