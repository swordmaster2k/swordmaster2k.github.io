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
      rpgcode.destroySprite("item_5");
      var i = rpgcode.getGlobal("items");
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
