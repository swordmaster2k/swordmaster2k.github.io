const characterId = "guy.character";
if (rpgcode.getSprite("item_2")) {
   rpgcode.setGlobal("interacting", true);
   const direction = rpgcode.getCharacterDirection();
   if (direction === "WEST" || direction === "NORTH") {
      rpgcode.animateCharacter(characterId, "INTERACT_WEST", finish);
   } else {
      rpgcode.animateCharacter(characterId, "INTERACT_EAST", finish);
   }
} else {
   rpgcode.resetActivationChecks(characterId);
   rpgcode.endProgram();
}

function finish() {
   try {
      rpgcode.destroySprite("item_2");
      var i = rpgcode.getGlobal("items");
      if (i < 5) {
         rpgcode.setGlobal("items", ++i);
         rpgcode.setGlobal("interacting", false);
         rpgwizard.craftyBoard.board.layers[2].images[1].src = "ui/counter_" + (i+1) + ".png";
      }
      
      rpgcode.resetActivationChecks(characterId);
      rpgcode.endProgram();
   } catch (ex) {
      console.log(ex);

      rpgcode.resetActivationChecks(characterId);
      rpgcode.endProgram();
   }
}
