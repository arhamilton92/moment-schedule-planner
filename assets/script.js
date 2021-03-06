//VARIABLES
//date array for top of page. hour array to match the numericHourArray.
var currentDate = moment().format("dddd, MMMM Do, LT");
var currentHour = moment().format("k");
var row = "";
// array to assign hours to the hours columns of the timeblocks.
var arrayOfHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]
// I created the numericHourArray to make setting the timeblock colors simple.
var numericHourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//FUNCTION DEFINITIONS

//applies all the generated timeblocks to the schedule and displays the date
function appBuilder() {
    //displays current date
    $("#currentDay").text(currentDate);
    //iterates through the arrays to create timeblocks
    for (i = 0; i < arrayOfHours.length; i++) {
        createHourEntry();
    }
}

//changes the color of the timeblocks depending on the current hour.
function setColor() {
    //I had to use 2 equal signs here. 3 wouldn't work. Took me HOURS to figure out. :c At least I learned stuff about == vs ===.
    if (currentHour == numericHourArray[i]) {
        row.attr("class", "row time-block present");
    }else if (numericHourArray[i] < currentHour) {
        row.attr("class", "row time-block past");
    }else {
        row.attr("class", "row time-block future");
    }
}

//generates and appends the timeblocks.
function createHourEntry() {
    hourText = arrayOfHours[i]
    //pulls stored text content from local storage.
    var savedContent = localStorage.getItem(numericHourArray[i]);
    //creates and adds attributes to the hour, content, and save columns, and appends additonal elements where needed.
    var hourColumn = ($("<div>").attr("class", "col-2 hour")).append($("<p>" + hourText + "</p>").attr("class", "text"))
    var contentColumn = ($("<textarea>").attr("class", "col-9 time-block").attr("id", numericHourArray[i]))
    var saveColumn = ($("<button>").attr("class", "col-sm-1 btn btn-info i fas fa-lock saveBtn").attr("id", numericHourArray[i]))
    //creates a row for all the columns, and then appends them to it.
    row = $("<div>").attr("class", "row time-block").append(hourColumn, contentColumn, saveColumn);
    //applies stored text content
    contentColumn.text(savedContent);
    //sets timeblock color
    setColor();
    //appends the row and its contents to the container
    $("#schedule").append(row);
}

//FUNCTION CALLS
appBuilder();

//EVENT LISTENERS
//save button listener
$(document).on("click", ".btn", function (event) {
    //takes the value of the button's id.
    var key = $(this).attr("id");
    //uses button's id (which is the same and the textarea's id) to target the approproate textarea. then stores to local storage
    var textContent = $("#" + key).val();
    localStorage.setItem(key, textContent);
    });

    //I'M SUPER STOKED I FINISHED THIS! criticism on script layout is GREATLY appreciated.