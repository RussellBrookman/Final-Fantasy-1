// some future considerations::
// if dead fog = 0
// alert, would you like to play again? if yes shut restart app, if no just have them keep dancing
// set difficulty levels  

// instructions
alert("Press space bar to add more imps to fight.\n" +
  "More imps can be added at any time.\n" +
  "Hardest challange: Maximize the number of imps in the beginning of the game.\n" +
  "Action info: The box on the bottom left.\n" +
  "Instructions:\n" +
  "Attack: Each Character has their own attack rating and damage.\n" +
  "Defend: Fighter absorbs damage. It uses defended characters defense rating but will lower damage by 2.\n" +
  "Steal: Theif will steal 1 or 2 potions at the same success rate as his attack. Watch the action info.\n" +
  "Cure: White Mage magic will heal the selected character for 15 - 25 pts.\n" +
  "Fog: White Mage magic prevents 4 points of damage to the selected character, per hit, for 3 turns.\n" +
  "Fire: Black Mage magic will deal 6 - 30 points of damage. Cannot Miss.\n" +
  "Lit: Black Mage magic will deal 10 - 22 points of damage. Cannot Miss.\n" +
  "Potion: Item will deal selected character for 10 points of damage.\n" +
  "Pheonix Down: Item will bring a slain character back to life with 1 hp.\n" +
  "Enjoy the game."
  );

// global variables, character and monster stats
const characters = {
  "fighter": {	
    name: "ftr: ",
    // do not adjust hp / mp without adjusting min / max
    hp: 30,
    // return a result from 1 to 20, then add 12 (base attack)
    // if you change attack or damage also change resetPlayersSwing();
    // 90% chance to hit
    attack: (Math.floor(Math.random() * 20 + 13)),
    defense: 18,
    // result between 10 and 22
    damage: (Math.floor(Math.random() * 12 + 11)),
    message: "Fighter's Turn",
    buttonColor: "red",
    option1: "fight",
    option2: "defend",
    option3: "item",
    option4: "",
    imageUrl: "images/fighterDoingNothing.png",
    imageWalk: "images/fighterWalk.png",
    imageArmsUp: "images/fighterGuard.png",
    imageAttack: "images/fighterAttack.png",
    imageBackSwing: "images/fighterBackSwing.png",
    imageWeak: "images/fighterWeak.png",
    imageDead: "images/fighterDead.png",
    imageVictory: "images/fighterVictory.png",
    positionCount: 0
  },
  "theif": {
    name: "thf: ",
  	hp: 18,
    // 75% chance to hit
	  attack: (Math.floor(Math.random() * 20 + 10)),
    defense: 14,  
    damage: (Math.floor(Math.random() * 8 + 9)),
    message: "Theif's Turn",
    buttonColor: "green",
    option1: "fight",
    option2: "steal",
    option3: "item",
    option4: "",
    imageUrl: "images/theifDoingNothing.png",
    imageWalk: "images/theifWalk.png",
    imageArmsUp: "images/theifStealing.png",
    imageAttack: "images/theifAttack.png",
    imageBackSwing: "images/theifBackSwing.png",
    imageWeak: "images/theifWeak.png",
    imageDead: "images/theifDead.png",
    imageVictory: "images/theifVictory.png",
    positionCount: 0  
	},
  "whiteMage": {
    name: "wMage: ",
    hp: 24,
    mp: 15,
    // 80% chance to hit
    attack: (Math.floor(Math.random() * 20 + 11)),
    defense: 12,  
    damage: (Math.floor(Math.random() * 6 + 5)),
    message: "White Mage's Turn",
    buttonColor: "white",
    option1: "fight",
    option2: "white magic",
    option3: "item",
    option4: "",
    optA: "cure",
    optB: "",
    optC: "fog",
    imageUrl: "images/whiteMageDoingNothing.png",
    imageWalk: "images/whiteMageWalk.png",
    imageArmsUp: "images/whiteMageVictory.png",
    imageAttack: "images/whiteMageAttack.png",
    imageBackSwing: "images/whiteMageBackSwing.png",
    imageCastingCure: "images/whiteMageCastingCure.png",
    imageCastingFog: "images/whiteMageCastingFog.png",
    imageWeak: "images/whiteMageWeak.png",
    imageDead: "images/whiteMageDead.png",
    imageVictory: "images/whiteMageVictory.png",
    positionCount: 0 
  },
  "blackMage": {
    name: "bMage: ",
  	hp: 14,
    mp: 15,
    // 60% chance to hit
	  attack: (Math.floor(Math.random() * 20 + 7)),
    defense: 10,    
    damage: (Math.floor(Math.random() * 4 + 2)),
    message: "Black Mage's Turn",
    buttonColor: "purple",
    option1: "fight",
    option2: "black magic",
    option3: "item",
    option4: "",
    optA: "fire",
    optB: "",
    optC: "lit",
    imageUrl: "images/blackMageDoingNothing.png",
    imageWalk: "images/blackMageWalk.png",
    imageArmsUp: "images/blackMageVictory.png",
    imageAttack: "images/blackMageAttack.png",
    imageBackSwing: "images/blackMageBackSwing.png",
    imageCastingFire: "images/blackMageCastingFire.png",
    imageCastingLit: "images/blackMageCastingLit.png",
    imageWeak: "images/blackMageWeak.png",
    imageDead: "images/blackMageDead.png",
    imageVictory: "images/blackMageVictory.png",
    positionCount: 0   
  }
};

const monsters = {
  "imp": {
    name: "Imp",
	  hp: 14,
    // if you change this number you must also change randomImpAtt();
	  attack: (Math.floor(Math.random() * 20 + 7)),
    defense: 15,
    // if you change this number you must also change randomImpDam();
    damage: (Math.floor(Math.random() * 8 + 2)),
    options: "fight",
    itemAmount: 1,
    imageUrl: "images/imp.jpg",
    imageBrownHit1: "images/impBrownHit1.jpg",
    imageBrownHit2: "images/impBrownHit2.jpg",
    imageBrownHit3: "images/impBrownHit3.jpg",
    imageGrayHit1: "images/impGrayHit1.jpg",
    imageGrayHit2: "images/impGrayHit2.jpg",
    imageGrayHit3: "images/impGrayHit3.jpg", 
    imageRedHit1: "images/impRedHit1.jpg",
    imageRedHit2: "images/impRedHit2.jpg",
    imageRedHit3: "images/impRedHit3.jpg",
    imageYellowHit1: "images/impYellowHit1.jpg",
    imageYellowHit2: "images/impYellowHit2.jpg",
    imageYellowHit3: "images/impYellowHit3.jpg"
	}
};

let playersItems = {
  "potion": 2,
  "pheonix_down": 1
};

let impCount = 0;
let monsterEnemyZone = [];
// if I want to add another monster, start by spliting monsterHP
let monsterHP = [];
let monsterItems = [];
let fogCount = [0, 0, 0, 0];
let hoverControlClicked = false;
let attClicked = false;
let defendClicked = false;
let stealClicked = false;
let whiteMagicClicked = false;
let cureClicked = false;
let fogClicked = false;
let blackMagicClicked = false;
let fireClicked = false;
let litClicked = false;
let itemClicked = false;
let potionClicked = false;
let pheonixDownClicked = false;
let theifDef = false;
let whiteMageDef = false;
let blackMageDef = false;
let enemyTurn = false;
let turnCounter = 0;
let gameOver = false;
let turnId = {};
// animation variables
let turnIdAnimate = {};
let targetGraph;

