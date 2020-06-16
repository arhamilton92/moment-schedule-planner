//VARIABLES
var currentDate = moment().format("dddd, MMMM Do, LT");
var currentHour = moment().format("k");
console.log(currentHour);
var row = "";

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
    var hourColumn = ($("<div>").attr("class", "col-2 hour")).append($("<p>" + hourText + "</p>").attr("class", "text"))
    var contentColumn = ($("<textarea>").attr("class", "col-9 time-block content")).append($("<p>").attr("class", "text"))
    var saveColumn = ($("<div>").attr("class", "col-1 saveBtn")).append($("<button>").attr("class", "btn fas fa-save"))
    
    row = $("<div>").attr("class", "row time-block").append(hourColumn, contentColumn, saveColumn);
    row.attr("class", "row time-block");
    
    setColor();
    
    $("#schedule").append(row);
}

//FUNCTION CALLS
displayDate();
// createSchedule();

$("button").on("click", function () {
    console.log('You clicked a button!');
})

// // $(".btn").on("click", function () {
// //     var buttonId = $(this).attr("id");
// //     var textId = buttonId.replace("b", "a");
// //     var textContent = $("#" + textId).children()[0].value;
// //     localStorage.setItem(textId, textContent);