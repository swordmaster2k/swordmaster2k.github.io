rpgcode.setGlobal("interacting", true);

const characterId = "guy.character";
const direction = rpgcode.getCharacterDirection();
if (direction === "WEST" || direction === "NORTH") {
   rpgcode.animateCharacter(characterId, "INTERACT_WEST", finish);
} else {
   rpgcode.animateCharacter(characterId, "INTERACT_EAST", finish);
}

function finish() {
   rpgcode.destroySprite("item_1");
   var i = rpgcode.getGlobal("items");
   rpgcode.setGlobal("items", ++i);
   rpgcode.setGlobal("interacting", false);
   rpgcode.resetActivationChecks(characterId);
   rpgcode.endProgram();
}