function replaceTurnId() {
  if (turnCounter == 1) {
    turnId = {};
    turnId = characters.fighter;
    turnIdAnimate = {};
    turnIdAnimate = $('#fighter');    
    } else if (turnCounter == 2) {
      turnId = {};
      turnId = characters.theif;
      turnIdAnimate = {};
      turnIdAnimate = $('#theif');        
    } else if (turnCounter == 3) {
      turnId = {};
      turnId = characters.whiteMage;
      turnIdAnimate = {};
      turnIdAnimate = $('#whiteMage');        
    } else if (turnCounter == 4) {
      turnId = {};
      turnId = characters.blackMage;
      turnIdAnimate = {};
      turnIdAnimate = $('#blackMage');        
    } else {
      turnId = {};
      turnIdAnimate = {};      
  };
}

// spacebar function
document.body.onkeyup = function(e){
  if(e.keyCode == 32 && impCount < 11 && gameOver == false) {
    impCount ++;
    newImp();
  }
};

let newImp = function(imp) {
  let impName = monsters.imp.name + "[" + impCount + "]: ";
  const impHp = monsters.imp.hp;
  const impItems = monsters.imp.itemAmount;
  monsterEnemyZone.push(impName);
  monsterHP.push(impHp);
  monsterItems.push(impItems);
  $('#anImp').append(impName, impHp + "  ");
  var newImpImage = $('<input type="image" class="imp" />');
  newImpImage.attr('src', monsters.imp.imageUrl);
  // the value is how I am assigning targets with .val()
  newImpImage.attr('value', impCount);
  newImpImage.appendTo('.enemyZone');
};

function renderHP() {
  $("#ftr").append(characters.fighter.name ,characters.fighter.hp);
  $("#thf").append(characters.theif.name ,characters.theif.hp);
  $('#wMage').append(characters.whiteMage.name, characters.whiteMage.hp, "<br>MP: ", characters.whiteMage.mp);
  $('#bMage').append(characters.blackMage.name, characters.blackMage.hp, "<br>MP: ", characters.blackMage.mp);
};

renderHP();

function replaceOptions() {
  // for more info look at replaceTurnId().
  $('.allOpt').empty();
  $('#option1').append(turnId.option1);
  $('#option2').append(turnId.option2);
  $('#option3').append(turnId.option3);  
}

function renderImages() {
  $("#fighter").attr("src", characters.fighter.imageUrl);
  // values are how I am assigning targets
  $('#fighter').attr('value', 1);
  $("#theif").attr("src", characters.theif.imageUrl);
  $('#theif').attr('value', 2);
  $("#whiteMage").attr("src", characters.whiteMage.imageUrl);
  $('#whiteMage').attr('value', 3);
  $("#blackMage").attr("src", characters.blackMage.imageUrl);
  $('#blackMage').attr('value', 4);
  $(".imp").attr("src", monsters.imp.imageUrl);
  $(".imp").attr("value", impCount);
  let impName = monsters.imp.name + "[" + impCount + "]: ";
  let impHp = monsters.imp.hp;
  const impItems = monsters.imp.itemAmount;
  monsterHP.push(impHp);
  monsterItems.push(impItems);
  monsterEnemyZone.push(impName);
  $('#anImp').append(impName, impHp + "  ");
};

renderImages();

$('.allOpt').hover(function(){
  if (hoverControlClicked === false) {
    $(this).css('background-color', 'lightblue');
    $(this).css('color', 'black');
  }
  // when moved off of hover
  }, function(){ 
    if (hoverControlClicked === !true) {
    $(this).css('background-color', 'black');
    $(this).css('color', 'white');
  };
});
// insures that the players attack and damage are different each turn
let resetPlayersSwing = function() {
  characters.fighter.attack = (Math.floor(Math.random() * 20 + 13));
  characters.fighter.damage = (Math.floor(Math.random() * 12 + 11));
  characters.theif.attack = (Math.floor(Math.random() * 20 + 9));
  characters.theif.damage = (Math.floor(Math.random() * 8 + 9));
  characters.whiteMage.attack = (Math.floor(Math.random() * 20 + 11));
  characters.whiteMage.damage = (Math.floor(Math.random() * 6 + 5));
  characters.blackMage.attack = (Math.floor(Math.random() * 20 + 7));
  characters.blackMage.damage = (Math.floor(Math.random() * 4 + 2));
};

function setMinMax() {
  characters.fighter.hp = Math.min(Math.max(parseInt(characters.fighter.hp), 0), 30);
  characters.theif.hp = Math.min(Math.max(parseInt(characters.theif.hp), 0), 18);
  characters.whiteMage.hp = Math.min(Math.max(parseInt(characters.whiteMage.hp), 0), 24);
  characters.blackMage.hp = Math.min(Math.max(parseInt(characters.blackMage.hp), 0), 14);
  characters.whiteMage.mp = Math.min(Math.max(parseInt(characters.whiteMage.mp), 0), 15);
  characters.blackMage.mp = Math.min(Math.max(parseInt(characters.blackMage.mp), 0), 15);
  for (var mHP = 0; mHP < monsterHP.length; mHP++) {
    monsterHP[mHP] = Math.min(Math.max(parseInt(monsterHP[mHP]), 0), 14);
  };
};

const revertColors = function() {
  $('#option1').css('color', 'white');
  $('#option1').css('background-color', 'black');
  $('#option2').css('color', 'white');
  $('#option2').css('background-color', 'black');
  $('#option3').css('color', 'white');
  $('#option3').css('background-color', 'black');
};

const optOneRevertCol = function() {
  $('#option2').css('color', 'white');
  $('#option3').css('color', 'white');
  $('#option2').css('background-color', 'black');
  $('#option3').css('background-color', 'black');
};
const optTwoRevertCol = function() {
  $('#option1').css('color', 'white');
  $('#option3').css('color', 'white');
  $('#option1').css('background-color', 'black');
  $('#option3').css('background-color', 'black');
};
const optThreeRevertCol = function() {
  $('#option1').css('color', 'white');
  $('#option2').css('color', 'white');
  $('#option1').css('background-color', 'black');
  $('#option2').css('background-color', 'black');
};

function stepForward() {
  let walkPosition = false;
  let forwardPosition = setInterval(function() { 
    if (turnId.positionCount < 30) {
      turnId.positionCount++;
      turnIdAnimate.css({'right': turnId.positionCount + '%'});
      // divisable by 3
      if (turnId.positionCount % 3 === 0 && walkPosition == false) {
        turnIdAnimate.attr('src', turnId.imageWalk);
        walkPosition = true;
      } else if (turnId.positionCount % 3 === 0 && walkPosition == true) {
        turnIdAnimate.attr('src', turnId.imageUrl);
        walkPosition = false;
      }
    } else {
      clearInterval(forwardPosition);
    }
    // the interval. Not the total time like set timeout.
  }, 15);
};

function stepBackward() { 
  let walkPosition = true;
  let backwardPosition = setInterval(function() {
    if (turnId.positionCount > 0) {
      turnId.positionCount--;
      turnIdAnimate.css({'right': turnId.positionCount + '%'});
      if (turnId.positionCount % 3 === 0 && walkPosition == false) {
        turnIdAnimate.attr('src', turnId.imageWalk);
        walkPosition = true;
      } else if (turnId.positionCount % 3 === 0 && walkPosition == true) {
        turnIdAnimate.attr('src', turnId.imageUrl);
        walkPosition = false;
      }
    } else {
      // next turn is called after interval reached its limit and is cleared
      turnIdAnimate.attr('src', turnId.imageUrl);
      clearInterval(backwardPosition);
      weakStrongAliveDeadGraphics();
      nextTurn();
    };
  }, 15);
};

