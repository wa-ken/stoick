// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
	bgc = new Array();
	bgc[0] = "#1abc9c";
	bgc[1] = "#3498db";
	bgc[2] = "#e74c3c";
	bgc[3] = "#f1c40f";
	bgc[4] = "#e67e22";
	bgc[5] = "#34495e";
	bgc[6] = "#9b59b6";
	n = Math.floor(Math.random()*bgc.length);
	document.bgColor = bgc[n]
});