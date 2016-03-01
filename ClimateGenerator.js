var button = document.getElementById("new_idea");
var result = document.getElementById("answer");
var time = document.getElementById("footer");

var answers = ["burn ", "use ", "switch ", "drive ", "use ", "use ", "eat ", "recycle ", "send ", "run your dishwasher ", "eat ", "drink ", "drink "];
var reductions = [8.96, 0.35 , 0.217, 19.88, 9.62, 0.571, 0.8715, 40.845, 2087.61, 10.843, 104.3, 35.7, 24.5];
var classifier = [" less pounds of coal " ," less tanks of propane ", " incandescant bulbs to compact fluorescants ", " fewer miles ", " kwh less electricity ", " less gallons of oil ", " less pounds of beef ", " pounds of recyclables ", " less emails ", " less times ", " fewer bananas ", " fewer large cappuccinos ", " fewer large lattes "];
var factor = [1, 7, 30, 365];
var factor_time = ["today", "this week", "this month", "this year"];
var footer_time = ["day", "week", "month", "year"];
var excuses = ["that's impossible!", "but i don't want to do that...", "that's lame, i'd rather do something else", "OK", "that seems too hard...", "i don't have enough time", "i just... can't deal with failure", "i'm not inspired yet", "now is not the time", "or not", "that's a lot!", "maybe i can do something else?", "anything but that!"];

// console.log(answers.length);
// console.log(reductions.length);
// console.log(classifier.length);

var font_colors = ["#03C03C", "#B39EB5", "#836953", "#C23B22", "#FFB347", "#FF6961", "#77DD77", "#966FD6", "#B19CD9", "#F49AC2", "#779ECB", "#FDFD96", "#CFCFC4", "#AEC6CF", "#FFD1DC", "#DEA5A4", "#CB99C9"];

var generateColor = function() {
	return font_colors[Math.floor(Math.random() * font_colors.length)];
}

document.onmousedown = function(e) {
	var answer = Math.floor(Math.random() * answers.length);
	var scale = Math.floor(Math.random() * factor.length);
	var num_result = Math.round(reductions[answer] * factor[scale] * 100) / 100;

	//Make sure we don't suggest less than one of something
	if(num_result < 1) {
		scale++;
		num_result = Math.round(reductions[answer] * factor[scale] * 100) / 100;
	}

	result.innerHTML = answers[answer] + num_result + classifier[answer] + factor_time[scale];
	button.innerHTML = excuses[Math.floor(Math.random() * excuses.length)];
	footer.innerHTML = "if everyone in the world did this every " + footer_time[scale] + ", we could curb global temperature increase to 1&deg;C by 2100";

	var rows = document.getElementsByClassName("view_row");
	for(var i = 0; i < rows.length; i++) {
		rows[i].style.background = generateColor();
	}
};