function armsUpGraphics() {
  let armsUpCount = 60;
  let translucent = false;
  let armsPosition = setInterval(function() {
    if (armsUpCount > 0) {
      armsUpCount--;
      // arms up
      turnIdAnimate.attr('src', turnId.imageArmsUp);
      // flashing target
      if (armsUpCount % 5 === 0 && translucent == false) {
        targetGraph.css({'opacity': 1});
        translucent = true;
      } else if (armsUpCount % 5 === 0 && translucent == true) {
        targetGraph.css({'opacity': 0});
        translucent = false;
      }
    } else {
      // make sure the target is visable after the interval is over
      targetGraph.css({'opacity': 1});
      clearInterval(armsPosition);
      weakStrongAliveDeadGraphics();
      stepBackward();
    }
  }, 15);
};

function hitGraphics() {
  let hitTimeCount = 60;
  let weaponSwing = false;
  let takingDamage = 1;
  let hitPosition = setInterval(function() {
    if (hitTimeCount > 0) {
      hitTimeCount--;
      // swing
      if (hitTimeCount % 5 === 0 && weaponSwing == false) {
        turnIdAnimate.attr('src', turnId.imageBackSwing);
        weaponSwing = true;
      } else if (hitTimeCount % 5 === 0 && weaponSwing == true) {
        turnIdAnimate.attr('src', turnId.imageAttack);
        weaponSwing = false;
      }
      // damage
      if (hitTimeCount % 3 === 0 && takingDamage == 1) {
        // fighter or theif attack / silver colored damage
        if (turnCounter == 1 || turnCounter == 2) {
          targetGraph.attr('src', monsters.imp.imageGrayHit1);
        // white or black mage attack / brown colored damage
        } else if (turnCounter == 3 || turnCounter == 4) {
          targetGraph.attr('src', monsters.imp.imageBrownHit1);
        };
        takingDamage = 2;
      } else if (hitTimeCount % 3 === 0 && takingDamage == 2) {
        if (turnCounter == 1 || turnCounter == 2) {
          targetGraph.attr('src', monsters.imp.imageGrayHit2);
        } else if (turnCounter == 3 || turnCounter == 4) {
          targetGraph.attr('src', monsters.imp.imageBrownHit2);
        };
        takingDamage = 3;
      } else if (hitTimeCount % 3 === 0 && takingDamage == 3) {
        if (turnCounter == 1 || turnCounter == 2) {
          targetGraph.attr('src', monsters.imp.imageGrayHit3);
        } else if (turnCounter == 3 || turnCounter == 4) {
          targetGraph.attr('src', monsters.imp.imageBrownHit3);
        };
        takingDamage = 1;
      }
    } else {
      // reset player image
      turnIdAnimate.attr('src', turnId.imageWalk);
      // reset monster image
      targetGraph.attr('src', monsters.imp.imageUrl);
      clearInterval(hitPosition);
      stepBackward();
    }
  }, 15);
};

function missGraphics() {
  let hitTimeCount = 60;
  let takingDamage = false;
  let hitPosition = setInterval(function() {
    if (hitTimeCount > 0) {
      hitTimeCount--;
      if (hitTimeCount % 5 === 0 && takingDamage == false) {
        turnIdAnimate.attr('src', turnId.imageBackSwing);
        takingDamage = true;
      } else if (hitTimeCount % 5 === 0 && takingDamage == true) {
        turnIdAnimate.attr('src', turnId.imageAttack);
        takingDamage = false;
      }
    } else {
      turnIdAnimate.attr('src', turnId.imageWalk);
      clearInterval(hitPosition);
      stepBackward();
    }
  }, 15);
};

function castCureGraphics() {
  let castCureCount = 60;
  let translucent = false;
  let curePosition = setInterval(function() {
    if (castCureCount > 0) {
      castCureCount--;
      turnIdAnimate.attr('src', turnId.imageCastingCure);
      // flashing target, screen background flash
      if (castCureCount % 5 === 0 && translucent == false) {
        $('*').css({'background-color': 'black'});
        targetGraph.css({'opacity': 1});
        translucent = true;
      } else if (castCureCount % 5 === 0 && translucent == true) {
        $('*').css({'background-color': 'rgb(170, 242, 0)'});
        targetGraph.css({'opacity': 0});
        translucent = false;
      };
    } else {
      $('*').css({'background-color': 'black'});
      // white mage image reset
      turnIdAnimate.attr('src', turnId.imageWalk);
      // target player image reset
      targetGraph.css({'opacity': 1});
      clearInterval(curePosition);
      fogEffectGraphics();
      weakStrongAliveDeadGraphics();
      stepBackward();
    }
  }, 15);
}

function castFogGraphics() {
  let castFogCount = 60;
  let translucent = false;
  let fogPosition = setInterval(function() {
    if (castFogCount > 0) {
      castFogCount--;
      turnIdAnimate.attr('src', turnId.imageCastingFog);
      if (castFogCount % 5 === 0 && translucent == false) {
        $('*').css({'background-color': 'black'});
        targetGraph.css({'opacity': 1});
        translucent = true;
      } else if (castFogCount % 5 === 0 && translucent == true) {
        $('*').css({'background-color': 'rgb(179, 242, 196)'});
        targetGraph.css({'opacity': 0});
        translucent = false;
      };
    } else {
      $('*').css({'background-color': 'black'});
      turnIdAnimate.attr('src', turnId.imageWalk);
      targetGraph.css({'opacity': 1});
      fogEffectGraphics();
      clearInterval(fogPosition);
      stepBackward();
    }
  }, 15);
}

function fogEffectGraphics() {
  var impFogTarget = $('.imp');
  for (var fg = 0; fg < fogCount.length; fg++) {
    if (fogCount[0] <= 0) {
      $('#fighter').css({'-webkit-filter': 'grayscale(0%)', 'filter': 'grayscale(0%)'});
    } else {
      $('#fighter').css({'-webkit-filter': 'grayscale(100%)', 'filter': 'grayscale(100%)'});
    };
    if (fogCount[1] <= 0) {
      $('#theif').css({'-webkit-filter': 'grayscale(0%)', 'filter': 'grayscale(0%)'});
    } else {
      $('#theif').css({'-webkit-filter': 'grayscale(100%)', 'filter': 'grayscale(100%)'});
    }
    if (fogCount[2] <= 0) {
      $('#whiteMage').css({'-webkit-filter': 'grayscale(0%)', 'filter': 'grayscale(0%)'});
    } else {
      $('#whiteMage').css({'-webkit-filter': 'grayscale(100%)', 'filter': 'grayscale(100%)'});
    };
    if (fogCount[3] <= 0) {
      $('#blackMage').css({'-webkit-filter': 'grayscale(0%)', 'filter': 'grayscale(0%)'});
    } else {
      $('#blackMage').css({'-webkit-filter': 'grayscale(100%)', 'filter': 'grayscale(100%)'});
    }
  }
};

