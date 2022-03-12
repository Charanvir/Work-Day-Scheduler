let momentDate = moment().format("dddd, MMMM, Do, YYYY");
let dateText = document.querySelector("#currentDay");
let timeBlock = document.querySelectorAll("textarea");
let currenthour = moment().hour();
var saveButtons = document.querySelectorAll(".saveBtn");

// display the current date in the webpage
function displayDate() {
    dateText.innerHTML = momentDate;
}
displayDate();

// code to refresh the page automatically every hour
setTimeout(function () {
    location.reload();
}, (1000 * 60) * 60);


// check the current time of day and apply classes accordingly
let timeOfDay = function () {
    for (let i = 0; i < timeBlock.length; i++) {
        if (timeBlock[i].id > currenthour) {
            timeBlock[i].classList.add("future");
        } else if (timeBlock[i].id < currenthour) {
            timeBlock[i].classList.add("past");
        } else {
            timeBlock[i].classList.add("present");
        };
    };
};


// save text into localStorage when button is clicked
$(".saveBtn").on("click", function () {
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
})

// FIRST ATTEMPT AT GET ITEM
// $("#9").val(localStorage.getItem("hour-9"))
// $("#10").val(localStorage.getItem("hour-10"))
// $("#11").val(localStorage.getItem("hour-11"))
// $("#12").val(localStorage.getItem("hour-12"))
// $("#13").val(localStorage.getItem("hour-13"))
// $("#14").val(localStorage.getItem("hour-14"))
// $("#15").val(localStorage.getItem("hour-15"))
// $("#16").val(localStorage.getItem("hour-16"))
// $("#17").val(localStorage.getItem("hour-17"))


// WORKING ATTEMPT AT GET ITEM
$(".description").each(function () {
    let time = $(this).parent().attr("id");
    let text = localStorage.getItem(time);
    $(this).val(text);
})

timeOfDay();

