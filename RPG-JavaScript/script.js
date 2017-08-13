/*	PsudoCode:
	
	10. create 2 end game sinarios, if all HP drops to 0 = game over, if all imps have HP: 0 = they win. 
	11. Create graphics
	Extras:
	12. create items button, names, amounts, and function
	13. create spell button, names, amount, and functions
	14. create steal button, effect, keep it simple
	15. the block button. sense it only improves defense until the end of the turn this may be one I need to figure out later.
	15. find ways to make these bastards move around
*/		

// 1. tell the player how to start the game
	alert("Press the space bar to start.");

	document.body.onkeyup = function(e){
    	if(e.keyCode == 32){
        	randomEnemyNumber();
        	fighterChoices();
    	}
	};

//	2. make global variables which include 
//  stats for fighter, theif, white mage, 
//  black mage, imp, some other creature
var	fighter = [	
	'hp: ', 30,
	'attack: ', 12,
	'defense: ', 18,
	'damage: ', (Math.floor(Math.random() * 12 + 10))
	];
var theif = [
	'hp: ', 18,
	'attack: ', 8,
	'defense: ', 14,
	'damage: ', (Math.floor(Math.random() * 8 + 8))
	];
var whiteMage = [
	'hp: ', 24,
	'attack: ', 10,
	'defense: ', 12,
	'damage: ', (Math.floor(Math.random() * 6 + 4))
]
var blackMage = [
	'hp: ', 12,
	'attack: ', 6,
	'defense: ', 10,
	'damage: ', (Math.floor(Math.random() * 4 + 1))
]
var	imp = [
	'hp: ', 15,
	'attack: ', 7,
	'defense: ', 15,
	'damage: ', (Math.floor(Math.random() * 8 + 2))
	];
// 	creating a random number of imps
function randomEnemyNumber() {
	for (i = 1; i <= 9; i++) {
		var i = $('.imp').clone(Math.floor(Math.random() * 6 + 3)).appendTo($('.enemyZone'))
	}
};
	// This function will show the players
// remaining HP and MP.
//var howLongIsThis = myPlayer.duration();
//function araysToString() {
//	fighter[0][1].toString();
//	document.write(fighter[0][1]);
//};
//var arrayToString = $.map(fighter[0][1], function(value){
//    return value;
//});
$.each(fighter, function(index, val) {
    $('.ftr').text(fighter, [1]);
    console.log(fighter, [1])
});
$.each(theif, function(index, val) {
    $('.thf').text(theif, [1]);
    console.log(theif, [1])
});
$.each(whiteMage, function(index, val) {
    $('.wMage').text(whiteMage, [1]);
    console.log(whiteMage, [1])
});
$.each(blackMage, function(index, val) {
    $('.bMage').text(blackMage, [1]);
    console.log(blackMage, [1])
});
$.each(imp, function(index, val) {
	$('.anImp').text(imp, [1]);
	console.log(imp, [1]);
});
//araysToString().append();
// 3. make a function allowing the game to 
// start, iterate through the characters, 
// the player cannot advance until making 
// a choice, the character will be skipped 
// if his HP = 0
var data = [];