function castFireGraphics() {
  let castFireCount = 60;
  let translucent = false;
  let takingDamage = 1;
  let firePosition = setInterval(function() {
    if (castFireCount > 0) {
      castFireCount--;
      turnIdAnimate.attr('src', turnId.imageCastingFire);
      // flashing target, screen background flash
      if (castFireCount % 5 === 0 && translucent == false) {
        $('*').css({'background-color': 'black'});
        targetGraph.css({'opacity': 1});
        translucent = true;
      } else if (castFireCount % 5 === 0 && translucent == true) {
        $('*').css({'background-color': 'rgb(255, 31, 94)'});
        targetGraph.css({'opacity': 0});
        translucent = false;
      };
      if (castFireCount % 3 === 0 && takingDamage == 1) {
        targetGraph.attr('src', monsters.imp.imageRedHit1);
        takingDamage = 2;
      } else if (castFireCount % 3 === 0 && takingDamage == 2) {
        targetGraph.attr('src', monsters.imp.imageRedHit2);
        takingDamage = 3;
      } else if (castFireCount % 3 === 0 && takingDamage == 3) {
        targetGraph.attr('src', monsters.imp.imageRedHit3);
        takingDamage = 1;
      };
    } else {
      $('*').css({'background-color': 'black'});
      targetGraph.attr('src', monsters.imp.imageUrl);
      turnIdAnimate.attr('src', turnId.imageWalk);
      targetGraph.css({'opacity': 1});
      clearInterval(firePosition);
      stepBackward();
    }
  }, 15);
}

function castLitGraphics() {
  let castLitCount = 60;
  let translucent = false;
  let takingDamage = 1;
  let litPosition = setInterval(function() {
    if (castLitCount > 0) {
      castLitCount--;
      turnIdAnimate.attr('src', turnId.imageCastingLit);
      if (castLitCount % 5 === 0 && translucent == false) {
        $('*').css({'background-color': 'black'});
        targetGraph.css({'opacity': 1});
        translucent = true;
      } else if (castLitCount % 5 === 0 && translucent == true) {
        $('*').css({'background-color': 'rgb(255, 215, 97)'});
        targetGraph.css({'opacity': 0});
        translucent = false;
      };
      if (castLitCount % 3 === 0 && takingDamage == 1) {
        targetGraph.attr('src', monsters.imp.imageYellowHit1);
        takingDamage = 2;
      } else if (castLitCount % 3 === 0 && takingDamage == 2) {
        targetGraph.attr('src', monsters.imp.imageYellowHit2);
        takingDamage = 3;
      } else if (castLitCount % 3 === 0 && takingDamage == 3) {
        targetGraph.attr('src', monsters.imp.imageYellowHit3);
        takingDamage = 1;
      };
    } else {
      $('*').css({'background-color': 'black'});
      targetGraph.attr('src', monsters.imp.imageUrl);
      turnIdAnimate.attr('src', turnId.imageWalk);
      targetGraph.css({'opacity': 1});
      clearInterval(litPosition);
      stepBackward();
    }
  }, 15);
};

function monsterHitGraphics() {
  let monsterHitCount = 60;
  let translucent = false;
  let monsterHitPosition = setInterval(function() {
    if (monsterHitCount > 0) {
      monsterHitCount--;
      if (monsterHitCount % 5 === 0 && translucent == false) {
        targetGraph.css({'opacity': 1});
        translucent = true;
      } else if (monsterHitCount % 5 === 0 && translucent == true) {
        targetGraph.css({'opacity': 0});
        translucent = false;
      };
    } else {
      targetGraph.css({'opacity': 1});
      clearInterval(monsterHitPosition);
      weakStrongAliveDeadGraphics();
      fogEffectGraphics();
    }
  }, 15);
};

function weakStrongAliveDeadGraphics() {
  if (characters.fighter.hp <= 7 && characters.fighter.hp >= 1) {
    $('#fighter').attr('src', characters.fighter.imageWeak);
    $('#ftr').css('color', 'red');
  } else if (characters.fighter.hp <= 0) {
    $('#fighter').attr('src', characters.fighter.imageDead);
    $('#ftr').css('color', '#191970');
  } else {
    $('#fighter').attr('src', characters.fighter.imageUrl);
    $('#ftr').css('color', 'white');
  };
  if (characters.theif.hp <= 7 && characters.theif.hp >= 1) {
    $('#theif').attr('src', characters.theif.imageWeak);
    $('#thf').css('color', 'red');
  } else if (characters.theif.hp <= 0) {
    $('#theif').attr('src', characters.theif.imageDead);
    $('#thf').css('color', '#191970');
  } else {
    $('#theif').attr('src', characters.theif.imageUrl);
    $('#thf').css('color', 'white');
  };
  if (characters.whiteMage.hp <= 7 && characters.whiteMage.hp >= 1) {
    $('#whiteMage').attr('src', characters.whiteMage.imageWeak);
    $('#wMage').css('color', 'red');
  } else if (characters.whiteMage.hp <= 0) {
    $('#whiteMage').attr('src', characters.whiteMage.imageDead);
    $('#wMage').css('color', '#191970');
  } else {
    $('#whiteMage').attr('src', characters.whiteMage.imageUrl);
    $('#wMage').css('color', 'white');
  };
  if (characters.blackMage.hp <= 7 && characters.blackMage.hp >= 1) {
    $('#blackMage').attr('src', characters.blackMage.imageWeak);
    $('#bMage').css('color', 'red');
  } else if (characters.blackMage.hp <= 0) {
    $('#blackMage').attr('src', characters.blackMage.imageDead);
    $('#bMage').css('color', '#191970');
  } else {
    $('#blackMage').attr('src', characters.blackMage.imageUrl);
    $('#bMage').css('color', 'white');
  };  
};

const nextTurn = function() {
  if (turnCounter < 4) {
    turnCounter++;
    playerChoices(); 
  } else if (turnCounter === 4) {
    turnCounter = 0;
    enemyTurn = true;
    $('.allOpt').empty();
    impChoices();
  } else {
    console.log("something's wrong with the turn counter.")
  };
};

