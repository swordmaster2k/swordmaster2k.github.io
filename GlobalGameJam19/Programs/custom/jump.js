rpgcode.setGlobal("jumping", true);

const characterId = "guy.character";
const direction = rpgcode.getCharacterDirection();
if (direction === "WEST" || direction === "NORTH") {
   rpgcode.animateCharacter(characterId, "JUMP_WEST", finish);
} else {
   rpgcode.animateCharacter(characterId, "JUMP_EAST", finish);
}

function finish() {
   rpgcode.setGlobal("jumping", false);
   rpgcode.resetActivationChecks(characterId);
   rpgcode.endProgram();
}
