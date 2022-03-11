let momentDate = moment().format("dddd, MMMM, Do, YYYY");
let dateText = document.querySelector("#currentDay");
let timeBlock = document.querySelectorAll("textarea");
let currenthour = moment().hour();
let saveButtons = document.querySelectorAll("[data-id]");

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
timeOfDay();