function playerChoices() {
  function checkWin(badGuyHp) {
    return badGuyHp <= 0;
  }

  function winGame() {
    // every monsterHP in the array, evaluated (true/false) by checkWin
    let evaluateWin = monsterHP.every(checkWin);
    let winDanceCount = 1000000;
    let winDance = false;
    if (evaluateWin == true) {
      gameOver = true;
      let exp = monsterEnemyZone.length * 10;
      $('.allOpt').empty();
      $('.allOpt').off();
      alert('You Win!!\n' + 'You get ' + exp + ' exp!');
      let winDancePosition = setInterval(function() {
      if (winDanceCount > 0) {
        winDanceCount--;
        if (winDanceCount % 2 === 0 && winDance == false) {
          $('#fighter').attr('src', characters.fighter.imageUrl);
          $('#theif').attr('src', characters.theif.imageUrl);
          $('#whiteMage').attr('src', characters.whiteMage.imageUrl);
          $('#blackMage').attr('src', characters.blackMage.imageUrl);
          winDance = true;
        } else if (winDanceCount % 2 === 0 && winDance == true) {
          $('#fighter').attr('src', characters.fighter.imageVictory);
          $('#theif').attr('src', characters.theif.imageVictory);
          $('#whiteMage').attr('src', characters.whiteMage.imageVictory);
          $('#blackMage').attr('src', characters.blackMage.imageVictory);
          winDance = false;
        };
        } else {
          clearInterval(winDancePosition);
        }
      }, 300);
    };
  };
  if (enemyTurn == false) {
    replaceTurnId();
    // if alive
    if (turnId.hp > 0) {
      // create buttons
      setTimeout(function() {
        $('#messageArea').text(turnId.message);
      }, 3500);
      stepForward();
      replaceOptions();
      $('#option1').on('click', function() {
        $(this).css('background-color', turnId.buttonColor);
        optOneRevertCol();
        hoverControlClicked = true;
        attClicked = true;
        defendClicked = false;
        stealClicked = false;
        itemClicked = false;
      });
      $('#option2').on('click', function() {
        $(this).css('background-color', turnId.buttonColor);
        optTwoRevertCol();
        attClicked = false;
        itemClicked = false;
        hoverControlClicked = true;
        if (turnCounter === 1) {
          defendClicked = true;
        };
        if (turnCounter === 2) {
          stealClicked = true;
        };
        if (turnCounter === 3 && whiteMagicClicked == false) {
          $('.allOpt').empty();
          $('#option1').append(characters.whiteMage.optA);
          $('#option2').append(characters.whiteMage.optB);
          $('#option3').append(characters.whiteMage.optC);
          $('#option4').append("back");
          whiteMagicClicked = true;
        };
        if (turnCounter === 4 && blackMagicClicked == false) {
          $('.allOpt').empty();
          $('#option1').append(characters.blackMage.optA);
          $('#option2').append(characters.blackMage.optB);
          $('#option3').append(characters.blackMage.optC);
          $('#option4').append("back");
          blackMagicClicked = true;
        }
      });
      $('#option3').on('click', function() {
        if (blackMagicClicked == false && whiteMagicClicked == false) {
          $('.allOpt').empty();
          $('#option1').append("potion: ", playersItems.potion);
          $('#option2').append("pheonix down: ", playersItems.pheonix_down);
          $('#option4').append("back");
          attClicked = false;
          defendClicked = false;
          stealClicked = false;
          hoverControlClicked = false;
          itemClicked = true;
        };
      });
      // checks if winGame conditions are true and runs if true
      winGame();
      // if character is dead
    } else {
      nextTurn();
    };
  };
};
// turn on a white spell
$('#option1').on('click', function() {
  if (whiteMagicClicked == true && characters.whiteMage.mp < 5) {
    $('#messageArea').text("Not enough MP");
  } else if (whiteMagicClicked == true) {
    $(this).css('background-color', turnId.buttonColor);
    optOneRevertCol();
    cureClicked = true;
    fogClicked = false;
    hoverControlClicked = true;
  }
});
$('#option3').on('click', function() {
  if (whiteMagicClicked === true && characters.whiteMage.mp < 5) {
    $('#messageArea').text("Not enough MP");
  } else if (whiteMagicClicked == true) {
    $(this).css('background-color', turnId.buttonColor);
    optThreeRevertCol();
    fogClicked = true;
    cureClicked = false;
    hoverControlClicked = true;
  }
});
// turn on a black spell
$('#option1').on('click', function() {
  if (blackMagicClicked === true && characters.blackMage.mp < 5) {
    $('#messageArea').text("Not enough MP");
  } else if (blackMagicClicked == true) {
    $(this).css('background-color', turnId.buttonColor);
    optOneRevertCol();
    fireClicked = true;
    litClicked = false;
    hoverControlClicked = true;
  }
});
$('#option3').on('click', function() {
  if (blackMagicClicked === true && characters.blackMage.mp < 5) {
    $('#messageArea').text("Not enough MP");
  } else if (blackMagicClicked == true) {
    $(this).css('background-color', turnId.buttonColor);
    optThreeRevertCol();
    litClicked = true;
    fireClicked = false;
    hoverControlClicked = true;
  }
});
// turn on an item
$('#option1').on('click', function() {
  if(itemClicked === true && playersItems.potion <= 0) {
    $('#messageArea').text('You have no potions to spare.');
  } else if (itemClicked == true) {
    $(this).css('background-color', turnId.buttonColor);
    optOneRevertCol();
    potionClicked = true;
    pheonixDownClicked = false;
    hoverControlClicked = true;
  }
});
$('#option2').on('click', function() {
  if(itemClicked === true && playersItems.pheonix_down <= 0) {
    $('#messageArea').text('You no longer have a pheonix down.');
  } else if (itemClicked == true) {
    $(this).css('background-color', turnId.buttonColor);
    optTwoRevertCol();
    potionClicked = false;
    pheonixDownClicked = true;
    hoverControlClicked = true;
  }
});
// turn off white and black magic and cancel items/ back button
$('#option4').on('click', function() {
  whiteMagicClicked = false;
  blackMagicClicked = false;
  itemClicked = false;
  cureClicked = false;
  fogClicked = false;
  fireClicked = false;
  litClicked = false;
  potionClicked = false;
  pheonixDownClicked = false;
  attClicked = false;
  stealClicked = false;
  defendClicked = false;
  hoverControlClicked = false;
  revertColors();
  replaceOptions();
});

