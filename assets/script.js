//VARIABLES
var currentTime = "";
var currentDate = "";
var currentHour = "";

var arrayOfHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", ]


var hourColumn = ($("<div>").attr("class", "col-1 hour")).append($("<p>" + "TEXT" + "</p>").attr("class", "time-block-text"))
var contentColumn = ($("<div>").attr("class", "col-10 time-block content")).append($("<p>" + "TEXT" + "</p>").attr("class", "time-block-text"))

var row = $("<div>").attr("class", "row time-block present").attr("id", "time-block-row").append(hourColumn, contentColumn);
$("#schedule").append(row);
