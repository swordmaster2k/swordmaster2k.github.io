// We are interacting with something.
rpgcode.setGlobal("interacting", true);

// Play the correct animation based on the direction of the character.
const characterId = "guy.character";
const direction = rpgcode.getCharacterDirection();
if (direction === "WEST" || direction === "NORTH") {
   rpgcode.animateCharacter(characterId, "INTERACT_WEST", finish);
} else {
   rpgcode.animateCharacter(characterId, "INTERACT_EAST", finish);
}

/*
 * Called when the interaction animation is finished. 
 */
function finish() {
   // Give the character the item, destroying it.
   rpgcode.destroySprite("item_1");
   var i = rpgcode.getGlobal("items");
   rpgcode.setGlobal("items", ++i);
   rpgcode.setGlobal("interacting", false);
   rpgcode.resetActivationChecks(characterId);
   rpgcode.endProgram();
}
