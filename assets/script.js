//VARIABLES
var currentDate = moment().format("dddd, MMMM Do, LT");
var currentHour = moment().format("k");
console.log(currentHour);
var row = "";
var contentColumn ="";

var arrayOfHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", ]
var numericHourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17,]

//FUNCTION DEFINITIONS
function displayDate() {
    for (i = 0; i < arrayOfHours.length; i++) {
    $("#currentDay").text(currentDate);
    createHourEntry();
    }
}

function setColor() {
    if (numericHourArray[i] === currentHour) {
        row.attr("class", "row time-block present");
    }else if (numericHourArray[i] < currentHour) {
        row.attr("class", "row time-block past");
    }else {
        row.attr("class", "row time-block future");
    }
}

function createHourEntry() {
    hourText = arrayOfHours[i]
    var savedContent = localStorage.getItem(numericHourArray[i]);
    console.log(savedContent)

    var hourColumn = ($("<div>").attr("class", "col-2 hour")).append($("<p>" + hourText + "</p>").attr("class", "text"))
    contentColumn = ($("<textarea>").attr("class", "col-9 time-block content").attr("id", numericHourArray[i]))
    var saveColumn = ($("<div>").attr("class", "col-1 saveBtn")).append($("<button>").attr("class", "btn fas fa-save").attr("id", numericHourArray[i]))
    
    row = $("<div>").attr("class", "row time-block").append(hourColumn, contentColumn, saveColumn);
    row.attr("class", "row time-block");
    
    contentColumn.text(savedContent);

    setColor();
    
    $("#schedule").append(row);
}

//FUNCTION CALLS
displayDate();
// createSchedule();

$(document).on("click", ".btn", function (event) {
    event.preventDefault();
    var key = $(this).attr("id");
    var textContent = $("#" + key).val();

    localStorage.setItem(key, textContent);
    });