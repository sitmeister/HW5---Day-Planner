// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
//today's date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// create fn to save text in text area in local storage
    //localStorage needs a key(identifier) and value
    //get value of textarea


var textAreaEl = $('textarea');
var saveBtn = $(".saveBtn");
saveBtn.on("click", userInput);

function userInput() {
    var input = $(this).siblings("textarea").val();
    var key = $(this).parents().attr("id");
    console.log(input);
    localStorage.setItem(key, input);
    return;
}
var key = $(this).parents().attr("id");
$(document).ready(function() {
    $(".row").each(function() {
        for (var i = 9; i <=17; i++){
            $("#"+i).children("textarea").val(localStorage.getItem(i))
        }
    })
})



//if/else statement for time to result in if an element is in the past,present or future
//need to compare each id vs current hour each time
    //need variables for the current hour and the hours on the page
//grey for past, red for present, green for future


//if current hour < userhour, add future class to row element. 
//if current hour is === userhour, add present class to row element. 
//if current hour is > userhour, add past class to row element
var currentHour = moment().hour();
var userHour = $(this).attr("id");
console.log(this)
function colors() {
    
    $(".time-block").each(function() {
console.log(this)
        if (userHour < currentHour) {
            $(this).addClass("past")
        } else if (userHour > currentHour) {
            $(this).addClass("future")
        } else {
            $(this).addClass("present")
        }
    })
}
colors();

//if (currentHour < 9) {
 //   $(".row").addClass("future");
//} else if (currentHour === )