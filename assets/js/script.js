let momentDate = moment().format("dddd, MMMM, Do, YYYY");
let dateText = document.querySelector("#currentDay");

// display the current date in the webpage
function displayDate() {
    dateText.innerHTML = momentDate;
}
displayDate();

// code to refresh the page automatically every hour
setTimeout(function () {
    location.reload();
}, (1000 * 60) * 60);

// textarea is clicked

