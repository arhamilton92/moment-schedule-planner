//VARIABLES
var currentTime = "";
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = "";

var arrayOfHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", ]

//FUNCTION DEFINITIONS

function displayDate() {
    $("#currentDay").text(currentDate);
}

function createSchedule() {
    for (i = 0; i < arrayOfHours.length; i++) {
        createHourEntry();
    }
}

function createHourEntry() {
    var hourText = arrayOfHours[i];
    var hourColumn = ($("<div>").attr("class", "col-2 hour")).append($("<p>" + hourText + "</p>").attr("class", "text"));
    var contentColumn = ($("<textarea>").attr("class", "col-10 time-block")).append($("<p>" + "TEXT" + "</p>").attr("class", "text"));
    
    var row = $("<div>").attr("class", "row time-block present").attr("id", "time-block-row").append(hourColumn, contentColumn);
    $("#schedule").append(row);
}

//FUNCTION CALLS
displayDate();
createSchedule();