$(".pCZone").on("click", "input.pCPics", function() {
  let target = $(this).val();
  let pCChoice = {};
  let elementChoice;
  replacePCTargets(target);
  function replacePCTargets() {
    if (target == 1) {
      // target
      pCChoice = {};
      pCChoice = characters.fighter;
      // status element
      elementChoice = {};
      elementChoice = $('#ftr');
      // image element
      targetGraph = {};
      targetGraph = $('#fighter');
    } else if (target == 2) {
      pCChoice = {};
      pCChoice = characters.theif;
      elementChoice = {};
      elementChoice = $('#thf'); 
      targetGraph = {};     
      targetGraph = $('#theif');
    } else if (target == 3) {
      pCChoice = {};
      pCChoice = characters.whiteMage;
      elementChoice = {};
      elementChoice = $('#wMage');
      targetGraph = {};
      targetGraph = $('#whiteMage');                
    } else if (target == 4) {
      pCChoice = {};
      pCChoice = characters.blackMage;
      elementChoice = {};
      elementChoice = $('#bMage');  
      targetGraph = {};
      targetGraph = $('#blackMage');          
    } else {
      pCChoice = {};
      elementChoice = {};
      targetGraph = {};      
    };
  };
  // fighters defend ability
  if (defendClicked == true) {
    if (target == 1) {
      $('#messageArea').text("The fighter cannot defend himself.");
    };
    if (target == 2) {
      $('#messageArea').text("The fighter is protecting the theif.");
      theifDef = true;
      hoverControlClicked = false;
      defendClicked = false;
      armsUpGraphics(target);
      // makes sure the targets are staying the right color
      fogEffectGraphics();
    };
    if (target == 3) {
      $('#messageArea').text("The fighter is protecting the white mage.");      
      whiteMageDef = true;
      hoverControlClicked = false;
      defendClicked = false;
      armsUpGraphics(target);
      fogEffectGraphics();
    };
    if (target == 4) {
      $('#messageArea').text("The fighter is protecting the black mage.");
      blackMageDef = true;
      hoverControlClicked = false;
      defendClicked = false;
      armsUpGraphics(target);
      fogEffectGraphics();
    };
  };
  // white mage's cure 
  if (cureClicked == true) {
    let cureEffect = Math.floor(Math.random() * 10 + 16);
    // insures that I am messaging the player the same amount as they are getting cured
    let cureEffectTemp = [];
    if (pCChoice.hp > 0) {
      cureEffectTemp.push(cureEffect);
      pCChoice.hp += cureEffectTemp[0];
      characters.whiteMage.mp -= 5;
      setMinMax();
      elementChoice.empty();
      // fighter or theif
      if (target == 1 || target == 2) {
        elementChoice.append(pCChoice.name, pCChoice.hp);
      } else {
      // white or black mage
        elementChoice.append(pCChoice.name, pCChoice.hp, "<br>MP: ", pCChoice.mp);
      };
      // white mage mp update
      $('#wMage').empty();
      $('#wMage').append(characters.whiteMage.name, characters.whiteMage.hp, "<br>MP: ", characters.whiteMage.mp);      
      $('#messageArea').text('The white mage cured the ' + pCChoice.name + ' for ' + cureEffectTemp[0] + ' hp.');
      castCureGraphics(target);
      whiteMagicClicked = false;
      hoverControlClicked = false;
      cureClicked = false;
      cureEffectTemp = [];
      // already dead
    } else {
      $('#messageArea').text('You cannot cure a dead character.');
    };
  };
  // fog spell
  if (fogClicked == true) {
    if (pCChoice.hp > 0) {
      fogCount[target - 1] = fogCount[target - 1] +3;
      characters.whiteMage.mp -= 5;
      setMinMax();
      $('#wMage').empty();
      $('#wMage').append(characters.whiteMage.name, characters.whiteMage.hp, "<br>MP: ", characters.whiteMage.mp);
      $('#messageArea').text('The white mage casts fog on the ' + pCChoice.name + '.\n     Damage reduced by 4.');
      castFogGraphics(target);
      whiteMagicClicked = false;
      hoverControlClicked = false;
      fogClicked = false;
    } else {
    $('#messageArea').text('You cannot protect a dead character with Fog');
    };
  };
  // using the potion
  if (potionClicked == true) {
    if (pCChoice.hp > 0) {
      pCChoice.hp += 10;
      playersItems.potion -= 1; 
      setMinMax();
      elementChoice.empty();
      elementChoice.append(pCChoice.name, pCChoice.hp);
      $('#messageArea').text('The ' + turnId.name + ' throws a potion to the '+ pCChoice.name + '.     \nRecovered: 10hp');
      armsUpGraphics(target);
      fogEffectGraphics();
      potionClicked = false;
      hoverControlClicked = false;
    } else {
      $('#messageArea').text('A potion cannot cure a dead character.');
    };
  };
  // using pheonix down
  if (pheonixDownClicked == true) {
    if (pCChoice.hp <= 0) {
      pCChoice.hp = 1;
      playersItems.pheonix_down -= 1;
      setMinMax();
      elementChoice.empty();
      elementChoice.append(pCChoice.name, pCChoice.hp);
      $('#messageArea').text('The ' + turnId.name + ' places a pheonix down on the '+ pCChoice.name + '.     \nThe feather bursts in to flame bringing the ' + pCChoice.name + ' back to life.');
      armsUpGraphics(target);
      fogEffectGraphics();
      pheonixDownClicked = false;
      hoverControlClicked = false;
    } else {
      $('#messageArea').text('A pheonix down has no effect on the living.');
    };
  };
});

$(".enemyZone").on("click", "input.imp", function() {
  let impName = monsters.imp.name + "[" + impCount + "]: ";
  let impHp = monsters.imp.hp;
  let target = $(this).val();
  let hpLocation = monsterHP[target];
  let enemyZoneImpText = "";
  // just a way to insure I am getting different results every time attack and damage is calculated
  let attackTemp = [];
  let damageTemp = [];
  // turns the enemy zone off for these
  if (defendClicked == false && cureClicked == false && fogClicked == false && potionClicked == false && pheonixDownClicked == false) {
    if (attClicked === true) {
      revertColors();
      resetPlayersSwing();
      attackTemp.push(turnId.attack);
      // check to see if monster is alive
      if (monsterHP[target] > 0) {
        // if hit
        if (attackTemp >= monsters.imp.defense) {
          // insuring the damage isn't repeating
          damageTemp.push(turnId.damage);
          // damage calculation
          monsterHP[target] -= damageTemp[0];
          setMinMax();
          // message to players
          $('#messageArea').text('The ' + turnId.name + ' hit the ' + monsters.imp.name + '.\n' + '    Damage: ' + damageTemp[0]);
          enemyZoneImpText = "";
          for (var i = 0; i < monsterHP.length; i++) {
            // only print alive imps, it will apear as if the dead imp hp's are disapearing
            if (monsterHP[i] > 0) {
              // modify all imp hp. based on array values
              enemyZoneImpText += monsterEnemyZone[i] + monsterHP[i] + "   ";
            };
          };
          $('#anImp').empty();
          $('#anImp').append(enemyZoneImpText);
          // checking if monster dies durring this attack
          if (monsterHP[target] <= 0) {
            $(this).fadeOut(2500);
          };
          // change taget # on global var on hit
          targetGraph = {};
          targetGraph = $(this);
          hitGraphics(target);          
          attackTemp = [];
          damageTemp = [];
        } else {
          // if miss
          $('#messageArea').text('The ' + turnId.name + ' missed.');
          targetGraph = {};
          targetGraph = $(this);
          missGraphics(target);          
          attackTemp = [];
          damageTemp = [];
        };
      // if monster is already dead, this is fail safe code. If the monster is fading out properly this code will never be used.
      } else {
        $('#messageArea').text('The ' + turnId.name + ' swings at an already dead monster.\n You should try that again against a living target.');
      }
      hoverControlClicked = false;
      attClicked = false;
    };
    // steal effect
    if (stealClicked == true) {
      if (monsterHP[target] > 0) {
        attackTemp.push(turnId.attack);
        let stealAmount = Math.floor(Math.random() * 2 + 1);
        revertColors();
        if (turnId.attack >= monsters.imp.defense) { 
          if (monsterItems[target] > 0) {
          // steal calculation
            playersItems.potion += stealAmount;
            monsterItems[target] -= 1;
            setMinMax();
            $('#messageArea').text('The theif stole ' + stealAmount + ' potions from ' + monsters.imp.name + '[' + target + '].');
            targetGraph = {};
            targetGraph = $(this);
            armsUpGraphics(target);                        
            attackTemp = [];
          } else {
            $('#messageArea').text('Nothing to steal');
            targetGraph = {};
            targetGraph = $(this);
            armsUpGraphics(target);                        
            attackTemp = [];
          };
        } else {
          $('#messageArea').text("The " + turnId.name + " couldn't steal.");
          targetGraph = {};
          targetGraph = $(this);
          armsUpGraphics(target);          
          attackTemp = [];
        }
      } else {
        $('#messageArea').text("The " + turnId.name + " tries to steal from an already dead monster.\n " + monsters.imp.name + "'s hide their wallets before they die.");        
      }
      hoverControlClicked = false;
      stealClicked  = false;
    };
    // fire effect
    if (fireClicked == true) {
      if (monsterHP[target] > 0) {
        let fireDamageTemp = [];
        // damage calculation
        let fireEffect = Math.floor(Math.random() * 24 + 7);
        fireDamageTemp.push(fireEffect);
        monsterHP[target] -= fireDamageTemp[0];
        characters.blackMage.mp -= 5;
        setMinMax();
        $('#bMage').empty();
        $('#bMage').append(characters.blackMage.name, characters.blackMage.hp, "<br>MP: ", characters.blackMage.mp);
        $('#messageArea').text('The ' + turnId.name + ' cast fire.\n Damage: ' + fireDamageTemp);
        enemyZoneImpText = "";
        for (var cFi = 0; cFi < monsterHP.length; cFi++) {
          if (monsterHP[cFi] > 0) {
            enemyZoneImpText += monsterEnemyZone[cFi] + monsterHP[cFi] + "   ";
          };
        };
        $('#anImp').empty();
        $('#anImp').append(enemyZoneImpText);
        if (monsterHP[target] <= 0) {
          $(this).fadeOut(2500);
        }
        targetGraph = {};
        targetGraph = $(this);
        castFireGraphics(target);          
        blackMagicClicked = false;
        hoverControlClicked = false;
        fireClicked = false;
        fireDamageTemp = [];
      } else {
        $('#messageArea').text('The ' + turnId.name + ' was about to cast fire at a dead ' + monsters.imp.name + '.\n The ' + turnId.name + ' is to smart to waste his MP on a dead monster.');
      };
    };
    if (litClicked == true) {
      if (monsterHP[target] > 0) {
        let litDamageTemp = [];
        let litEffect = Math.floor(Math.random() * 12 + 11);
        litDamageTemp.push(litEffect);
        monsterHP[target] -= litDamageTemp[0];
        characters.blackMage.mp -= 5;
        setMinMax();
        $('#bMage').empty();
        $('#bMage').append(characters.blackMage.name, characters.blackMage.hp, "<br>MP: ", characters.blackMage.mp);
        $('#messageArea').text('The ' + turnId.name + ' cast lit.\n Damage: ' + litDamageTemp);
        enemyZoneImpText = "";
        for (var cLt = 0; cLt < monsterHP.length; cLt++) {
          if (monsterHP[cLt] > 0) {
            enemyZoneImpText += monsterEnemyZone[cLt] + monsterHP[cLt] + "   ";
          };
        };
        $('#anImp').empty();
        $('#anImp').append(enemyZoneImpText);
        if (monsterHP[target] <= 0) {
          $(this).fadeOut(2500);
        }
        targetGraph = {};
        targetGraph = $(this);
        castLitGraphics(target);
        blackMagicClicked = false;
        hoverControlClicked = false;
        litClicked = false;
        litDamageTemp = [];
      } else {
        $('#messageArea').text('The ' + turnId.name + ' was about to cast lit at a dead ' + monsters.imp.name + '.\n The ' + turnId.name + ' is to smart to waste his MP on a dead monster.');
      };
    };
  };
});

