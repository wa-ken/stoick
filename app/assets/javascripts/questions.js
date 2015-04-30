// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
	bgc = new Array();
	bgc[0] = "#999999";
	bgc[1] = "#ff9999";
	bgc[2] = "#ff0000";
	bgc[3] = "#99ff99";
	bgc[4] = "#9999ff";
	bgc[5] = "#0000ff";
	n = Math.floor(Math.random()*bgc.length);
	document.bgColor = bgc[n]
});