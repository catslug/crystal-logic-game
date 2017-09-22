var wins = 0;
var loss = 0;
var greed = Math.floor(Math.random() * 101) + 19
var victim = 0;
var valOptions = [2, 5, 9, 11, 3, 4, 6, 7, 12, 8, 10]
 
valOptions.sort(function sort() { 
	return (Math.round(Math.random()) - 0.5) 
	});

// function to register clicks of crystals, add totals to victim
$(document).ready(function() {
	$(".crystal-img").on("click", function() {
		
		crystalNumb();

		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);
		victim += crystalValue;
		
		compare();
		render();
	})
})

// function to render info to document
function render() {
	$("#wins").text(wins);
	$("#losses").text(loss);
	$("#greed-goal").text(greed);
	$("#victim-score").text(victim);
}

// function to compare values and determine win/loss, then calls functions to alert, reset, render
function compare() {
	if (victim === greed) {
		wins++;
		popu();
		
		greed = Math.floor(Math.random() * 101) + 19
		victim = 0
		valOptions.sort(function sort() { 
			return (Math.round(Math.random()) - 0.5) 
		});

		crystalNumb();
		render();
	}

	else if (victim > greed) {
		loss++;
		popu();
		
		greed = Math.floor(Math.random() * 101) + 19
		victim = 0
		valOptions.sort(function sort() { 
			return (Math.round(Math.random()) - 0.5) 
		});

		crystalNumb();
		render();
	}
}

// function to assign random numbers to crystal images from first 4 positions in array
function crystalNumb() {
	for (var i = 0; i < valOptions.length; i++) {
		$("#img" + i).attr("data-crystalValue", valOptions[i]); 
	}
} 

// function to alert for win or lose
function popu() {
	if (victim === greed) {
		$("<div id='pop'>Omg! You win! Imaginary confetti falls in your lap.</div>").addClass(".popClass").appendTo(".heading");
	}

	else {
		$("<div id='pop'>Oops! You were too greedy. You lose.</div>").addClass(".popClass").appendTo(".heading");
	}

	var myTimer = setTimeout(popuDele, 2500);

	function popuDele() {
	$("div").remove("#pop");
	clearTimeout(myTimer);
	}
}