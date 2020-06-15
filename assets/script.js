//VARIABLES
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("h");
var adjustedHour = "";
console.log(currentHour);


var arrayOfHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", ]

//FUNCTION DEFINITIONS

function displayDate() {
    for (i = 0; i < arrayOfHours.length; i++) {
    $("#currentDay").text(currentDate);
    createHourEntry();
    }
}

function getHour() {
    if (currentHour > 9) {
        adjustedHour = currentHour + ":00 PM";
    } else {
        adjustedHour = currentHour + ":00 AM";
    }
}

function createHourEntry() {
    getHour();
    var hourText = arrayOfHours[i]
    var hourColumn = ($("<div>").attr("class", "col-2 hour")).append($("<p>" + hourText + "</p>").attr("class", "text"))
    var contentColumn = ($("<textarea>").attr("class", "col-9 time-block content")).append($("<p>").attr("class", "text"))
    var saveColumn = ($("<div>").attr("class", "col-1 saveBtn")).append($("<button>").attr("class", "btn fas fa-save"))

    var row = $("<div>").attr("class", "row time-block past").attr("id", "time-block-row").append(hourColumn, contentColumn, saveColumn);
    $("#schedule").append(row);
}

//FUNCTION CALLS
displayDate();
getHour();
// createSchedule();

$("button").on("click", function () {
})

// // $(".btn").on("click", function () {
// //     var buttonId = $(this).attr("id");
// //     var textId = buttonId.replace("b", "a");
// //     var textContent = $("#" + textId).children()[0].value;
// //     localStorage.setItem(textId, textContent);

// if (hour === currentHour) {
//     $("#" + hour).css("background-color", "#ff6961;");
// } else if (hour < currentHour) {
//     $("#" + hour).css("background-color", "#d3d3d3");
// } else {
//     $("#" + hour).css("background-color", "#77dd77");
// }