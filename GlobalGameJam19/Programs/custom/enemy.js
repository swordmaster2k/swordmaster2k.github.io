const spriteId = "owner";
const global = "owner.moving";

const moveDelay = 700;
const thinkTime = 2000;

const fastChance = 0.50;
const moveChance = 0.75;
const thinkChance = 0.75;

const fastModifier = 0.50;

if (rpgcode.getGlobal(global)) {
   rpgcode.setGlobal(global, false);
   rpgcode.setSpriteStance(spriteId, "WEST");
   moveToPoint(1);  
}

function doIdle(start, i) {
   rpgcode.animateSprite(spriteId, "IDLE", function() {
      const elapsed = Date.now() - start;
      if (elapsed >= thinkTime) {
         moveToPoint(++i);
      } else {
         doIdle(start, i);
      }
   });
}

function moveToPoint(i) {
   var p = "p";
   var goToPn = false;
   if (i > 7) {
      i = 1;
   } else if (i == 2 || i == 3 || i == 7) {
      goToPn = Math.random() >= moveChance;
   }

   if (i < 4 && !goToPn) {
       rpgcode.setSpriteStance(spriteId, "WEST");
   } else {
      rpgcode.setSpriteStance(spriteId, "EAST");
   }

   if (goToPn) {
      p += "n";
      if (i == 2 || i == 3) {
         i = 5;
      } else {
         i = 1;
      }
   } else {
      p += i;
   }

   var modifier = 1;
   if (Math.random() >= moveChance) {
      modifier = fastModifier;
   }
   
   const loc = rpgcode.getSpriteLocation(p, false, false);
   rpgcode.moveSpriteTo(spriteId, loc.x, loc.y, moveDelay * modifier, function() {
      if (Math.random() >= thinkChance) {
         doIdle(Date.now(), i);
      } else {
         moveToPoint(++i);
      }
   });
   
}