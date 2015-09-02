function o(obj){
	return document.getElementById(obj);	
}
function s(obj){
	return o(obj).style;	
}

function startTimer(){
		totalMinutes = o("minute").value;
		totalSeconds = totalMinutes * 60;
		
		if(isNaN(totalMinutes)){
			alert("Your input is not a valid number");
			return false;
		}
		
		starTimes = setInterval(tick,1000);
		s("formInput").display = "none";
	
}
function tick(){
	 	minutes = Math.floor(totalSeconds/60);
		seconds = totalSeconds - (minutes * 60);
		
		if(seconds < 10){
			seconds = "0" + seconds;
			s("timerDisplay").color = "red";
			s("timerDisplay").textDecoration = "underline";
		}
		totalTime = minutes +":"+ seconds;
		o("timerDisplay").innerHTML = totalTime;
		if(totalSeconds === 0){
			clearInterval(starTimes);
			alert("Count Down Completed");
			s("formInput").display = "block";	
			totalMinutes = "";
		}
	totalSeconds--;
}
window.onload= function(){
	//Create the form input
	var textInput = document.createElement("input");
		textInput.setAttribute("id", "minute");
		textInput.setAttribute("type", "text");
	//Create the form button
	var button = document.createElement("input");
		button.setAttribute("type", "button");
		button.setAttribute("value", "Set Count Down");
	//Append form element to the div
	o("formInput").appendChild(textInput);
	o("formInput").appendChild(button);
	//When the button is clicke start timer
	button.onclick = function(){
		startTimer();
	};
	
}
window.onresize = function () {
	// get the width.. more cross-browser issues
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    // now we should have it
    if (width <= 800) {
        o("divId").innerHTML="Tab View";
		//s("divId").background = "gold";
    } else{
        o("divId").innerHTML="Web View";
		//s("divId").background = "cream";
    }
};