function impChoices() {
  let availableCharacters = [];
  let allCharacterHP = [characters.fighter.hp, characters.theif.hp, characters.whiteMage.hp, characters.blackMage.hp];
  let attackList = [];
  let playerDefense = [];
  let monsterNames = [];
  let newImpAtt = [];
  let newImpDam = [];
  let newImpFogDam = [];
  // loading available characters with names for insert
  if (allCharacterHP[0] > 0) {
    availableCharacters.push("fighter");
  }
  if (allCharacterHP[1] > 0) {
    availableCharacters.push("theif");
  }
  if (allCharacterHP[2] > 0) {
    availableCharacters.push("whiteMage");
  }
  if (allCharacterHP[3] > 0) {
    availableCharacters.push("blackMage");
  }
  // each imp attacks, need to rewrite this if I decide to add another monster
  for (var i = 0; i < monsterHP.length; i++) {
    let impRandomTargets = (Math.floor(Math.random() * availableCharacters.length));
    attackList.push(availableCharacters[impRandomTargets]);
  };
  // throwing defense values
  for (var y = 0; y < attackList.length; y++) {
    if (attackList[y] == "fighter") {
      playerDefense.push(characters.fighter.defense);
    } else if (attackList[y] == "theif") {
      playerDefense.push(characters.theif.defense);
    } else if (attackList[y] == "whiteMage") {
      playerDefense.push(characters.whiteMage.defense);
    } else if (attackList[y] == "blackMage") {
      playerDefense.push(characters.blackMage.defense);
    } else {
      continue;
    };
  };
  // determining how many imps are alive
  for (var z = 0; z < monsterHP.length; z++) {
    if (monsterHP[z] > 0) {
      monsterNames.push(monsters.imp.name);
    }
  }
  var x = 1;
  // to keep monster attack & damage random
  let randomImpAtt = function() {
    for (var att = 0; att < monsterNames.length; att++) {
      // reset value so the first random number doesn't become the imps permanent attack
      monsters.imp.attack = (Math.floor(Math.random() * 20 + 7));
      let rIAtt = monsters.imp.attack;
      newImpAtt.push(rIAtt);
    }
  };
  let randomImpDam = function() {
    let rIDam = monsters.imp.damage;
    newImpDam = [];
    newImpDam.push(rIDam);
  };
  let impFogDam = function() {
    // the same as monsters.imp.damage - 2
    let rIFog = (Math.floor(Math.random() * 8 - 2));
    newImpFogDam = [];
    newImpFogDam.push(rIFog);
  };
  // if a character is alive imps attack.
  if (characters.fighter.hp > 0 || characters.theif.hp > 0 || characters.whiteMage.hp > 0 || characters.blackMage.hp > 0) {
    attackLoopWithDelays();
  } else {
    alert('GAME OVER!!');
  };
  // non tradional loop so that the imps attack will fire one at a time.
  function attackLoopWithDelays() {
    randomImpAtt();
    // if hit, playerDefense is the defense number in the array
    if (newImpAtt[x] >= playerDefense[x]) {
      // throw damage to the right character
      if (playerDefense[x] == characters.fighter.defense) {
        setTimeout(function() {
          if (fogCount[0] == 0) {
            // this is called by a function to prevent one number from getting locked in and repeating itself in the loop
            randomImpDam();
            characters.fighter.hp -= newImpDam;
            setMinMax();
            $('#messageArea').text('The ' + monsters.imp.name + ' hit your fighter for ' + newImpDam + ' points of damage.');
            // fog effect
          } else {
            impFogDam();
            characters.fighter.hp -= newImpFogDam;
            setMinMax();
            $('#messageArea').text('The ' + monsters.imp.name + ' hit your fighter for ' + newImpFogDam + ' points of damage.');
          }; 
          targetGraph = {};
          targetGraph = $('#fighter');
          monsterHitGraphics();
          // change the screen   
          $('#ftr').empty();
          $('#ftr').append(characters.fighter.name, characters.fighter.hp);
          if (x < monsterNames.length) {
            x++;
            // if anyones alive the monster attack loop continues
            if (characters.fighter.hp > 0 || characters.theif.hp > 0 || characters.whiteMage.hp > 0 || characters.blackMage.hp > 0) {
              attackLoopWithDelays();
            } else {
              alert('GAME OVER!!');
            };
          } else {
            playersTurnReset();
          };
        }, 3000);
      };
      // fighters defend ability
      if (playerDefense[x] == characters.theif.defense) {
        if (theifDef == true) {
          setTimeout(function() {
            // while defending the fighter uses the other players armor class but takes 2 less points of damage
          if (fogCount[0] == 0) {
            randomImpDam();
            characters.fighter.hp -= newImpDam;
            setMinMax();
            $('#messageArea').text('The figher defended your theif.\n' + 'The ' + monsters.imp.name + ' hit your fighter for ' + newImpDam + ' points of damage.');
          } else {
            impFogDam();
            characters.fighter.hp -= newImpFogDam;
            setMinMax();
            $('#messageArea').text('The figher defended your theif.\n' + 'The ' + monsters.imp.name + ' hit your fighter for ' + newImpFogDam + ' points of damage.');
          }; 
            targetGraph = {};
            targetGraph = $('#fighter');
            monsterHitGraphics();
            $('#ftr').empty();
            $('#ftr').append(characters.fighter.name, characters.fighter.hp);
            if (x < monsterNames.length) {
              x++;
              if (characters.fighter.hp > 0 || characters.theif.hp > 0 || characters.whiteMage.hp > 0 || characters.blackMage.hp > 0) {
                attackLoopWithDelays();
              } else {
                alert('GAME OVER!!');
              };
            } else { 
              playersTurnReset();
            };
          }, 3000);  
        } else {
          // normal damage
          setTimeout(function() {
          if (fogCount[0] == 0) {
            randomImpDam();
            characters.theif.hp -= newImpDam;
            setMinMax();
            $('#messageArea').text('The ' + monsters.imp.name + ' hit your theif for ' + newImpDam + ' points of damage.');
            // fog effect
          } else {
            impFogDam();
            characters.theif.hp -= newImpFogDam;
            setMinMax();
            $('#messageArea').text('The ' + monsters.imp.name + ' hit your theif for ' + newImpFogDam + ' points of damage.');
          }; 
            targetGraph = {};
            targetGraph = $('#theif');
            monsterHitGraphics();
            $('#thf').empty();
            $('#thf').append(characters.theif.name, characters.theif.hp);
            if (x < monsterNames.length) {
              x++;
              if (characters.fighter.hp > 0 || characters.theif.hp > 0 || characters.whiteMage.hp > 0 || characters.blackMage.hp > 0) {
                attackLoopWithDelays();
              } else {
                alert('GAME OVER!!');
              };
            } else { 
              playersTurnReset();
            };
          }, 3000); 
        };      
      };
      if (playerDefense[x] == characters.whiteMage.defense) {
        if (whiteMageDef == true) {
          setTimeout(function() {
          if (fogCount[0] == 0) {
            randomImpDam();
            characters.fighter.hp -= newImpDam;
            setMinMax();
            $('#messageArea').text('The figher defended your white mage.\n' + 'The ' + monsters.imp.name + ' hit your fighter for ' + newImpDam + ' points of damage.');
          } else {
            impFogDam();
            characters.fighter.hp -= newImpFogDam;
            setMinMax();
            $('#messageArea').text('The figher defended your white mage.\n' + 'The ' + monsters.imp.name + ' hit your fighter for ' + newImpFogDam + ' points of damage.');
          }; 
            targetGraph = {};
            targetGraph = $('#fighter');
            monsterHitGraphics();
            $('#ftr').empty();
            $('#ftr').append(characters.fighter.name, characters.fighter.hp);
            if (x < monsterNames.length) {
              x++;
              if (characters.fighter.hp > 0 || characters.theif.hp > 0 || characters.whiteMage.hp > 0 || characters.blackMage.hp > 0) {
                attackLoopWithDelays();
              } else {
                alert('GAME OVER!!');
              };
            } else { 
              playersTurnReset();
            };
          }, 3000);  
        } else {
          setTimeout(function() {
            if (fogCount[2] == 0) {
              randomImpDam();
              characters.whiteMage.hp -= newImpDam;
              setMinMax();
              $('#messageArea').text('The ' + monsters.imp.name + ' hit your white mage for ' + newImpDam + ' points of damage.');
              // fog effect
            } else {
              impFogDam();
              characters.whiteMage.hp -= newImpFogDam;
              setMinMax();
              $('#messageArea').text('The ' + monsters.imp.name + ' hit your white mage for ' + newImpFogDam + ' points of damage.');
            }; 
            targetGraph = {};
            targetGraph = $('#whiteMage');
            monsterHitGraphics()
            $('#wMage').empty();
            $('#wMage').append(characters.whiteMage.name, characters.whiteMage.hp, "<br>MP: ", characters.whiteMage.mp);
            if (x < monsterNames.length) {
              x++;
              if (characters.fighter.hp > 0 || characters.theif.hp > 0 || characters.whiteMage.hp > 0 || characters.blackMage.hp > 0) {
                attackLoopWithDelays();
              } else {
                alert('GAME OVER!!');
              };
            } else {
              playersTurnReset();
            };
          }, 3000);
        };
      };
      if (playerDefense[x] == characters.blackMage.defense) {
        if (blackMageDef == true) {
          setTimeout(function() {
            if (fogCount[3] == 0) {
            randomImpDam();
            characters.fighter.hp -= newImpDam;
            setMinMax();
            $('#messageArea').text('The figher defended your black mage.\n' + 'The ' + monsters.imp.name + ' hit your fighter for ' + newImpDam + ' points of damage.');
          } else {
            impFogDam();
            characters.fighter.hp -= newImpFogDam;
            setMinMax();
            $('#messageArea').text('The figher defended your black mage.\n' + 'The ' + monsters.imp.name + ' hit your fighter for ' + newImpFogDam + ' points of damage.');
          }; 
            targetGraph = {};
            targetGraph = $('#fighter');
            monsterHitGraphics();
            $('#ftr').empty();
            $('#ftr').append(characters.fighter.name, characters.fighter.hp);
            if (x < monsterNames.length) {
              x++;
              if (characters.fighter.hp > 0 || characters.theif.hp > 0 || characters.whiteMage.hp > 0 || characters.blackMage.hp > 0) {
                attackLoopWithDelays();
              } else {
                alert('GAME OVER!!');
              };
            } else { 
              playersTurnReset();
            };
          }, 3000);  
        } else {
          setTimeout(function() {
            if (fogCount[3] == 0) {
              randomImpDam();
              characters.blackMage.hp -= newImpDam;
              setMinMax();
              $('#messageArea').text('The ' + monsters.imp.name + ' hit your black mage for ' + newImpDam + ' points of damage.');
              // fog effect
            } else {
              impFogDam();
              characters.blackMage.hp -= newImpFogDam;
              setMinMax();
              $('#messageArea').text('The ' + monsters.imp.name + ' hit your black mage for ' + newImpFogDam + ' points of damage.');
            };     
            targetGraph = {};
            targetGraph = $('#blackMage');
            monsterHitGraphics();
            $('#bMage').empty();
            $('#bMage').append(characters.blackMage.name, characters.blackMage.hp, "<br>MP: ", characters.blackMage.mp);
            if (x < monsterNames.length) {
              x++;
              if (characters.fighter.hp > 0 || characters.theif.hp > 0 || characters.whiteMage.hp > 0 || characters.blackMage.hp > 0) {
                attackLoopWithDelays();
              } else {
                alert('GAME OVER!!');
              };
            } else {
              playersTurnReset();
            };        
          }, 3000);
        };
      }; 
    } else {
      setTimeout(function() {
        $('#messageArea').text('The ' + monsters.imp.name + ' missed.');
        monsterHitGraphics();
        if (x < monsterNames.length) {
          x++;
          attackLoopWithDelays();
        } else {
          playersTurnReset();
        };         
      }, 3000);
    };
  };
  // reset vars for next time this function is called
  let playersTurnReset = function() {
    x = 1;
    turnCounter = 0;
    enemyTurn = false;
    theifDef = false;
    whiteMageDef = false;
    blackMageDef = false;
    availableCharacters = [];
    attackList = [];
    playerDefense = [];
    newImpAtt = [];
    for (var f = 0; f < fogCount.length; f++) {
      fogCount[f] -= 1;
      fogCount[f] = Math.min(Math.max(parseInt(fogCount[f]), 0), 3);
    }
    fogEffectGraphics();
    nextTurn();
  }
};

nextTurn();