// I can't get the iterator to work so this
// should go through the turns
function fighterChoices() {
 		if (fighter[1] >= 0) {
// 	5. make a fight button clickable
 			$('.fight').on('click', function(){
// 4. make an imp into a button available only at
// this time
 				if ($(this).data('clicked', true)){
 				 	$(".imp").mousedown(function (e) {
 			 		    e.preventDefault();
 			 		    data.push($(this).serializeArray());
        				console.log(data);
						function feedback(data) {
							var fa = $('.fight');
							var im = $('.imp');
							var fd = fighter[3];
							if (fa.clicked == true && im.clicked == true) {
								if ((Math.floor(Math.random() * 20 + fd)) >= imp[5]) {
									imp[1] = imp[1] - fd;
	  		$('#messageArea').text('The figher hit. The Imp has taken' + fd + ' damage.');
    		console.log('The figher hit. The Imp has taken' + fd + ' damage.');
	};
		};
}
        				theifChoices();
    				});
 				}
    		}); 
 		} else {
 			theifChoices();
 		}
}
function theifChoices() {
		if (theif[1] >= 0) {
 			$('.fight').on('click', function(){
 				if ($(this).data('clicked', true)){
 				 	$(".imp").mousedown(function (e) {
 			 		    e.preventDefault();
 			 		    data.push($(this).serializeArray());
        				console.log(data);
						function feedback(data) {
							var fa = $('.fight');
							var im = $('.imp');
							var td = theif[3];
							if (fa.clicked == true && im.clicked == true) {
								if ((Math.floor(Math.random() * 20 + td)) >= imp[5]) {
									imp[1] = imp[1] - td;
	  		$('#messageArea').text('The figher hit. The Imp has taken' + td + ' damage.');
    		console.log('The figher hit. The Imp has taken' + td + ' damage.');
	};
		};
}        				
        				whiteMageChoices();
    				});
 				}
    		}); 
 		} else {
 			whiteMageChoices();
 		}
}
function whiteMageChoices() {
		if (whiteMage[1] >= 0) {
 			$('.fight').on('click', function(){
 				if ($(this).data('clicked', true)){
 				 	$(".imp").mousedown(function (e) {
 			 		    e.preventDefault();
 			 		    data.push($(this).serializeArray());
        				console.log(data);
						function feedback(data) {
							var fa = $('.fight');
							var im = $('.imp');
							var wd = whiteMage[3];
							if (fa.clicked == true && im.clicked == true) {
								if ((Math.floor(Math.random() * 20 + wd)) >= imp[5]) {
									imp[1] = imp[1] - wd;
	  		$('#messageArea').text('The figher hit. The Imp has taken' + wd + ' damage.');
    		console.log('The figher hit. The Imp has taken' + wd + ' damage.');
	};
		};
}        				
        				blackMageChoices();
    				});
 				}
    		});
		} else {
			blackMageChoices();
		}
}
function blackMageChoices() {
		if (blackMage[1] >= 0) {
 			$('.fight').on('click', function(){
 				if ($(this).data('clicked', true)){
 				 	$(".imp").mousedown(function (e) {
 			 		    e.preventDefault();
 			 		    data.push($(this).serializeArray());
        				console.log(data);
						function feedback(data) {
							var fa = $('.fight');
							var im = $('.imp');
							var bd = blackMage[3];
							if (fa.clicked == true && im.clicked == true) {
								if ((Math.floor(Math.random() * 20 + bd)) >= imp[5]) {
									imp[1] = imp[1] - bd;
	  		$('#messageArea').text('The figher hit. The Imp has taken' + bd + ' damage.');
    		console.log('The figher hit. The Imp has taken' + bd + ' damage.');
	};
		};
}        				
        				impsAtack();
    				});
 				}
    		});
// 6. i need a function that starts after the 
// black mage has made his choice
		} else {
			impsAtack();
		}
} 
//	7. fight function: 
//		a. first make a randomizer for an attack roll 
//		b. message the player if the attack was 
//		succesful
//		c. if the attack succeded create a randomizer
//		 for the damage which needs to be deducted from HP
//		d. if the attack missed, break
//		e. message the player about damage, again if
//		 the attack hit
//	8. after the last player has choosen the imp 
//	chooses fight automaticly 
//	9. the inCombat function. a loop, in random
//	 order, That shows messages and applies changes to the stats of the character
/* function impsAtack() {
	var im = $('.imp');
		if ([1] >= 0) {
			for (im = 0; im = im.length; im++) {
 			 		e.preventDefault();
 			 	    data.push($(this).serializeArray());
        			console.log(data);
					function feedback(data) {
						var fa = $('.fight');
						var ida = imp[3];
							if (fa.clicked == true && im.clicked == true) {
								if (Math.floor(Math.random() * 20 + ida)) >= imp[5].forEach(logArrayElements);...) {
									fighter[1] = figher[1] - ida;
	  		$('#messageArea').text('The figher hit. The Imp has taken' + ida + ' damage.');
    		console.log('The figher hit. The Imp has taken' + ida + ' damage.');
	};
		};
}  	*/
		//.appendTo($('.imp'))		}
