rpgcode.setGlobal("interacting", true);

const characterId = "guy.character";
const direction = rpgcode.getCharacterDirection();
if (direction === "WEST" || direction === "NORTH") {
   rpgcode.animateCharacter(characterId, "INTERACT_WEST", finish);
} else {
   rpgcode.animateCharacter(characterId, "INTERACT_EAST", finish);
}

function finish() {
   try {
      rpgcode.destroySprite("item_3");
      var i = rpgcode.getGlobal("items");
      rpgcode.setGlobal("items", ++i);
      rpgcode.setGlobal("interacting", false);
      
      rpgcode.resetActivationChecks(characterId);
      rpgcode.endProgram();
   } catch (ex) {
      console.log(ex);

      rpgcode.resetActivationChecks(characterId);
      rpgcode.endProgram();
   }
}
